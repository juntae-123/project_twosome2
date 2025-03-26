import Title from "@/app/HB/pages/subComponents/title";
import { TwosomeColors, TwosomeFontSizes } from "@/common/styles";

type TextProps = {
  text: string;
};

const data: TextProps[] = [
  { text: "홈 · 투썸플레이스 앱 & 멤버십 ·" },
  { text: "투썸플레이스 앱 소개" },
  { text: "투썸플레이스 앱 소개" },
  { text: "투썸하트" },
  { text: "투썸플레이스 공식" },
  { text: "모바일 어플리케이션" },
];

export default function Tosometags() {
  return (
    <section className="w-full">
      <div style={{ maxWidth: "1312px", margin: "0 auto", padding: "0 48px" }}>
        <div className=" -mt-20 md:mt-0">
          <Title text="투썸플레이스 앱 소개"></Title>
        </div>
        <div className="flex flex-col mt-20   lg:flex-row lg:justify-between ">
          <dl>
            <dt
              className="font-bold  text-2xl md:text-4xl   lg:text-6xl  "
              style={{
                marginBottom: "35px",
              }}
            >
              {data[3].text}
            </dt>
            <dd
              className="font-bold text-x1 md:text-2xl lg:text-4xl  mb-7 lg:mb-14"
              style={{}}
            >
              {data[4].text} <br /> {data[5].text}
            </dd>
            <dd>
              <p
                className="font-bold"
                style={{ color: TwosomeColors["color-blackTwo"] }}
              >
                쉽고 빠르게 주문하는 모바일주문 서비스 '투썸오더', 혜택이
                투썸하트로
                <br />
                차곡차곡 쌓이는 '신규 멤버십'과 '스탬프' 적립, 다양한 종류의
                투썸
                <br />
                케이크를 미리 주문할 수 있는 예약 서비스까지! 더 편리하고
                새로워진
                <br />
                <em
                  style={{
                    fontSize: TwosomeFontSizes["fontSize-18px"],
                    color: TwosomeColors["color-red"],
                  }}
                >
                  투썸하트
                </em>
                앱을 만나보세요!
              </p>
            </dd>
          </dl>

          <div>
            <img
              className="w-200  mt-10 lg:w-120 lg:mt-0"
              src="https://www.twosome.co.kr/resources/images/content/img_p_mobile_illust_.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
