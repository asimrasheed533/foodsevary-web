import React, { Fragment } from "react";

import { Link } from "react-router-dom";

export default function ProductsFilterCard({ product }) {
  return (
    <>
      <div className="products__main__container">
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          to={`/details/${product.name}}`}
          state={{
            product,
          }}
          className="products__filter__card__container"
        >
          <div className="products__filter__card__img">
            <img src={product.img} alt="products" />
          </div>
          <div className="products__filter__card__row">
            <div className="products__filter__card__row__heading">
              {product.name}
            </div>
          </div>
          <div className="products__filter__card__row">
            <div className="products__filter__card__row__entry">
              RS:/ {product.price}
            </div>
            <div className="products__filter__card__row__entry__rating">
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <Fragment key={i}>⭐</Fragment>
                ))}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
