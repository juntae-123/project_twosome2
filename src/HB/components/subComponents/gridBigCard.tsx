import { TwosomeTwFontSizes } from "@/common/tailstyles";
import GridCard from "./gridCard";

const GridBigCard = () => {
  return (
    <>
      <article className="flex flex-col items-center md:items-start ">
        <h2 className={`${TwosomeTwFontSizes["fontSize-40px"]} font-bold mb-8`}>
          핵심가치
        </h2>
        <div className="flex flex-col md:flex-row flex gap-9">
          <GridCard
            textmain="Customer centric"
            text="고객중심"
            img="https://www.twosome.co.kr/resources/images/icon/ico_value_1.svg"
          ></GridCard>
          <GridCard
            textmain="Customer centric"
            text="정보기반"
            img="https://www.twosome.co.kr/resources/images/icon/ico_value_2.svg"
          ></GridCard>
          <GridCard
            textmain="Customer centric"
            text="운영탁월성"
            img="https://www.twosome.co.kr/resources/images/icon/ico_value_3.svg"
          ></GridCard>
        </div>
      </article>
    </>
  );
};

export default GridBigCard;
