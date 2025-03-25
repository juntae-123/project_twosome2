import { TwosomeTwFontSizes } from "@/common/tailstyles";
import NewsTitle from "./NewsTitle";

const NoticeLeft = () => {
  return (
    <div className="flex flex-col gap-16">
      <NewsTitle />
      <span className={`${TwosomeTwFontSizes["fontSize-20px"]} font-semibold`}>
        공지사항
      </span>
      <img
        className="w-[320px] h-[203px]"
        src="https://brentwrites.com/wp-content/uploads/2019/12/Brent-2-e1578314356202.jpg"
        alt=""
      />
    </div>
  );
};

export default NoticeLeft;
