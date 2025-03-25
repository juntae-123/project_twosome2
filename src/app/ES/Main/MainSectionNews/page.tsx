import { TwosomeTwColors } from "@/common/tailstyles";
import NoticeLeft from "./subcomponents/NoticeLeft";
import NoticeRight from "./subcomponents/NoticeRight";

const NewsSection = () => {
  return (
    <div
      className={`w-screen h-screen bg-white ${TwosomeTwColors["color-black"]}`}
    >
      <div className="w-full max-w-[1312px] flex justify-between items-center m-auto py-[150px]">
        <NoticeLeft />
        <NoticeRight />
      </div>
    </div>
  );
};

export default NewsSection;
