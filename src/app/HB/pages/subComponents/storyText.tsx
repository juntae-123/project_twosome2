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
      <article className=" flex flex-col mt-20 mb-14  md:flex-row md: `ma`x-w-[1215px] justify-between ">
        <div className=" flex-[1_1_48%] pr-0 md:pr-36 items-center">
          <div className="w-[100%]   object-cover overflow-y-hidden relative">
            <img className="object-cover block md:hidden" src={img} alt="" />
            <h1
              className={`text-4xl block md:hidden font-black z-30 absolute bottom-3 left-7 `}
            >
              {title}
            </h1>
          </div>
          <h1
            className={`${TwosomeTwFontSizes["fontSize-56px"]}  md:block hidden font-black `}
          >
            {title}
          </h1>
          <h2
            className={`pr-40  text-xl  md:pr-0 md:text-2xl lg:text-3xl tracking-tight my-10 font-bold`}
            style={{ wordBreak: "keep-all", wordWrap: "break-word" }}
          >
            {intro}
          </h2>
          <p
            className={`tracking-tight    text-base md:text-lg pr-8`}
            style={{ wordBreak: "keep-all", wordWrap: "break-word" }}
          >
            {explanation}
          </p>
        </div>
        <div className="flex-[0_1_40%] hidden md:flex ">
          <img className="max-width: 100%;" src={img} alt="" />
        </div>
      </article>
    </>
  );
};

export default StoryText;
