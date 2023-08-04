import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ img, heading, time }) {
  return (
    <Link to="/details" className="product__wraper">
      <div className="product__wraper__img">
        <img src={img} alt="product" />
      </div>
      <div className="product__wraper__text">
        <div className="product__wraper__text__heading">{heading}</div>
        <div className="product__wraper__sub__heading">{time}</div>
      </div>
    </Link>
  );
}
