import BlackCard from "../subComponents/blackCard";
import CanonBigCard from "../subComponents/canonBigCard";
import Card from "../subComponents/card";
import GridBigCard from "../subComponents/gridBigCard";
import Title from "../subComponents/title";

const Pagevision = () => {
  return (
    <>
      <div className="max-w-[1312px] mx-auto flex flex-col gap-15 mb-20">
        <Title text="비전체계" />
        <div className="flex gap-8">
          <Card
            text="최고의 제품과 공간 경험으로
고객의 행복한 일상을 함께한다"
            img="https://www.twosome.co.kr/resources/images/common/bg_mission.svg"
            title="MISSION"
          />
          <Card
            text="일상의 즐거움을 창조하는
카페문화 선도 기업"
            img="https://www.twosome.co.kr/resources/images/common/bg_vision.svg"
            title="VISION"
          />
        </div>
        <BlackCard />
        <GridBigCard />
        <CanonBigCard />
      </div>
    </>
  );
};

export default Pagevision;
