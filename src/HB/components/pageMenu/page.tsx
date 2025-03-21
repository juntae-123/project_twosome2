import CoffeeCard from "../subComponents/coffeeCard";
import { coffeeData } from "../subComponents/menuData";
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
  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...coffeeData} />
        <StoryText {...coffeeData} />
        <CoffeeCard />
        <SgCoffee {...coffeeData} />
      </article>
    </>
  );
};

export default PageStory;
