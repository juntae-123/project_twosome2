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
const PageDel = () => {
  const Data = {
    text: "델리이야기",
    title: "TWOSOME DELI STORY",
    main: "TWOSOME DELI STORY",
    intro:
      "커피와 함께여서 더욱 매력적인 ‘트렌디 카페 밀(Trendy Café Meal)’ 컨셉의 델리",

    explanation:
      "고객의 다양한 TPO를 대응하는 샌드위치, 샐러드, 베이커리 등 가벼운 식사 메뉴부터 간편하게 즐기는 그랩앤고(Grab&go)까지 고객의 라이프스타일에 맞춰 준비한 투썸플레이스의 델리는 커피와 함께여서 더욱 매력적입니다.",
    img: "https://www.twosome.co.kr/resources/images/content/img_p_deilstory2.jpg",
  };

  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...Data} />
        <StoryText {...Data} />

        <SgCoffee {...Data} />
      </article>
    </>
  );
};

export default PageDel;
