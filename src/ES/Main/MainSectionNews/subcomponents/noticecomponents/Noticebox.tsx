import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";

type NoticeboxProps = {
  title: string;
  date: string;
};

const Noticebox = ({ title, date }: NoticeboxProps) => {
  return (
    <li className="w-[590px] flex flex-col gap-3 py-[38px] px-[40px] border-b border-[#ebebeb]">
      <span
        className={`${TwosomeTwColors["color-red"]} ${TwosomeTwFontSizes["fontSize-16px"]}`}
      >
        공지사항
      </span>
      <strong className={`${TwosomeTwFontSizes["fontSize-24px"]}`}>
        {title}
      </strong>
      <span className={`${TwosomeTwFontSizes["fontSize-16px"]}`}>{date}</span>
    </li>
  );
};

export default Noticebox;
