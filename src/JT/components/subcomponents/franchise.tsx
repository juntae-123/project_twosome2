import { useState } from "react";
import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";

const navigation = ["홈 ·", "가맹점 창업안내"];
const menuItems = [
  "가맹점 개설 안내",
  "창업설명회",
  "온라인창업상담신청",
  "FAQ",
  "가맹점 전용 금융상품",
];

const steps = [
  {
    step: "STEP 01",
    title: "가맹점 창업 문의",
    description: "본사 홈페이지 또는 전화 (080-723-2323) 신청 및 접수",
  },
  {
    step: "STEP 02",
    title: "접수 및 담당자 개별 상담",
    description: "회사소개, 투썸플레이스 프랜차이즈 사업 설명",
  },
  {
    step: "STEP 03",
    title: "후보지 선정, 상권분석, 본사 개설 승인",
    description: "·사업타당성 분석\n·가맹신청서 접수 정보공개서 제공",
  },
  {
    step: "STEP 04",
    title: "가맹계약 체결",
    description: "·계약 기간 3년 계약 만료 후 1년 단위 재계약\n·추가 비용 없음",
  },
  {
    step: "STEP 05",
    title: "가맹금/보증금/교육비 입금",
    description: "·가맹금 : 2,000만원\n·보증금 : 1,000만원\n·교육비 : 150만원",
  },
  {
    step: "STEP 06",
    title: "시공 : 점포실측, 디자인 결정 후 공사 진행",
    description: "·실측 후 설계도면 작성, 점주님과 최종 협의",
  },
  {
    step: "STEP 07",
    title: "직원채용 및 교육",
    description:
      "·본사와 점주님 협의 후 직원 면접 채용\n·점주님 및 직원 교육 (10일 : 이론, 실습 교육)",
  },
  {
    step: "STEP 08",
    title: "인/허가 및 영업 준비",
    description:
      "·각종 인/허가 증명서 발급\n·카드 승인 및 영업 관련 모든 사항 점검\n·OPEN 준비(리허설)",
  },
  {
    step: "STEP 09",
    title: "점포오픈",
    description: "·오픈 프로모션 진행\n·투썸플레이스 영업 시작",
  },
];

const conditions = [
  {
    image:
      "https://www.twosome.co.kr/resources/images/icon/ico_fran_start1.svg",
    title: "창업 가능 상권",
    description: "상업지, 오피스, 역세권, 대학가, 대형\n집객시설물 등",
  },
  {
    image:
      "https://www.twosome.co.kr/resources/images/icon/ico_fran_start1.svg",
    title: "창업 기준 면적",
    description: "1층 : 148.7(45평)\n전면 8M 이상",
  },
  {
    image:
      "https://www.twosome.co.kr/resources/images/icon/ico_fran_start1.svg",
    title: "기본 시설 사항",
    description:
      "전기 : 70Kw 이상\n용도 : 근린생활시설 1종 또는 2종\n기타 : 급, 배수 / 급, 배기 가능",
  },
];
type franchiselistProps = {
  name: string;
};

