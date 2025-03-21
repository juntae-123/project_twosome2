import { GoArrowRight } from "react-icons/go";
import "../../supportSwiper.css";
import { TwosomeTwFontSizes } from "@/common/tailstyles";

export type SwiperSlideContentsProps = {
  mainImage: string;
  subImage: string;
  title: string;
  dsc: string;
  id: string;
};
const SwiperSlideContents = ({
  mainImage,
  subImage,
  title,
  dsc,
}: SwiperSlideContentsProps) => {
  return (
    <>
      <img src={mainImage} alt="" />
      <div className="flex flex-col gap-4  mb-28">
        <img className="support_smallImg" src={subImage} alt="" />
        <div className="flex items-center">
          <strong
            className={`${TwosomeTwFontSizes["fontSize-32px"]} underline mr-[8px]`}
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
