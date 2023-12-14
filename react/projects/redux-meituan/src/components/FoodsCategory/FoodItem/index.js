import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { addCart, removeCart } from "../../../store/modules/takeaway";
import Count from "../../Count";

const Foods = ({
  id,
  picture,
  name,
  unit,
  description,
  food_tag_list,
  month_saled,
  like_ratio_desc,
  price,
  tag,
}) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.foods);
  const itemInCart = cartList.find((item) => item.id === id);

  return (
    <dd className="cate-goods">
      <div className="goods-img-wrap">
        <img src={picture} alt="" className="goods-img" />
      </div>
      <div className="goods-info">
        <div className="goods-desc">
          <div className="goods-title">{name}</div>
          <div className="goods-detail">
            <div className="goods-unit">{unit}</div>
            <div className="goods-detail-text">{description}</div>
          </div>
          <div className="goods-tag">{food_tag_list.join(" ")}</div>
          <div className="goods-sales-volume">
            <span className="goods-num">月售{month_saled}</span>
            <span className="goods-num">{like_ratio_desc}</span>
          </div>
        </div>
        <div className="goods-price-count">
          <div className="goods-price">
            <span className="goods-price-unit">¥</span>
            {price}
          </div>
          <div className="goods-count">
            <Count
              count={itemInCart?.count ?? 0}
              onPlus={() =>
                dispatch(
                  addCart({
                    id,
                    picture,
                    name,
                    unit,
                    description,
                    food_tag_list,
                    month_saled,
                    like_ratio_desc,
                    price,
                    tag,
                  })
                )
              }
              onMinus={() => {
                dispatch(
                  removeCart({
                    id,
                    picture,
                    name,
                    unit,
                    description,
                    food_tag_list,
                    month_saled,
                    like_ratio_desc,
                    price,
                    tag,
                  })
                );
              }}
            />
          </div>
        </div>
      </div>
    </dd>
  );
};

export default Foods;
