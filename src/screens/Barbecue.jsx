import React, { useState } from "react";
import bbq1 from "../asstes/bbq1.jpg";
import bbq2 from "../asstes/bbq2.jpg";
import bbq3 from "../asstes/bbq3.webp";
import bbq4 from "../asstes/bbq4.jpg";
import bbq5 from "../asstes/bbq5.jpg";

import ProductCard from "../compounts/ProductCard";
const products = [
  {
    img: bbq1,
    heading: "crispy chicken",
      prise:"500",
    category: "barbecue",
  },
  {
    img: bbq2,
    heading: "chicken pops",
    prise:"1000",
    category: "barbecue",
  
  },
  {
    img: bbq3,
    heading: "mlai boti",
    category: "barbecue",
    prise:"5000",
  },
  {
    img: bbq4,
    heading: "sekh kbab",
    category: "barbecue",
    prise:"100",
  },
  {
    img: bbq5,
    heading: "chicken tikka",
    category: "barbecue",
    prise:"1000",
  },
  
  
];
export default function Barbecue() {
  const [prise, setPrise] = useState("all");
  const filteredProducts =
    prise === "all"
      ? products
      : products.filter((product) => product.prise === prise);
  return (
    <>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Barbecue</div>
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
