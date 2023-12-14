import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  cleanCart,
  removeCart,
  toggleCart,
} from "../../store/modules/takeaway";
import Count from "../Count";
import "./index.scss";

const Cart = () => {
  const { cartList: cart, isCartOpen } = useSelector((state) => state.foods);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (prev, current) => prev + current.count * current.price,
    0
  );
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames("cartOverlay", { visible: isCartOpen })}
        onClick={() => dispatch(toggleCart())}
      />
      <div className="cart" onClick={() => dispatch(toggleCart())}>
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div className={classNames("icon", { fill: cart.length > 0 })}>
          {true && <div className="cartCornerMark">{0}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {total}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {total > 20 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames("cartPanel", { visible: isCartOpen })}>
        <div className="header">
          <span className="text">购物车</span>
          <span
            className="clearCart"
            onClick={() => {
              dispatch(cleanCart());
            }}
          >
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => dispatch(addCart(item))}
                    onMinus={() => dispatch(removeCart(item))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
