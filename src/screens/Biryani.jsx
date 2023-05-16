import React, { useState } from "react";
import b1 from "../asstes/b1.jpg";
import b2 from "../asstes/b2.jpg";
import b3 from "../asstes/b3.jpg";
import b4 from "../asstes/b4.jpg";

import ProductCard from "../compounts/ProductCard";
const products = [
  {
    img: b1,
    heading: "Fish biryani",
      prise:"500",
    category: "Biryani",
  },
  {
    img: b2,
    heading: "Sindhi biryani",
    prise:"1000",
    category: "Biryani",
  
  },
  {
    img: b3,
    heading: "Tikka biryani",
    category: "Biryani",
    prise:"5000",
  },
  {
    img: b4,
    heading: "Veg biryani",
    category: "Biryani",
    prise:"100",
  },
  
  
];
export default function Biryani() {
  const [prise, setPrise] = useState("all");
  const filteredProducts =
    prise === "all"
      ? products
      : products.filter((product) => product.prise === prise);
  return (
    <>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Biryani</div>
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
