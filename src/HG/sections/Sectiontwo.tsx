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
    deli: { title: "DELI STORY", description: "든든하고 맛있는 조화로운 한끼" },
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
    <section className="w-full min-h-screen flex justify-center items-start bg-white">
      <div className="flex max-w-[1600px] px-14 pt-45 gap-20">
        <div className="w-[800px] shrink-0 sticky self-start z-10 ml-30">
          <h1 className="text-8xl font-extrabold leading-none mb-8 relative after:content-[''] after:inline-block after:w-4 after:h-4 after:bg-red-500 after:ml-3">
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
        <div className="flex flex-row -ml-210">
          <div className="flex flex-col">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              modules={[Navigation, Controller]}
              className="w-[450px] h-[450px]"
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
            <div className="relative z-10 flex items-center justify-between bg-black text-white px-4 py-4 rounded-md w-[400px] mx-auto">
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
          {/* 리스트 수정해야할 코드 */}
          {/* <div className="w-[100px] h-[100px]">
            <Swiper slidesPerView={5} spaceBetween={10} className="mt-6">
              {currentImages.map((i, v) => (
                <SwiperSlide key={v}>
                  <button onClick={() => swiperRef.current?.slideTo(v)}>
                    <img
                      src={ImageMap[i]}
                      alt={imageNames[i]}
                      className={`w-full h-24 object-cover border-2 ${
                        activeIndex === v ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
