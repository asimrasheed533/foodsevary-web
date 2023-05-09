import React, { useState } from "react";
import ProductCard from "../compounts/ProductCard";
import piz1 from "../asstes/piz1.jpg";
import piz2 from "../asstes/piz2.png";
import piz3 from "../asstes/piz3.png";
import piz4 from "../asstes/piz4.jpg";
import piz5 from "../asstes/piz5.jpg";

const products = [
  {
    img: piz1,
    heading: "Tikka pizza",
    
    category: "pizza",
  },
  {
    img: piz2,
    heading: "Cheese Piza",
    category: "pizza",
  },
  {
    img: piz3,
    heading: "kbab pizza",
  
    category: "pizza",
  },
  {
    img: piz4,
    heading: "meat pizza",

    category: "pizza",
  },
  {
    img: piz5,
    heading: "veg pizza",
    
    category: "pizza",
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
                  setCategory("snacks");
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
