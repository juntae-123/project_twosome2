import CoffeeCard from "../subComponents/coffeeCard";
import { deliData } from "../subComponents/menuData";
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
  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...deliData} />
        <StoryText {...deliData} />

        <SgCoffee {...deliData} />
      </article>
    </>
  );
};

export default PageDel;
