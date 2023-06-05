import React from "react";
import banner from "../assets/banner.png";

import banner3 from "../assets/banner3.png";
import banner1 from "../assets/banner1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ProductCard from "../components/ProductCard";
export default function Services() {
  const productslist = [
    {
      img: banner,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
    {
      img: banner,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
    {
      img: banner,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
    {
      img: banner,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
  ];
  return (
    <>
      <div className="product__banner">
        <div className="product__banner__img">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src={banner1} alt="products" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner3} alt="products" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="products__details__container">
          {productslist.map((product, index) => {
            return (
              <ProductCard
                img={product.img}
                heading={product.heading}
                subheading={product.subheading}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
