import { GoArrowRight } from "react-icons/go";
import "../../supportSwiper.css";
import { TwosomeTwFontSizes } from "@/common/tailstyles";

export type SwiperSlideContentsProps = {
  mainImage: string;
  subImage: string;
  title: string;
  dsc: string;
};

const SwiperSlideContents = ({
  mainImage,
  subImage,
  title,
  dsc,
}: SwiperSlideContentsProps) => {
  return (
    <>
      <img
        className="w-[552px] h-[552px] object-cover block max-md:w-[355px] max-md:h-[355px]"
        src={mainImage}
        alt=""
      />
      <div className="flex flex-col gap-4  mb-28 ">
        <img
          className="w-[62px] h-[100px] object-cover max-md:w-[36px] max-md:h-[36px]"
          src={subImage}
          alt=""
        />
        <div className="flex items-center">
          <strong
            className={`${TwosomeTwFontSizes["fontSize-32px"]} underline mr-[8px] max-md:text-2xl`}
          >
            {title}
          </strong>
          <GoArrowRight className="w-[24px] h-[25px]" />
        </div>
        <p
          className={`w-[312px] ${TwosomeTwFontSizes["fontSize-18px"]} text-left`}
        >
          {dsc}
        </p>
      </div>
    </>
  );
};

export default SwiperSlideContents;
