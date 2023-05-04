import React from "react";
import { Link } from "react-router-dom";
import banner from "../asstes/banner.png";
import productimg from "../asstes/productimg.png";
import showroom from "../asstes/showroom.png";
import tabel from "../asstes/tabel.png";
import ProductCard from "../compounts/ProductCard";
import SelectCatagorieCard from "../compounts/SelectCatagorieCard";

export default function Home() {
  const filter = [
    {
      img: productimg,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: productimg,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: productimg,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: productimg,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: productimg,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: productimg,
      heading: "Burger",
      prise: "$99",
    },
  ];
  return (
    <div className="main__header">
      <div className="landing__main__banner">
        <div className="landing__main__banner__img">
          <img src={banner} alt="img" />
          <div className="landing__main__banner__img__text__wraper">
            <div className="landing__main__banner__text__container">
              <div className="landing__main__banner__img__text__heading">
                Fresh & Healthy <span>Delicious</span> Food Is Waiting For You
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
      <div className="delivery__container">
        <div className="delivery__wraper__card">
          <div className="delivery__wraper__card__img">
            <svg
              width="120"
              height="58"
              viewBox="0 0 226 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M219.397 72.4049L198.739 51.7732C194.501 47.5411 188.745 45.1781 182.742 45.1781H169.5V11.2857C169.5 5.0433 164.45 0 158.2 0H11.3C5.04969 0 0 5.0433 0 11.2857V129.786C0 145.374 12.6419 158 28.25 158C37.5372 158 45.6944 153.45 50.85 146.573C56.0056 153.486 64.1628 158 73.45 158C89.0581 158 101.7 145.374 101.7 129.786C101.7 127.846 101.488 125.977 101.135 124.143H158.765C158.377 125.977 158.2 127.846 158.2 129.786C158.2 145.374 170.842 158 186.45 158C202.058 158 214.7 145.374 214.7 129.786C214.7 127.846 214.488 125.977 214.135 124.143H220.35C223.458 124.143 226 121.604 226 118.5V88.346C226 82.3504 223.634 76.6371 219.397 72.4049ZM28.25 141.071C22.035 141.071 16.95 135.993 16.95 129.786C16.95 123.579 22.035 118.5 28.25 118.5C34.465 118.5 39.55 123.579 39.55 129.786C39.55 135.993 34.465 141.071 28.25 141.071ZM73.45 141.071C67.235 141.071 62.15 135.993 62.15 129.786C62.15 123.579 67.235 118.5 73.45 118.5C79.665 118.5 84.75 123.579 84.75 129.786C84.75 135.993 79.665 141.071 73.45 141.071ZM169.5 62.0714H182.742C184.261 62.0714 185.673 62.671 186.732 63.729L202.023 79H169.5V62.0714ZM186.45 141.071C180.235 141.071 175.15 135.993 175.15 129.786C175.15 123.579 180.235 118.5 186.45 118.5C192.665 118.5 197.75 123.579 197.75 129.786C197.75 135.993 192.665 141.071 186.45 141.071Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="delivery__wraper__card__text">
            <div className="delivery__wraper__card__text__heading">
              SAFE SHIPPING
            </div>
            <div className="delivery__wraper__card__text__sub__heading">
              In all major cities across Pakistan
            </div>
          </div>
        </div>
        <div className="delivery__wraper__card">
          <div className="delivery__wraper__card__img">
            <svg
              width="90"
              height="58"
              viewBox="0 0 101 181"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.3683 82.5105L35.4851 71.3395C31.1005 70.0668 28.0488 65.9307 28.0488 61.335C28.0488 55.5727 32.679 50.9062 38.3965 50.9062H61.6525C65.9319 50.9062 70.1412 52.2143 73.6489 54.6182C75.7886 56.0676 78.6649 55.7141 80.4889 53.9111L92.6957 41.8916C95.1861 39.4523 94.8354 35.3869 92.0643 33.2305C83.4704 26.443 72.7369 22.6604 61.7227 22.625V5.65625C61.7227 2.54531 59.1972 0 56.1104 0H44.8858C41.799 0 39.2734 2.54531 39.2734 5.65625V22.625H38.3965C16.0525 22.625 -1.90694 41.9623 0.162606 64.9055C1.63584 81.2025 13.9829 94.4594 29.5571 99.0551L65.511 109.661C69.8956 110.969 72.9473 115.069 72.9473 119.665C72.9473 125.427 68.3172 130.094 62.5996 130.094H39.3436C35.0642 130.094 30.855 128.786 27.3473 126.382C25.2076 124.932 22.3313 125.286 20.5073 127.089L8.30046 139.108C5.81 141.548 6.16077 145.613 8.93185 147.77C17.5257 154.557 28.2593 158.34 39.2734 158.375V175.344C39.2734 178.455 41.799 181 44.8858 181H56.1104C59.1972 181 61.7227 178.455 61.7227 175.344V158.304C78.0686 157.986 93.3972 148.194 98.7991 132.604C106.341 110.827 93.6778 88.485 73.3683 82.5105Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="delivery__wraper__card__text">
            <div className="delivery__wraper__card__text__heading">
              COMPETITIVE PRICES
            </div>
            <div className="delivery__wraper__card__text__sub__heading">
              Quality with affordability ensured
            </div>
          </div>
        </div>
        <div className="delivery__wraper__card">
          <div className="delivery__wraper__card__img">
            <svg
              width="90"
              height="60"
              viewBox="0 0 175 175"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M87.5 0C39.1633 0 0 39.1633 0 87.5C0 135.837 39.1633 175 87.5 175C135.837 175 175 135.837 175 87.5C175 39.1633 135.837 0 87.5 0ZM120.133 110.433L113.076 119.254C112.613 119.833 112.04 120.315 111.391 120.673C110.742 121.03 110.028 121.257 109.291 121.339C108.554 121.42 107.809 121.356 107.097 121.15C106.385 120.944 105.72 120.599 105.141 120.136L81.502 102.594C79.8503 101.271 78.5171 99.5944 77.601 97.6871C76.6849 95.7798 76.2094 93.691 76.2097 91.5751V36.6935C76.2097 35.1964 76.8044 33.7605 77.8631 32.7018C78.9218 31.6431 80.3576 31.0484 81.8548 31.0484H93.1452C94.6423 31.0484 96.0782 31.6431 97.1369 32.7018C98.1956 33.7605 98.7903 35.1964 98.7903 36.6935V87.5L119.254 102.495C119.833 102.958 120.315 103.531 120.673 104.181C121.031 104.831 121.257 105.545 121.338 106.282C121.42 107.019 121.356 107.766 121.149 108.478C120.942 109.19 120.596 109.855 120.133 110.433Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="delivery__wraper__card__text">
            <div className="delivery__wraper__card__text__heading">
              CUSTOMER SUPPORT
            </div>
            <div className="delivery__wraper__card__text__sub__heading">
              +92-300-1234567
            </div>
          </div>
        </div>
      </div>
      <div className="select__catagories__section">
        <div className="select__catagories__section__heading">
          BROWSE OUR CATEGORIES
        </div>

        <SelectCatagorieCard
          tabel={tabel}
          heading="TABEL"
          subheading="230 products"
        />
        <SelectCatagorieCard
          tabel={tabel}
          heading="TABEL"
          subheading="230 products"
        />
        <SelectCatagorieCard
          tabel={tabel}
          heading="TABEL"
          subheading="230 products"
        />
        <SelectCatagorieCard
          tabel={tabel}
          heading="TABEL"
          subheading="230 products"
        />
        <SelectCatagorieCard
          tabel={tabel}
          heading="TABEL"
          subheading="230 products"
        />
      </div>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Menu Items</div>
        </div>
        <div className="filter__products__col">
          <div className="filter__products__row">
            <div className="filter__products__row__type">Filter Type</div>
            <div className="filter__products__row__button__wraper">
              <div className="filter__products__row__button">All</div>
              <div className="filter__products__row__button">Burgers</div>
              <div className="filter__products__row__button">Pizza</div>
            </div>
          </div>
          <div className="filter__products__row">
            <div className="filter__products__row__type">Filter Price</div>
            <div className="filter__products__row__button__wraper">
              <div className="filter__products__row__button">All</div>
              <div className="filter__products__row__button">Burgers</div>
              <div className="filter__products__row__button">Pizza</div>
            </div>
          </div>
        </div>
        <div className="product__imgs__container">
          {filter.map((product, index) => {
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
      <div className="showrom__container">
        <div className="showrom__container__img">
          <img src={showroom} alt="products" />
        </div>
        <div className="showrom__container__content">
          <div className="showrom__container__content__heading">
            Our ShowRooms
          </div>
          <div className="showrom__container__content__sub__heading">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ipsa commodi totam corporis consequatur perspiciatis alias
            voluptatem. Voluptatibus suscipit sit pariatur, recusandae soluta
            omnis voluptatem illum, sequi repudiandae otam corporis consequatur
            perspiciatis alias voluptatem. Voluptatibus suscipit sit pariatur,
            recusandae soluta omnis voluptatem illum, sequi repudianda dicta
            reprehenderit.
          </div>
          <div className="product__see__more__btn">
            <Link className="product__see__more__btn__link" to="/product">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
