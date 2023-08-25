import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import sop1 from "../assets/sop1.png";
import sopp from "../assets/sopp.jpg";
import brani1 from "../assets/brani1.jpg"
import brani2 from "../assets/brani2.jpg"
import kor1 from "../assets/kor1.jpg"
import kor2 from "../assets/kor2.jpg"
import sop2 from "../assets/sop2.jpg"
import metha1 from "../assets/metha1.jpg"
import metha2 from "../assets/metha2.jpg"
import metha3 from "../assets/metha3.jpg"
import shar1 from "../assets/shar1.jpg"
import shar2 from "../assets/shar2.jpg"
import shar3 from "../assets/shar3.jpg"
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
            <Arrivalcard img={kor1} />
          </SwiperSlide>

          <SwiperSlide>
            <Arrivalcard img={metha1}  />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={brani1} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={shar1} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={kor2}  />
          </SwiperSlide>
        
          <SwiperSlide>
            <Arrivalcard img={shar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={sop2} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={metha2}  />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={brani2}  />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={shar3} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={sopp} />
          </SwiperSlide>
          <SwiperSlide>
            <Arrivalcard img={metha3}  />
          </SwiperSlide>
        </Swiper>
       
      </div>
    </>
  );
}
