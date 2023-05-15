import React, { useState } from "react";
import ProductCard from "../compounts/ProductCard";
import piz1 from "../asstes/piz1.jpg";
import piz2 from "../asstes/piz2.png";
import piz3 from "../asstes/piz3.png";
import piz4 from "../asstes/piz4.jpg";
import piz5 from "../asstes/piz5.jpg";
import s1 from "../asstes/s1.jpg";
import s2 from "../asstes/s2.jpg";
import s3 from "../asstes/s3.jpg";
import s4 from "../asstes/s4.jpg";
import b1 from "../asstes/b1.jpg";
import b2 from "../asstes/b2.jpg";
import b3 from "../asstes/b3.jpg";
import b4 from "../asstes/b4.webp";
import bbq1 from "../asstes/bbq1.jpg";
import bbq2 from "../asstes/bbq2.jpg";
import bbq3 from "../asstes/bbq3.webp";
import bbq4 from "../asstes/bbq4.jpg";
import bbq5 from "../asstes/bbq5.jpg";
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
  {
    img: s1,
    heading:"pkory",
    category:"Snacks"
  },
  {
    img:s2,
    heading:"fruit chat",
    category:"Snacks",
  },
  {
    img:s3,
    heading:"cheese balls",
    category:"Snacks",
  },
  {
    img:s4,
    heading:"french fries",
    category:"Snacks",
  },
  {
    img: b1,
    heading: "Fish bryani",
      prise:"500",
    category: "biryani",
  },
  {
    img: b2,
    heading: "Sindhi bryani",
    prise:"100",
    category: "biryani",
  
  },
  {
    img: b3,
    heading: "Tikka bryani",
    category: "biryani",
    prise:"5000",
  },
  {
    img: b4,
    heading: "Veg bryani",
    category: "biryani",
    prise:"100",
  }, 
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
                  setCategory("Snacks");
                }}
                className="filter__products__row__button"
              >
                Snacks
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
                  setCategory("biryani");
                }}
                className="filter__products__row__button"
              >
                Biryani
              </button>
              <button
                onClick={() => {
                  setCategory("barbecue");
                }}
                className="filter__products__row__button"
              >
                Barbecue
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
