import { TwosomeFontSizes } from "@/common/styles";
import { TwosomeTwFontSizes } from "@/common/tailstyles";

type StoryProps = {
  title: string;
  intro: string;
  explanation: string;
  img: string;
};

const StoryText = ({ title, intro, explanation, img }: StoryProps) => {
  return (
    <>
      <article className=" flex flex-col mt-20 mb-14  md:flex-row md: max-w-[1215px] justify-between ">
        <div className=" flex-[1_1_48%] pr-0 md:pr-36 items-center">
          <h1 className={`${TwosomeTwFontSizes["fontSize-56px"]}  font-black `}>
            {title}
          </h1>
          <h2
            className={`${TwosomeTwFontSizes["fontSize-32px"]} tracking-tight my-10 font-bold`}
            style={{ wordBreak: "keep-all", wordWrap: "break-word" }}
          >
            {intro}
          </h2>
          <p
            className={`tracking-tight text-lg pr-8`}
            style={{ wordBreak: "keep-all", wordWrap: "break-word" }}
          >
            {explanation}
          </p>
        </div>
        <div className="flex-[0_1_40%] ">
          <img className="max-width: 100%;" src={img} alt="" />
        </div>
      </article>
    </>
  );
};

export default StoryText;
