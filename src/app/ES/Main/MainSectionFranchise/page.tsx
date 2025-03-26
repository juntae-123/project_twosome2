"use client";
import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import FranchiseTitle from "./subcomponents/FranchiseTitle";
import FranchiseItem from "./subcomponents/FranchiseItem";
import FranchiseButton from "./subcomponents/FranchiseButton";
import useLoopScroll from "./subcomponents/useLoopScroll";

const FranchiseSection = () => {
  const offsetX = useLoopScroll();

  return (
    <section className="relative h-screen overflow-hidden bg-[#f5f5f5] max-md:h-[567px]">
      <div
        className="absolute top-0 left-0 flex h-full w-[200vw] max-md:gap-10"
        style={{
          transform: `translateX(${offsetX}px)`,
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
          className={`${TwosomeTwFontSizes["fontSize-24px"]} mt-4 font-bold py-[32px] max-md:text-base max-md:mt-[0px]`}
        >
          당신의 창업 성공 스토리, <br /> 투썸플레이스가 함께합니다.
        </p>
        <p className="text-lg font-normal max-w-lg mb-[48px] max-md:text-sm max-md:max-w-sm max-md:mb-0">
          향기로운 커피와 달콤한 디저트가 함께하는 프리미엄 디저트 카페
          투썸플레이스. 투썸플레이스의 축적된 경험과 노하우를 바탕으로 성공
          창업을 약속드립니다.
        </p>

        <div
          className={`mt-6 flex gap-4 ${TwosomeTwFontSizes["fontSize-20px"]} font-semibold`}
        >
          <FranchiseButton label="창업안내 바로가기" duration={300} />
          <FranchiseButton label="가맹상담 신청" duration={500} />
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
