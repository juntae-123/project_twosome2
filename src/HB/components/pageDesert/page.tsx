import CoffeeCard from "../subComponents/coffeeCard";
import { desertData } from "../subComponents/menuData";
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
  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...desertData} />
        <StoryText {...desertData} />

        <SgCoffee {...desertData} />
      </article>
    </>
  );
};

export default PageDesert;
