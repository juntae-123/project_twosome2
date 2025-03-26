import CoffeeCard from "../subComponents/coffeeCard";
import { coffeeData } from "../data/menuData";
import SgCoffee from "../subComponents/sgCoffee";
import StoryText from "../subComponents/storyText";
import Title from "../subComponents/title";

const PageStory = () => {
  return (
    <>
      <article className="max-w-[1312px] min-w-[569px] mx-auto flex flex-col gap-10 items-center pl-5 md:items-start">
        <div className=" mr-100 md:mr-30 -mt-10 -mb-22 md:mb-10 mx-5 md:mx-0 whitespace-nowrap">
          <Title {...coffeeData} />
        </div>
        <StoryText {...coffeeData} />
        <CoffeeCard />
        <SgCoffee {...coffeeData} />
      </article>
    </>
  );
};

export default PageStory;
