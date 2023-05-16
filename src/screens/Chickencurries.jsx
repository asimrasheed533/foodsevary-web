import React, { useState } from "react";
import chic1 from "../asstes/chic1.webp";
import chic2 from "../asstes/chic2.jpg";
import chic3 from "../asstes/chic3.jpg";
import chic4 from "../asstes/chic4.jpg";
import chic5 from "../asstes/chic5.webp"


import ProductCard from "../compounts/ProductCard";
const products = [
  {
    img: chic1,
    heading: "boneless chicken",
      prise:"500",
    category: "chicken",
  },
  {
    img: chic2,
    heading: "Makhni handi",
    prise:"1000",
    category: "chicken",
  
  },
  {
    img: chic3,
    heading: "Hara masala",
    category: "chicken",
    prise:"5000",
  },
  {
    img: chic4,
    heading: "tikka karahi",
    category: "chicken",
    prise:"100",
  },
  {
    img: chic5,
    heading: "white karahi",
    category: "chicken",
    prise:"100",
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
          <div className="product__header__heading">Top Rated Chicken curries</div>
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
