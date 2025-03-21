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
const PageDesert = () => {
  const Data = {
    text: "디저트이야기",
    title: "TWOSOME DESERT STORY",
    main: "시그니처 커피&음료",
    intro:
      "내 취향이 담긴 커피, 투썸플레이스에는 내 취향을 담아 섬세하게 만든 나만의 커피가 있습니다.",

    explanation: "투썸플레이스의 다양한프리미엄 케이크&디저트를만나보세요.",
    img: "https://www.twosome.co.kr/resources/images/content/img_p_dessertstory.jpg",
  };

  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...Data} />
        <StoryText {...Data} />
        <SgCoffee {...Data} />
        <SgCoffee {...Data} />
      </article>
    </>
  );
};

export default PageDesert;
