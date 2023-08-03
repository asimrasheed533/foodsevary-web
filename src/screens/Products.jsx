import "swiper/css";
import { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import ProductsFilterCard from "..//components/ProductsFilterCard";
import { useLocation } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Products({ products: unFillteredProducts }) {
  const category = location.pathname.split("/").at(-1);
  const priceRanges = [2000, 5000, 10000, 15000, 20000, 30000, 40000, 50000];
  const [price, setPrice] = useState("");
  const products = unFillteredProducts.filter(
    (product) => product.category === category
  );

  const [filterlist, setFilterlist] = useState(products);

  useEffect(() => {
    if (price === "") {
      setFilterlist(products);
    } else {
      setFilterlist(products.filter((product) => product.price <= price));
    }
  }, [price]);

  // useEffect(() => {
  //   if (state) {
  //     setFilterlist(
  //       products.filter((product) => product.category === state.heading)
  //     );
  //   }
  // }, [state]);

  return (
    <>
      <div className="landing__main__banner">
        <div className="landing__main__banner__img">
          <img src={banner} alt="img" />
          <div className="landing__main__banner__img__text__wraper">
            <div className="landing__main__banner__text__container">
              <div className="landing__main__banner__img__text__heading">
                Fresh & Healthy <span>Delicious</span> Food Is Waiting For You.
              </div>
              <div className="landing__main__banner__img__text__btn">
                <Link
                  className="landing__main__banner__img__text__btn__link"
                  to="/"
                >
                  View Food Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Items</div>
        </div>
        <div className="filter__products__row__type">Filter Type</div>
        <div className="filter__products__col">
          <ScrollContainer className="filter__products__row">
            <div className="filter__products__row__button__wraper">
              {priceRanges.map((price) => (
                <button
                  onClick={() => {
                    setPrice(price);
                  }}
                  className="filter__products__row__button"
                >
                  RS:/{price}
                </button>
              ))}
            </div>
          </ScrollContainer>
        </div>
        <div className="products__filter__card__container__wraper">
          {filterlist.length === 0 ? (
            <div className="products__filter__card__container__wraper__entry">
              No results found
            </div>
          ) : (
            filterlist.map((product, index) => {
              return <ProductsFilterCard product={product} key={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
