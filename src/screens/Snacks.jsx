import React, { useState } from "react";
import s1 from "../asstes/s1.jpg";
import s2 from "../asstes/s2.jpg";
import s3 from "../asstes/s3.webp";
import s4 from "../asstes/s4.jpg";

import ProductCard from "../compounts/ProductCard";
const products = [
  {
    img: s1,
    heading: "pkory",
    prise:"500",
    category: "snacks",
  },
  {
    img: s2,
    heading: "fruit chat",
    category: "snacks",
    prise:"100",
  },
  {
    img:s3,
    heading:"cheeseballs",
    category:"snacks",
    prise:"5000",
  },
 
  {
    img: s4,
    heading: "french fries",
    category: "snacks",
    prise:"1000",
  },
  
];
export default function Snacks() {
  const [prise, setPrise] = useState("all");
  const filteredProducts =
    prise === "all"
      ? products
      : products.filter((product) => product.prise === prise);
  return (
    <>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Snacks</div>
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
                  setPrise("100");
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
                  setPrise("1000");
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
