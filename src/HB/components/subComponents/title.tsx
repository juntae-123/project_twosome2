import { TwosomeColors, TwosomeFontSizes } from "@/common/styles";
import { GoChevronDown } from "react-icons/go";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <div className="flex mb-7">
        <p
          style={{
            color: TwosomeColors["color-gray"],
            fontSize: TwosomeFontSizes["fontSize-14px"],
          }}
        >
          홈 · 투썸플레이스 소개
        </p>
        <p
          style={{
            color: TwosomeColors["color-red"],
            fontSize: TwosomeFontSizes["fontSize-14px"],
          }}
          className=" flex items-center font-bold"
        >
          · {text}
          <GoChevronDown />
        </p>
      </div>
      <h1
        className="font-bold"
        style={{ fontSize: TwosomeFontSizes["fontSize-72px"] }}
      >
        {text}
      </h1>
    </>
  );
};

export default Title;
