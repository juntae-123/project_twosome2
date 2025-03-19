import { TwosomeTwFontSizes } from "@/common/tailstyles";
import Canoncard from "./canonCard";

const CanonBigCard = () => {
  return (
    <article>
      <h2 className={`${TwosomeTwFontSizes["fontSize-40px"]} font-bold mb-8`}>
        행동규범
      </h2>
      <div className="flex">
        <Canoncard
          img="https://www.twosome.co.kr/resources/images/icon/ico_act_1.svg"
          text="능동적실행"
        ></Canoncard>
        <Canoncard
          img="https://www.twosome.co.kr/resources/images/icon/ico_act_2.svg"
          text="배려"
        ></Canoncard>
        <Canoncard
          img="https://www.twosome.co.kr/resources/images/icon/ico_act_3.svg"
          text="통합적사고"
        ></Canoncard>
        <Canoncard
          img="https://www.twosome.co.kr/resources/images/icon/ico_act_4.svg"
          text="전체 최적화"
        ></Canoncard>
        <Canoncard
          img="https://www.twosome.co.kr/resources/images/icon/ico_act_5.svg"
          text="협업"
        ></Canoncard>
      </div>
    </article>
  );
};

export default CanonBigCard;
