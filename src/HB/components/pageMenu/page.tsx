import CoffeeCard from "../subComponents/coffeeCard";
import SgCoffee from "../subComponents/sgCoffee";
import StoryText from "../subComponents/storyText";
import Title from "../subComponents/title";

const PageStory = () => {
  return (
    <>
      <article className="max-w-[1312px] mx-auto flex flex-col gap-10">
        <Title text="커피이야기"></Title>
        <StoryText></StoryText>
        <CoffeeCard></CoffeeCard>
        <SgCoffee></SgCoffee>
      </article>
    </>
  );
};

export default PageStory;
