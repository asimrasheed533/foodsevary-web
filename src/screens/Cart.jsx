import { Link } from "react-router-dom";
import React from "react";
import { cartAtom } from "../global";
import { useAtom } from "jotai";

export default function Cart() {
  const [cart, setCart] = useAtom(cartAtom);
  return (
    <div className="cart__container">
      <div className="cart__container__header">
        <div className="cart__container__header__heading">
          <Link
            to="/products"
            className="cart__container__header__heading__text"
          >
            Back to shop
          </Link>
        </div>
        <div className="cart__container__main">
          <div className="cart__container__wraper">
            {cart.length === 0 ? (
              <div>No Items in Cart</div>
            ) : (
              cart.map((item) => (
                <CartItem
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  onRemove={() => {
                    setCart((prev) => prev.filter((i) => i._id !== item._id));
                  }}
                />
              ))
            )}
            {cart.length !== 0 && (
              <div className="clear__cart__btn">
                <button
                  className="clear__cart__btn__btn"
                  onClick={() => {
                    setCart([]);
                  }}
                >
                  Clear All Cart
                </button>
              </div>
            )}
          </div>
          <div className="cart__container__user__detail__wraper">
            <div className="price__card__wraper">
              <div className="price__card__wraper__row">
                <div className="price__card__wraper__row__heading">Price</div>
                <div className="price__card__wraper__row__sub__heading">
                  Rs:/120000
                </div>
              </div>
              <div className="price__card__wraper__row">
                <div className="price__card__wraper__row__heading">
                  Shipping
                </div>
                <div className="price__card__wraper__row__sub__heading">
                  1200
                </div>
              </div>
              <div className="price__card__wraper__row">
                <div className="price__card__wraper__row__heading">Total</div>
                <div className="price__card__wraper__row__sub__heading__total">
                  RS:/1200000
                </div>
              </div>
            </div>
            <div className="cart__container__user__detail__wraper__card">
              <div className="cart__container__user__detail__wraper__card__heading">
                Pay with Card
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <div className="cart__container__user__detail__wraper__card__input__heading">
                  Card Information
                </div>
                <input type="number" placeholder="XXXXXXXXX" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="number" placeholder="CV" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <div className="cart__container__user__detail__wraper__card__input__heading">
                  Coupon Code
                </div>
                <input type="number" placeholder="Coupon Code" />
              </div>
              <div className="next__btn">
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({ img, heading, price, onRemove }) {
  return (
    <div className="cart__container__wraper__card">
      <div className="cart__container__wraper__card__img">
        <img src={img} alt={heading} />
      </div>
      <div className="cart__container__wraper__card__text">
        <div className="cart__container__wraper__card__text__heading">
          {heading}
        </div>
        <div className="cart__container__wraper__card__price">Rs:/{price}</div>
      </div>

      <div className="cart__container__wraper__card__remove">
        <button className="cart__remove__btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
