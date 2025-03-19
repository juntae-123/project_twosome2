import { TwosomeFontSizes } from "@/common/styles";
import { TwosomeTwFontSizes } from "@/common/tailstyles";

const StoryText = () => {
  return (
    <>
      <article className=" flex flex-col  md:flex-row md: max-w-[1215px] justify-between  mb-14 ">
        <div className=" flex-[1_1_48%] pr-0 md:pr-36 items-center">
          <h1 className={`${TwosomeTwFontSizes["fontSize-56px"]}  font-black `}>
            TWOSOME COFFEE <br /> STORY
          </h1>
          <h2
            className={`${TwosomeTwFontSizes["fontSize-32px"]} tracking-tight my-10 font-bold`}
            style={{ wordBreak: "keep-all", wordWrap: "break-word" }}
          >
            내 취향이 담긴 커피, 투썸플레이스에는 내 취향을 담아 섬세하게 만든
            나만의 커피가 있습니다.
          </h2>
          <p
            className={`tracking-tight text-lg pr-8`}
            style={{ wordBreak: "keep-all", wordWrap: "break-word" }}
          >
            투썸플레이스 큐그레이더(Q-Grader)는 좋은 산지의 신선한 원두만을
            선별해 각각 다른 개성의 세가지 블렌드를 제공합니다. 원두 타입별
            최적의 밸런스를 맞춘 로스팅 포인트, 최상의 에스프레소 추출 기술이
            더해져 투썸플레이스만의 커피가 완성됩니다.
          </p>
        </div>
        <div className="flex-[0_1_40%] ">
          <img
            className="    max-width: 100%;"
            src="https://www.twosome.co.kr/resources/images/content/img_p_coffeestory.jpg"
            alt=""
          />
        </div>
      </article>
    </>
  );
};

export default StoryText;
