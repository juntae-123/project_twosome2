"use client";
import { useEffect, useState } from "react";
import FranchiseTitle from "./subcomponents/FranchiseTitle";
import { GoArrowRight } from "react-icons/go";
import FranchiseItem from "./subcomponents/FranchiseItem";
import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";

const FranchiseSection = () => {
  // setInterval로 16ms마다 가로위치(offsetX)를 -1씩 줄여서 왼쪽으로 이동시키기
  const [offsetX, setOffsetX] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetX((prev) => {
        const newOffset = prev - 1;
        // -window.innerWidth 에 도달하면 0으로 리셋 (무한루프)
        return newOffset <= -window.innerWidth ? 0 : newOffset;
      });
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#f5f5f5]">
      <div
        className="absolute top-0 left-0 flex h-full w-[200vw]"
        style={{
          transform: `translateX(${offsetX}px)`, // offsetX 값에 맞게 가로로 이동시키기기
        }}
      >
        <FranchiseItem />
        <FranchiseItem />
      </div>

      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center ${TwosomeTwColors["color-black"]}`}
      >
        <FranchiseTitle />
        <p
          className={`${TwosomeTwFontSizes["fontSize-24px"]} mt-4 font-bold py-[32px]`}
        >
          당신의 창업 성공 스토리, <br /> 투썸플레이스가 함께합니다.
        </p>
        <p className="text-lg font-normal max-w-lg mb-[48px]">
          향기로운 커피와 달콤한 디저트가 함께하는 프리미엄 디저트 카페
          투썸플레이스. 투썸플레이스의 축적된 경험과 노하우를 바탕으로 성공
          창업을 약속드립니다.
        </p>

        <div
          className={`mt-6 flex gap-4 ${TwosomeTwFontSizes["fontSize-20px"]} font-semibold`}
        >
          <button
            className="border-2 border-black px-6 py-3 bg-white flex items-center gap-[16px]
          hover:bg-black hover:text-white"
          >
            <span>창업안내 바로가기</span>
            <GoArrowRight />
          </button>
          <button
            className="border-2 border-black px-6 py-3 bg-white flex items-center gap-[16px]
          hover:bg-black hover:text-white "
          >
            <span>가맹상담 신청</span>
            <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
