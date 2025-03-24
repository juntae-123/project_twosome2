import { TwosomeTwFontSizes } from "@/common/tailstyles";
import GridCard from "./gridCard";
import { GridCardData } from "../data/gridCardData";

const GridBigCard = () => {
  return (
    <>
      <article className="flex flex-col items-center md:items-start ">
        <h2 className={`${TwosomeTwFontSizes["fontSize-40px"]} font-bold mb-8`}>
          핵심가치
        </h2>
        <div className="flex flex-col md:flex-row flex gap-9">
          {GridCardData.map((v) => (
            <GridCard {...v} />
          ))}
        </div>
      </article>
    </>
  );
};

export default GridBigCard;
