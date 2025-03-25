import { TwosomeTwFontSizes } from "@/common/tailstyles";
import NewsTitle from "./NewsTitle";
import { NOTICE_LABEL } from "../constant/news";

const NoticeLeft = () => {
  return (
    <div className="flex flex-col gap-16">
      <NewsTitle />
      <span className={`${TwosomeTwFontSizes["fontSize-20px"]} font-semibold`}>
        {NOTICE_LABEL}
      </span>
      <img
        className="w-[320px] h-[203px]"
        src="https://brentwrites.com/wp-content/uploads/2019/12/Brent-2-e1578314356202.jpg"
        alt="메인 뉴스 이미지"
      />
    </div>
  );
};

export default NoticeLeft;
