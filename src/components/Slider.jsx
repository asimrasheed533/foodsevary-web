import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import b2 from "../assets/b2.jpg";
import s1 from "../assets/s1.jpg";
import bbq4 from "../assets/bbq4.jpg";
import piz5 from "../assets/piz5.jpg";
import chic1 from "../assets/chic1.webp";
import b1 from "../assets/b1.jpg";
import s3 from "../assets/s3.webp";
import piz1 from "../assets/piz1.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Arrivalcard from "./Arrivalcard";
export default function Slider() {
  const [isSliderPreview, setIsSliderPreview] = useState(false);

  function changesliderpreview() {
    if (window.innerWidth <= 500) {
      setIsSliderPreview(1);
    } else if (window.innerWidth <= 800) {
      setIsSliderPreview(2);
    } else if (window.innerWidth <= 1000) {
      setIsSliderPreview(3);
    } else {
      setIsSliderPreview(4);
    }
  }
  useEffect(() => {
    changesliderpreview();
    window.addEventListener("resize", changesliderpreview);
  }, []);

  return (
    <>
      <div className="swiper__slider__heading">
        Top Rated <span>Products</span>
      </div>
      <div className="arrival__card__main__container">
        <Swiper
          slidesPerView={isSliderPreview}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <Arrivalcard img={b2} heading="biryani" price="1000" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={s1} heading="pkory" price="500" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={bbq4} heading="kbab" price="100" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={piz5} heading="veg pizza" price="1000" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={chic1} heading="boneless karahi" price="500" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={piz1} heading="tikka pizza" price="500" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={s3} heading="cheese balls" price="5000" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={b1} heading="crispy chicken" price="500" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
