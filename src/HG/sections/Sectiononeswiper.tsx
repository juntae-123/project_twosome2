"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sectionone from "./Sectionone";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";

const Sectiononeswiper = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className=" w-full h-screen">
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10
          flex items-center gap-4 content-center
          bg-[rgba(0,0,0,0.5)] text-white
          px-34 py-8
          rounded-full mb-6 "
      >
        <span className="swiper-button-prev w-1 h-1 bg-center bg-no-repeat cursor-pointer hover:opacity-80" />
        <span className="swiper-pagination text-base" />
        <span className="swiper-button-next w-1 h-1 bg-center bg-no-repeat cursor-pointer hover:opacity-80" />
      </div>

      <Swiper
        loop={true}
        onSwiper={(swiper: SwiperCore) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".sectionone-swiper-button-prev",
          nextEl: ".sectionone-swiper-button-next",
        }}
        pagination={{
          el: ".sectionone-swiper-pagination",
          type: "fraction",
        }}
        className="w-full h-screen"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-red-300 flex items-center justify-center">
            <Sectionone img="sectionone1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-blue-300 flex items-center justify-center">
            <Sectionone img="sectionone2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Sectiononeswiper;
