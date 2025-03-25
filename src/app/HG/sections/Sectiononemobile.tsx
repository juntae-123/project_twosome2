"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageMap } from "@/common/Image";

const SectiononeMobile = () => {
  return (
    <section>
      <div className="fixed w-full h-[56px] px-4 flex items-center justify-between bg-white z-50">
        <img
          src={ImageMap.logoBlack}
          alt="투썸 로고"
          className="w-28 h-auto object-cover"
        />

        <div className="flex items-center gap-2">
          <button className="text-xs border px-2 py-1 rounded-full">
            English
          </button>
          <button className="w-4 h-4 bg-red-500 rounded-sm" />
        </div>
      </div>

      <div className="h-full w-full">
        <Swiper spaceBetween={0} slidesPerView={1} loop className="w-full">
          <SwiperSlide>
            <picture className="block absolute w-auto h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <source
                media="(max-width: 767px)"
                srcSet={ImageMap.mobilesection1}
              />
              <source
                media="(min-width: 768px)"
                srcSet={ImageMap.sectionone2}
              />
              <img
                src={ImageMap.mobilesection1}
                alt=""
                className="h-full max-w-inherit object-contain"
                style={{ maxWidth: "inherit" }}
              />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectiononeMobile;
