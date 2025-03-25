import CoffeeCard from "../subComponents/coffeeCard";
<<<<<<< HEAD:src/HB/components/pageMenu/page.tsx
import { coffeeData } from "../data/menuData";
import SgCoffee from "../subComponents/sgCoffee";
import StoryText from "../subComponents/storyText";
import Title from "../subComponents/title";

const PageStory = () => {
=======
import { coffeeData } from "../subComponents/menuData";
// import SgCoffee from "../subComponents/sgCoffee";
import StoryText from "../subComponents/storyText";
import Title from "../subComponents/title";
type StoryProps = {
  title: string;
  intro: string;
  explanation: string;
  img: string;
  main: string;
};
export default function PageStory() {
>>>>>>> origin/hg:src/app/HB/components/pageMenu/page.tsx
  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10 items-center md:items-start">
        <Title {...coffeeData} />
        <StoryText {...coffeeData} />
        <CoffeeCard />
        {/* <SgCoffee {...coffeeData} /> */}
      </article>
    </>
  );
}
