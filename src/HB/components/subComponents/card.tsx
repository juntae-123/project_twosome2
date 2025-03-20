import { TwosomeColors, TwosomeFontSizes } from "@/common/styles";
import { TwosomeTwFontSizes } from "@/common/tailstyles";

type TitleProps = {
  title: string;
  text: string;
  img: string;
};
type link = {
  link: "https://www.twosome.co.kr/resources/images/common/bg_mission.svg";
  link2: "https://www.twosome.co.kr/resources/images/common/bg_vision.svg";
};
const Card = ({ text, title, img }: TitleProps) => {
  return (
    <>
      <article
        style={{
          padding: "68px 72px",
          width: "max-w-[calc(50%-35px)]",
          backgroundColor: TwosomeColors["color-grayFor"],
          position: "relative",
          overflow: "hidden",
        }}
        className="h-80 "
      >
        <div
          className=" animate-spin"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            animationDuration: "15000ms",
          }}
        >
          <img src={img} alt="" width={200} />
        </div>
        <div style={{ width: "445px" }}>
          <h1
            className="mb-12"
            style={{
              fontWeight: "900",
              color: TwosomeColors["color-red"],
              fontSize: TwosomeFontSizes["fontSize-18px"],
              wordBreak: "keep-all",
              wordWrap: "break-word",
            }}
          >
            {title}
          </h1>
          <p
            className="text-xl lg:text-3xl "
            style={{
              fontWeight: "900",

              wordBreak: "keep-all",
              wordWrap: "break-word",
              letterSpacing: "-3px",
            }}
          >
            {text}
          </p>
        </div>
      </article>
    </>
  );
};

export default Card;
