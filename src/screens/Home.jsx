import React from "react";
import { Link } from "react-router-dom";
import banner from "../asstes/banner.png";

import cate1 from "../asstes/cate1.png";
import cate3 from "../asstes/cate3.png";
import cate4 from "../asstes/cate4.png";
import cate5 from "../asstes/cate5.png";
import cate6 from "../asstes/cate6.png";
import cate7 from "../asstes/cate7.png";
import healthy from "../asstes/healthy.png";
import delivery from "../asstes/delivery.png";
import quality from "../asstes/quality.png";
import SelectCatagorieCard from "../compounts/SelectCatagorieCard";
import Slider from "../compounts/Slider";
export default function Home() {
  const filter = [
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
      heading: "Burger",
      prise: "$99",
    },
    {
      img: banner,
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
      <div className="delivery__container">
        <div className="delivery__container__text__wraper">
          <div className="delivery__container__heading">Why Choose us!</div>
          <div className="delivery__container__sub__heading">
            Our fast food delivery service provides a convenient, affordable,
            and reliable way to enjoy your favorite meals from the comfort of
            your own home.
          </div>
        </div>

        <div className="delivery__container__row">
          <div className="delivery__wraper__card">
            <div className="delivery__wraper__card__img">
              <img src={healthy} alt="healthy" />
            </div>
            <div className="delivery__wraper__card__text">
              <div className="delivery__wraper__card__text__heading">
                Eat Healthy Food
              </div>
              <div className="delivery__wraper__card__text__sub__heading">
                healthy food means eating a variety of foods that give you the
                nutrients you need to maintain your health, feel good, and have
                energy.
              </div>
            </div>
          </div>
          <div className="delivery__wraper__card">
            <div className="delivery__wraper__card__img">
              <img src={quality} alt="quality" />
            </div>
            <div className="delivery__wraper__card__text">
              <div className="delivery__wraper__card__text__heading">
                Quality Assurance
              </div>
              <div className="delivery__wraper__card__text__sub__heading">
                We ensure quality products and services are delivered to our
                customers in all major cities across Pakistan.
              </div>
            </div>
          </div>
          <div className="delivery__wraper__card">
            <div className="delivery__wraper__card__img">
              <img src={delivery} alt="delivery" />
            </div>
            <div className="delivery__wraper__card__text">
              <div className="delivery__wraper__card__text__heading">
                Instant Delivery
              </div>
              <div className="delivery__wraper__card__text__sub__heading">
                We ensure quality products and services are delivered to our
                customers in all major cities across Pakistan.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="select__catagories__section">
        <div className="select__catagories__section__heading">
          BROWSE OUR CATEGORIES
        </div>

        <SelectCatagorieCard tabel={cate1} heading="Pizza"/>
        <SelectCatagorieCard tabel={cate6} heading="snacks" />
        <SelectCatagorieCard tabel={cate5} heading="Barbecue" />
        <SelectCatagorieCard tabel={cate4} heading="Bryani" />
        <SelectCatagorieCard tabel={cate3} heading="Chicken Curry" />
      </div>
      <div className="collection__details__similar__items__list">
        <Slider />
      </div>
    </div>
  );
}
