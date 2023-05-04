import React from "react";
import banner from "../asstes/banner.png";
import bannertwo from "../asstes/bannertwo.png";
import productimg from "../asstes/productimg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ProductCard from "../compounts/ProductCard";
export default function Products() {
  const productslist = [
    {
      img: productimg,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
    {
      img: productimg,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
    {
      img: productimg,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
    {
      img: productimg,
      heading: "Kingdom Tower",
      subheading: "Wood Flooring",
    },
  ];
  return (
    <>
      <div className="product__banner">
        <div className="product__banner__img">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src={banner} alt="products" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bannertwo} alt="products" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="products__details__container">
          {productslist.map((product, index) => {
            return (
              <ProductCard
                productimg={product.img}
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
