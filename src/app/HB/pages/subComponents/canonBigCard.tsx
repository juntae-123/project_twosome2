import { TwosomeTwFontSizes } from "@/common/tailstyles";
import Canoncard from "./canonCard";
import { CanonData } from "../data/CanonData";

const CanonBigCard = () => {
  return (
    <article>
      <h2
        className={`${TwosomeTwFontSizes["fontSize-40px"]} font-bold mb-8 flex flex-col items-center md:items-start`}
      >
        행동규범
      </h2>
      <div className="grid grid-cols-2 gap-0 border border-[#d6d6d6] md:border-none  md:flex ">
        {CanonData.map((v, i) => {
          return <Canoncard key={i} {...v} />;
        })}
      </div>
    </article>
  );
};

export default CanonBigCard;
