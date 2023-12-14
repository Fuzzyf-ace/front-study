import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenuIndex } from "../../store/modules/takeaway";
import "./index.scss";

const Menu = () => {
  const { activeMenuIndex, foodsList } = useSelector((state) => state.foods);
  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }));
  const dispatch = useDispatch();
  useEffect(() => {
    const categories = foodsList.map((item) =>
      document.getElementById(item.name)
    );
    const goodslist = document.getElementsByClassName("goods-list")[0];
    goodslist.addEventListener("scroll", () => {
      categories.forEach((category, index) => {
        if (
          30 < category.getClientRects()[0].y &&
          category.getClientRects()[0].y < 60
        ) {
          dispatch(setActiveMenuIndex(index));
        }
      });
    });
  }, [foodsList, dispatch]);

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames("list-menu-item", {
              active: activeMenuIndex === index,
            })}
            onClick={() => {
              dispatch(setActiveMenuIndex(index));
              const activeMenu = document.getElementById(item.name);
              activeMenu.scrollIntoView({ behavior: "instant" });
            }}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
