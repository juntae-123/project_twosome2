import CoffeeCard from "../subComponents/coffeeCard";
import SgCoffee from "../subComponents/sgCoffee";
import StoryText from "../subComponents/storyText";
import Title from "../subComponents/title";
type StoryProps = {
  title: string;
  intro: string;
  explanation: string;
  img: string;
  main: string;
};
const PageStory = () => {
  const Data = {
    text: "커피이야기",
    title: "TWOSOME COFFEE STORY",
    main: "시그니처 커피&음료",
    intro:
      "내 취향이 담긴 커피, 투썸플레이스에는 내 취향을 담아 섬세하게 만든 나만의 커피가 있습니다.",

    explanation:
      "투썸플레이스 큐그레이더(Q-Grader)는 좋은 산지의 신선한 원두만 선별해 각각 다른 개성의 세가지 블렌드를 제공합니다. 원두 타입별 최적의 밸런스를 맞춘 로스팅 포인트, 최상의 에스프레소 추출 기술이더해져 투썸플레이스만의 커피가 완성됩니다.",
    img: "https://www.twosome.co.kr/resources/images/content/img_p_coffeestory.jpg",
  };

  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...Data} />
        <StoryText {...Data} />
        <CoffeeCard />
        <SgCoffee {...Data} />
      </article>
    </>
  );
};

export default PageStory;