const franchiselist: franchiselistProps[] = [
  { name: "가맹점 개설 안내" },
  { name: "창업설명회" },
  { name: "온라인창업상담신청" },
  { name: "FAQ" },
  { name: "가맹점 전용 금융상품" },
];
``;
const Franchise = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="w-full">
      <section className="max-w-[1312px] mx-auto px-12">
        <ul className="flex gap-4 text-gray-500 text-sm mb-5">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={
                index === 1 ? "text-red-500 font-semibold" : "text-gray-500"
              }
            >
              {item}
            </li>
          ))}
        </ul>

        <h1 className="text-black   text-3xl md:text-5xl lg:text-7xl  font-bold mb-10">
          가맹점 창업안내
        </h1>
        <ul className="flex lg: text-sm md:text-lg lg:text-xl ">
          <li className="mr-5 font-bold">{franchiselist[0].name}</li>
          <li className="mr-5 font-bold">{franchiselist[1].name}</li>
          <li className="mr-5 font-bold">{franchiselist[2].name}</li>
          <li className="mr-5 font-bold">{franchiselist[3].name}</li>
          <li className="mr-5 font-bold">{franchiselist[4].name}</li>
        </ul>
        <h2 className="font-bold text-[40px] mt-12">창업절차</h2>

        <div className="grid grid-cols-1  lg:grid-cols-3  gap-4 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-300  h-55 lg:h-80  p-6"
            >
              <em
                className={`text-[18px] mb-3 ${TwosomeTwColors["color-red"]}`}
              >
                {step.step}
              </em>
              <p className="text-[24px] mb-5 text-black">{step.title}</p>
              <p className="text-[18px] text-black whitespace-pre-line">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-[40px] mt-12">창업조건</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 text-center flex flex-col items-center"
            >
              <img className="h-35" src={item.image} alt="" />
              <p className={`font-bold mt-3.5 ${TwosomeTwColors["color-red"]}`}>
                {item.title}
              </p>
              <p className="font-extrabold mt-3.5 whitespace-pre-line text-[18px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1312px] p-6">
            <h2
              style={{ fontSize: "40px", marginTop: "70px" }}
              className="font-bold"
            >
              예상 투자비용
            </h2>
            <p
              style={{ fontSize: "16px", color: "gray" }}
              className="text-right "
            >
              (단위:천원 / VAT별도)
            </p>
            <table className="w-full border-collapse ">
              <thead>
                <tr
                  style={{
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  <th className="  p-3 text-left">구분</th>
                  <th className="text-left">내용</th>
                  <th className=" p-3 text-left">투자비(천원)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    rowSpan={3}
                    className=" p-3 font-bold w-1/6"
                  >
                    가맹비
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    가맹비 : 소멸성(영업표지의 사용 및 영업관리 등의 대가)
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3 w-1/6"
                  >
                    20,000
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    보증금 : 계약 종료 시 반환(VAT 없음)
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    10,000
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className="p-3"
                  >
                    교육비 : 이론, 실습 교육(10일)
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    1,500
                  </td>
                </tr>

                <tr>
                  <td rowSpan={5} className=" p-3 font-bold w-1/6">
                    인테리어
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    기획관리비 : 인테리어 설계비
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className="p-3"
                  >
                    5,000
                  </td>
                </tr>
                <tr>
                  <td className=" p-3">
                    인테리어 : 45평 기준(192만원/평 ~ 219만원/평)
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className="p-3"
                  >
                    86,500 ~ 98,400
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    간판/사인물 : 전면 15m 점포 기준(기준면 초과 시 비용 발생)
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    7,900 ~ 13,200
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    가구 : 의자, 테이블 등
                  </td>
                  <td
                    style={{ borderBottom: "1px solid gray" }}
                    className=" p-3"
                  >
                    36,500 ~ 43,200
                  </td>
                </tr>
                <tr>
                  <td className=" p-3">
                    장비/설치류 : 커피 머신, 케익 쇼케이스, 냉장고 등
                  </td>
                  <td className=" p-3">75,900 ~ 83,800</td>
                </tr>

                <tr
                  style={{ padding: "36px 24px", height: "100px" }}
                  className="bg-gray-100 font-bold"
                >
                  <td style={{ fontSize: "24px" }} colSpan={2} className=" p-3">
                    계 (45평, 전면 15M 점포 기준)
                  </td>
                  <td style={{ fontSize: "23px" }} className=" ">
                    243,300 ~ 275,100
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-gray-600 text-sm mt-4">
              <p className="mb-1.5">
                • 별도공사 : 냉·난방기 별도 (냉·난방기 본사 거래 선택시
                520만~670만원/설치비별도)
              </p>
              <p className="mb-1.5">
                • 점주(자체)공사 시 SI관리비 평당 15만원/평 (최대 1,000만원
                이하)
              </p>
              <p className="mb-1.5">
                • 최초 오픈비 2,300만원~2,800만원 별도 (초도물품비, 비품비,
                오픈판촉비, 오픈인력교육비 등)
              </p>
              <p>• 상기 투자비는 매장형태 및 상황에 따라 변동될 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Franchise;
