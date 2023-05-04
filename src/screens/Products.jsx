import React from "react";
import ProductCard from "../compounts/ProductCard";
import banner from "../asstes/banner.png";

export default function Products() {
  const filter = [
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
  ];
  return (
    <>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Menu Items</div>
        </div>
        <div className="filter__products__col">
          <div className="filter__products__row">
            <div className="filter__products__row__type">Filter Type</div>
            <div className="filter__products__row__button__wraper">
              <div className="filter__products__row__button">All</div>
              <div className="filter__products__row__button">Burgers</div>
              <div className="filter__products__row__button">Pizza</div>
            </div>
          </div>
          <div className="filter__products__row">
            <div className="filter__products__row__type">Filter Price</div>
            <div className="filter__products__row__button__wraper">
              <div className="filter__products__row__button">All</div>
              <div className="filter__products__row__button">Burgers</div>
              <div className="filter__products__row__button">Pizza</div>
            </div>
          </div>
        </div>
        <div className="product__imgs__container">
          {filter.map((product, index) => {
            return (
              <ProductCard
                img={product.img}
                heading={product.heading}
                prise={product.prise}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
