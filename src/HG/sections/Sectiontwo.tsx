"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImagegatherTwo, ImageMap, imageNames } from "../Image";

const Sectiontwo = () => {
  const [category, setCategory] = useState<"coffee" | "dessert" | "deli">(
    "coffee"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryDescriptions: Record<
    "coffee" | "dessert" | "deli",
    { title: string; description: string }
  > = {
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
    <section className="w-full min-h-screen flex justify-center items-start bg-white">
      <div className="flex w-full max-w-[1600px] px-12 pt-60 gap-20">
        <div className="w-[800px] shrink-0 sticky top-50 self-start">
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

        <div className="flex flex-row gap-10 -ml-70">
          <div className="w-[580px] h-[580px]">
            <img
              src={ImageMap[currentImages[activeIndex]]}
              alt={imageNames[currentImages[activeIndex]]}
              className="w-full h-full object-cover"
            />
            <div className=" relative z-10 -mt-8 flex items-center justify-between bg-black text-white px-4 py-4 rounded-md w-[488px] ml-12">
              <button
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                className="text-2xl font-bold px-4"
              >
                ←
              </button>
              <p className="text-sm font-semibold text-center whitespace-nowrap">
                {imageNames[currentImages[activeIndex]]}
              </p>
              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    Math.min(prev + 1, currentImages.length - 1)
                  )
                }
                className="text-2xl font-bold px-4"
              >
                →
              </button>
            </div>
          </div>

          <div className="flex justify-start items-center w-[488px] overflow-x-auto scroll-smooth snap-x">
            <Swiper
              direction="horizontal"
              spaceBetween={10}
              slidesPerView="auto"
              freeMode={true}
              className="w-full"
            >
              {currentImages.map((imgKey, index) => (
                <SwiperSlide key={index} className="!w-[140px]">
                  <button onClick={() => setActiveIndex(index)}>
                    <img
                      src={ImageMap[imgKey]}
                      alt={imageNames[imgKey]}
                      className={`w-[140px] h-[140px] object-cover rounded-md transition-transform duration-300 ${
                        activeIndex === index
                          ? "border-black scale-100"
                          : "border-transparent"
                      }`}
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
