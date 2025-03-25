import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import { NOTICE_LABEL } from "../../constant/news";

type NoticeboxProps = {
  title: string;
  date: string;
};

const Noticebox = ({ title, date }: NoticeboxProps) => {
  return (
    <li className="relative group overflow-hidden w-[590px] flex flex-col gap-3 py-[38px] px-[40px] border-b border-[#ebebeb]">
      <span
        className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out"
        aria-hidden="true"
      ></span>
      <span
        className={`relative z-10 ${TwosomeTwColors["color-red"]} ${TwosomeTwFontSizes["fontSize-16px"]}`}
      >
        {NOTICE_LABEL}
      </span>
      <strong
        className={`relative z-10 ${TwosomeTwFontSizes["fontSize-24px"]} group-hover:text-white group-hover:underline`}
      >
        {title}
      </strong>
      <span
        className={`relative z-10 ${TwosomeTwFontSizes["fontSize-16px"]} group-hover:text-white`}
      >
        {date}
      </span>
    </li>
  );
};

export default Noticebox;
