import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import banner1 from "../asstes/banner1.png";
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
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={banner1} heading="burger" price="$99" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
