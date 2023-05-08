import React, { useState } from "react";
import banner from "../asstes/banner.png";
import ProductCard from "../compounts/ProductCard";
const products = [
  {
    img: banner,
    heading: "Pizza Large",
    prise: "Rs:100",
    category: "pizza",
  },
  {
    img: banner,
    heading: "Piza small",
    prise: "500",
    category: "pizza",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "Rs:100",
    category: "pizza",
  },
  {
    img: banner,
    heading: "Rice",
    prise: "Rs:100",
    category: "Rice",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "1000",
    category: "pizza",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "1000",
    category: "pizza",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "1000",
    category: "pizza",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "5000",
    prisefilter: "5000",
    category: "pizza",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "5000",
    category: "pizza",
  },
  {
    img: banner,
    heading: "pizza",
    prise: "5000",
    category: "pizza",
  },
];
export default function pizza() {
  const [prise, setPrise] = useState("all");
  const filteredProducts =
    prise === "all"
      ? products
      : products.filter((product) => product.prise === prise);
  return (
    <>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Pizza</div>
        </div>
        <div className="filter__products__col">
          <div className="filter__products__row">
            <div className="filter__products__row__type">Filter Prise</div>
            <div className="filter__products__row__button__wraper">
              <button
                onClick={() => {
                  setPrise("all");
                }}
                className="filter__products__row__button"
              >
                All
              </button>
              <button
                onClick={() => {
                  setPrise("Rs:100");
                }}
                className="filter__products__row__button"
              >
                Rs 100/
              </button>
              <button
                onClick={() => {
                  setPrise("500");
                }}
                className="filter__products__row__button"
              >
                Rs 500/
              </button>
              <button
                onClick={() => {
                  setPrise("500");
                }}
                className="filter__products__row__button"
              >
                Rs 1000/
              </button>
              <button
                onClick={() => {
                  setPrise("5000");
                }}
                className="filter__products__row__button"
              >
                Rs 5000/
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
