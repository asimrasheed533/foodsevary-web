import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SelectCatagorieCard({
  tabel,
  heading,
  subheading,
  link,
}) {
  const navigate = useNavigate();
  return (
    <Link
      to={link}
      className="select__catagories__card"
      onClick={() => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="select__catagories__card__img">
        <img src={tabel} alt="select setegories" />
      </div>
      <div className="select__catagories__card__text">
        <div className="select__catagories__card__text__heading">{heading}</div>
        <div className="select__catagories__card__text__sub__heading">
          {subheading}
        </div>
      </div>
    </Link>
  );
}
