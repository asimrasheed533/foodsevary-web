import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import sop1 from "../assets/sop1.jpg";
import qorma1 from "../assets/qorma1.jpg";
import SOP2 from "../assets/SOP2.jpg"

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
            <Arrivalcard img={sop1}  />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={qorma1} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={SOP2} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={qorma1}  />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={sop1} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={qorma1}  />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={SOP2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
