"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ImagegatherTwo, ImageMap, imageNames } from "../Image";

const Sectiontwo = () => {
  const [category, setCategory] = useState<"coffee" | "dessert" | "deli">(
    "coffee"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const categoryDescriptions = {
    coffee: {
      title: "COFFEE STORY",
      description: "전문가의 섬세함으로 완성한 최상의 커피",
    },
    dessert: {
      title: "DESSERT STORY",
      description: "달콤함으로 완성되는 완벽한 순간",
    },
    deli: {
      title: "DELI STORY",
      description: "든든하고 맛있는 조화로운 한끼",
    },
  };

  const images: Record<"coffee" | "dessert" | "deli", ImagegatherTwo[]> = {
    coffee: ["sectiontwo1", "sectiontwo2", "sectiontwo3", "sectiontwo4"],
    dessert: [
      "sectiontwo5",
      "sectiontwo6",
      "sectiontwo7",
      "sectiontwo8",
      "sectiontwo9",
      "sectiontwo10",
      "sectiontwo11",
    ],
    deli: [
      "sectiontwo12",
      "sectiontwo13",
      "sectiontwo14",
      "sectiontwo15",
      "sectiontwo16",
    ],
  };

  const currentImages = images[category];

  return (
    <section className="w-full min-h-screen md:flex justify-center bg-white">
      <div className="flex flex-col md:flex-row max-w-[1600px] w-full px-4 md:px-14 pt-20 md:gap-20">
        <div className="w-full text-center  md:hidden">
          <h1 className="text-3xl text-left font-black mb-3 ">
            MENU STORY
            <span className="inline-block w-2 h-2 bg-red-500 ml-1 rounded-full align-middle" />
          </h1>

          <ul className="flex justify-center gap-6 text-sm font-semibold mb-3">
            {(["coffee", "dessert", "deli"] as const).map((i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setCategory(i);
                    setActiveIndex(0);
                    swiperRef.current?.slideTo(0);
                  }}
                  className={`max-[800px]:text-left transition duration-200 ${
                    category === i
                      ? "text-black underline"
                      : "text-gray-400 hover:text-black text-left"
                  }`}
                >
                  {categoryDescriptions[i].title}
                </button>
              </li>
            ))}
          </ul>

          <p className="text-xs md: bg-gray-100 h-15 flex justify-center items-center text-gray-500 font-medium mb: max-w-[500px]">
            {categoryDescriptions[category].description}
          </p>
        </div>

        <div className="hidden md:block w-[800px] sticky top-20 self-start z-10 ">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-none mb-8 relative after:content-[''] after:inline-block after:w-4 after:h-4 after:bg-red-500 after:ml-3">
            MENU STORY
          </h1>
          <ul className="flex flex-col gap-20 mt-8">
            {(["coffee", "dessert", "deli"] as const).map((i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setCategory(i);
                    setActiveIndex(0);
                    swiperRef.current?.slideTo(0);
                  }}
                  className="flex flex-col items-start"
                >
                  {category === i && (
                    <p className="text-[16px] font-bold mt-2 text-black">
                      {categoryDescriptions[i].description}
                    </p>
                  )}
                  <strong
                    className={`text-[32px] font-extrabold ${
                      category === i ? "underline text-black" : "text-gray-400"
                    }`}
                  >
                    {categoryDescriptions[i].title}
                  </strong>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Controller]}
            className="w-full max-w-[500px] h-[300px] md:h-[450px]"
          >
            {currentImages.map((i, v) => (
              <SwiperSlide key={v}>
                <img
                  src={ImageMap[i]}
                  alt={imageNames[i]}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative z-10 flex items-center justify-between bg-black text-white px-4 py-4 rounded-md w-full m-0 md:-mt-8 max-w-[500px] md:max-w-[400px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-2xl font-bold px-4"
            >
              ←
            </button>
            <p className="text-sm font-semibold text-center whitespace-nowrap">
              {imageNames[currentImages[activeIndex]]}
            </p>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-2xl font-bold px-4"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
