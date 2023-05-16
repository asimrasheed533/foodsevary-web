import React, { useState } from "react";
import piz1 from "../asstes/piz1.jpg";
import piz2 from "../asstes/piz2.jpg";
import piz3 from "../asstes/piz3.png";
import piz4 from "../asstes/piz4.jpg";
import piz5 from "../asstes/piz5.jpg"

import ProductCard from "../compounts/ProductCard";
const products = [
  {
    img: piz1,
    heading: "Tikka pizza",
      prise:"500",
    category: "pizza",
  },
  {
    img: piz2,
    heading: "cheese Pizza",
    prise:"100",
    category: "pizza",
  
  },
  {
    img: piz3,
    heading: "kbab piza",
    category: "pizza",
    prise:"5000",
  },
  {
    img: piz4,
    heading: "Meat pizza",
    category: "pizza",
    prise:"100",
  },
  {
    img: piz5,
    heading: "veg pizza",
    category: "pizza",
    prise:"1000",
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
