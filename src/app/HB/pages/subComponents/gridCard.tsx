import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";

type props = {
  img: string;
  text: string;
  textmain: string;
};

const GridCard = ({ img, text, textmain }: props) => {
  return (
    <>
      <article
        className={`flex flex-col items-center border border-[#d6d6d6]   py-5 w-97          md:pt-12 md:px-10 md:pb-10   `}
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div
          style={{ margin: "20px 0px" }}
          className={`${TwosomeTwFontSizes["fontSize-18px"]} ${TwosomeTwColors["color-red"]}  font-bold    `}
        >
          {textmain}
        </div>
        <div className={`${TwosomeTwFontSizes["fontSize-24px"]}  font-bold`}>
          {text}
        </div>
      </article>
    </>
  );
};

export default GridCard;
