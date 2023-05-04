import React from "react";

export default function Arrivalcard({ img, heading, price }) {
  return (
    <div className="arrival__container__card__wraper">
      <div className="arrival__container__card__img">
        <img src={img} alt="new arrival" />
      </div>
      <div className="arrival__card__conent">
        <div className="arrival__container__card__heading">{heading}</div>
        <div className="arrival__container__card__price">{price}</div>
      </div>
    </div>
  );
}
