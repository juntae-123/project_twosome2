"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "../supportSwiper.css";
import { useState } from "react";
import SwiperSlideContents from "./supportSwipercomponents/SwiperSlideContents";
import { slideArr } from "./supportSwipercomponents/supporSwipertData";
import SwiperPagenation from "./supportSwipercomponents/SwiperPagenation";

const SupportSwiper = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const prev = () => swiper?.slidePrev();
  const next = () => swiper?.slideNext();

  return (
    <div className=" w-[68%] absolute top-[20%] right-0">
      <Swiper
        loop={true}
        // loop와 slidesPerView 같이 쓸 땐 centeredSlides 추가
        // centeredSlides={true}
        modules={[Navigation, Pagination]}
        spaceBetween={300}
        slidesPerView={1.6}
        // index 변경시 감지하는 이벤트
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        // 스와이퍼 활성화시 작동
        onSwiper={(e) => setSwiper(e)}
      >
        {slideArr.map((v) => {
          return (
            <SwiperSlide>
              <SwiperSlideContents {...v} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperPagenation
        prev={prev}
        next={next}
        swiperIndex={swiperIndex}
        swiper={swiper}
      />
    </div>
  );
};

export default SupportSwiper;
