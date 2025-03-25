import { Carddata } from "../data/cardData";
import BlackCard from "../subComponents/blackCard";
import CanonBigCard from "../subComponents/canonBigCard";
import Card from "../subComponents/card";
import GridBigCard from "../subComponents/gridBigCard";
import Title from "../subComponents/title";

export default function Pagevision() {
  return (
    <>
      <div className="max-w-[1312px] mx-auto px-10 flex  items-center flex-col  gap-15 mb-20  md:items-start  ">
        <Title text="비전체계" />
        <div className="flex flex-col md:flex-row gap-8">
          {Carddata.map((v) => {
            return <Card {...v} />;
          })}
        </div>
        <BlackCard />
        <GridBigCard />
        <CanonBigCard />
      </div>
    </>
  );
}
