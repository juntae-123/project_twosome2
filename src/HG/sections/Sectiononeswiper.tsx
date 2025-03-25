"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/navigation";

// 섹션 컴포넌트 (각 슬라이드 내용)
import Sectionone from "./Sectionone";

const Sectiononeswiper = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = 2; // ✅ 슬라이드 수 고정

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateIndex = () => {
      setCurrentIndex(swiper.realIndex + 1); // 0-based → 1-based
    };

    swiper.on("slideChange", updateIndex);

    return () => {
      swiper.off("slideChange", updateIndex);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className="py-5 w-60 absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between bg-black/60 text-white px-6 py-2 rounded-full min-w-[200px]">
        <button className="custom-swiper-prev w-6 h-6">
          <img
            src="https://www.twosome.co.kr/resources/images/main/ico_arrow_left.svg"
            alt="이전"
            className="w-full h-full object-contain"
          />
        </button>

        <span className="text-sm font-semibold">
          {currentIndex} <span className="opacity-50">/ {totalSlides}</span>
        </span>

        <button className="custom-swiper-next w-6 h-6">
          <img
            src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
            alt="다음"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: ".custom-swiper-prev",
          nextEl: ".custom-swiper-next",
        }}
        pagination={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ width: "100%", height: "100vh" }}
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            <Sectionone img="sectionone1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            <Sectionone img="sectionone2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Sectiononeswiper;
