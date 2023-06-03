import React from "react";

export function CartItem({ img, name, price, onRemove }) {
  return (
    <div className="cart__container__wraper__card">
      <div className="cart__container__wraper__card__img">
        <img src={img} alt="cooking website" />
      </div>
      <div className="cart__container__wraper__card__text">
        <div className="cart__container__wraper__card__text__heading">
          {name}
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
