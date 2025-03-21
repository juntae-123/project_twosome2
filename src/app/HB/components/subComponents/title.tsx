import { TwosomeColors, TwosomeFontSizes } from "@/common/styles";
import { GoChevronDown } from "react-icons/go";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <div className="flex mt-30">
        <p
          style={{
            color: TwosomeColors["color-gray"],
            fontSize: TwosomeFontSizes["fontSize-14px"],
          }}
        >
          홈 ·
        </p>
        <p
          style={{
            color: TwosomeColors["color-red"],
            fontSize: TwosomeFontSizes["fontSize-14px"],
          }}
          className=" cursor-pointer flex items-center font-bold"
        >
          {text == "커피이야기"
            ? "메뉴이야기"
            : text == "어썸 페어링 플랜트"
            ? "브랜드 지원"
            : text == "공지사항"
            ? "새소식&공지"
            : text}
          <GoChevronDown />
        </p>
      </div>
      <h1
        className="font-bold"
        style={{
          fontSize: TwosomeFontSizes["fontSize-72px"],
          marginTop: "50px",
        }}
      >
        {text}
      </h1>
    </>
  );
};

export default Title;
