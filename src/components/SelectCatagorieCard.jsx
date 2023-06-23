import { Link } from "react-router-dom";
import React from "react";

export default function SelectCatagorieCard({ img, heading, link, _id }) {
  return (
    <Link
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      to={link}
      state={{ _id }}
      className="select__catagories__card"
    >
      <div className="select__catagories__card__img">
        <img src={img} alt={heading} />
      </div>
      <div className="select__catagories__card__text">
        <div className="select__catagories__card__text__heading">{heading}</div>
      </div>
    </Link>
  );
}
