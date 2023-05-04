import React from "react";

export default function ProductCard({ img, heading, prise }) {
  return (
    <div className="product__wraper">
      <div className="product__wraper__img">
        <img src={img} alt="product" />
      </div>
      <div className="product__wraper__text">
        <div className="product__wraper__text__heading">{heading}</div>
        <div className="product__wraper__sub__heading">{prise}</div>
      </div>
    </div>
  );
}
