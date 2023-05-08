import React, { useState } from "react";
import ProductCard from "../compounts/ProductCard";
import banner from "../asstes/banner.png";

const products = [
  {
    img: banner,
    heading: "Burger",
    prise: "$99",
    category: "burger",
  },
  {
    img: banner,
    heading: "Piza",
    prise: "$99",
    category: "pizza",
  },
  {
    img: banner,
    heading: "Burger",
    prise: "$99",
    category: "burger",
  },
  {
    img: banner,
    heading: "Rice",
    prise: "$99",
    category: "Rice",
  },
  {
    img: banner,
    heading: "Burger",
    prise: "$99",
    category: "burger",
  },
  {
    img: banner,
    heading: "Burger",
    prise: "Rs100",
    category: "burger",
  },
  {
    img: banner,
    heading: "Burger",
    prise: "Rs100",
    category: "burger",
  },
];
export default function Products() {
  const [category, setCategory] = useState("all");
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
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
              <button
                onClick={() => {
                  setCategory("all");
                }}
                className="filter__products__row__button"
              >
                All
              </button>
              <button
                onClick={() => {
                  setCategory("burger");
                }}
                className="filter__products__row__button"
              >
                Burgers
              </button>
              <button
                onClick={() => {
                  setCategory("pizza");
                }}
                className="filter__products__row__button"
              >
                Pizza
              </button>
              <button
                onClick={() => {
                  setCategory("Rice");
                }}
                className="filter__products__row__button"
              >
                Rice
              </button>
            </div>
          </div>
        </div>
        <div className="product__imgs__container">
          {filteredProducts.map((product, index) => {
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
