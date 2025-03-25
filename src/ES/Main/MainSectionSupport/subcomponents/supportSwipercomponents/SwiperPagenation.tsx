import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { SwiperClass } from "swiper/react";

type SwiperPagenationProps = {
  prev: () => void;
  next: () => void;
  swiperIndex: number;
  swiper: SwiperClass | null;
};

const SwiperPagenation = ({
  prev,
  next,
  swiperIndex,
  swiper,
}: SwiperPagenationProps) => {
  return (
    <div
      className={`w-[312px] flex justify-between ${TwosomeTwFontSizes["fontSize-18px"]} bg-black ${TwosomeTwColors["color-white"]} p-3 font-bold absolute bottom-0 left-1/2 -translate-x-1/2 z-10
      max-md:w-[336px] max-md:bottom-40 max-md:left-1/2 max-md:-translate-x-1/2`}
    >
      <button onClick={prev}>
        <GoArrowLeft />
      </button>
      <div className="flex gap-1">
        <span>{swiperIndex + 1}</span>
        <span className="text-[#959595]">/</span>
        <span className="text-[#959595]">{swiper?.slides.length}</span>
      </div>
      <button onClick={next}>
        <GoArrowRight />
      </button>
    </div>
  );
};

export default SwiperPagenation;
