import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";

const CoffeeCard = () => {
  return (
    <>
      <div className="mb-20 flex flex-col  items-center    md:items-start">
        <h2
          className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter mb-8`}
        >
          투썸의 특별한 블랜드
        </h2>
        <article className="flex flex-col gap-10 md:flex-row md: gap-0 justify-between max-w-[1215px]">
          <article className=" w-150 md:w-95 border border-[#d6d6d6]  ">
            <div className="flex flex-col items-center w-[100%] py-12">
              <div className="flex flex-col items-center w-[100%]">
                <img
                  src="https://www.twosome.co.kr/resources/images/icon/ico_64_coffee_swp.svg"
                  alt=""
                />
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-24px"]} my-3 font-black`}
              >
                BLACK GROUND
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-18px"]} text-[#53575A] `}
              >
                DARK ROAST
              </div>
            </div>
            <div className="flex gap-3 flex-col items-center w-[100%] border border-[#d6d6d6]  ">
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black mt-12`}
              >
                블랙그라운드
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-16px"]} text-[#333333] mb-4 px-8 tracking-tighter font-black text-center`}
              >
                묵직하고 스모키한 첫인상과 입안 가득 꽉 차는 바디감,
                다크초콜릿의 달콤쌉싸름한 여운이 매력적인 다크 로스팅 블렌드
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} mb-2 text-[#333333] px-8 tracking-tighter font-black text-center`}
              >
                Dark Roast
              </div>
              <div>
                <span className={` ${TwosomeTwColors["color-red"]}`}>✔</span>
                Full-Body
              </div>
              <div>
                <span className={` ${TwosomeTwColors["color-red"]}`}>✔</span>
                Nutty
              </div>
              <div className="mb-3">
                <span className={` ${TwosomeTwColors["color-red"]} `}>✔</span>
                Chocolaty
              </div>
              <div className="flex items-center gap-3">
                산미
                <div>
                  <ul className="flex gap-2">
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                바디
                <div>
                  <ul className="flex gap-2">
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#d6d6d6] w-4 h-4 rounded-3xl `}></li>
                  </ul>
                </div>
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black`}
              >
                Origin
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-16px"]} mb-10 font font-bold text-[#53575A]`}
              >
                콜롬비아, 브라질, 에티오피아, 과테말라
              </div>
            </div>
          </article>

          <article className=" w-150 md:w-95 border border-[#d6d6d6]  ">
            <div className="flex flex-col items-center w-[100%] py-12">
              <div className="flex flex-col items-center w-[100%]">
                <img
                  src="https://www.twosome.co.kr/resources/images/icon/ico_64_coffee_aroma.svg"
                  alt=""
                />
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-24px"]} my-3 font-black`}
              >
                AROMA NOTE
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-18px"]} text-[#f05329] `}
              >
                MEDIUM ROAST
              </div>
            </div>
            <div className="flex gap-3 flex-col items-center w-[100%] border border-[#d6d6d6]  ">
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black mt-12`}
              >
                아로마노트
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-16px"]} text-[#333333] mb-4 px-8 tracking-tighter font-black text-center`}
              >
                잘 익은 과일향, 플로럴한 아로마에 부드럽고 밀도 있는 단맛과
                은은한 산미의 밸런스가 좋은 미디엄 로스팅 블렌드
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} mb-2 text-[#333333] px-8 tracking-tighter font-black text-center`}
              >
                Medium Roast
              </div>
              <div>
                <span className={` ${TwosomeTwColors["color-red"]}`}>✔</span>
                Full-Body
              </div>
              <div>
                <span className={` ${TwosomeTwColors["color-red"]}`}>✔</span>
                Juicy
              </div>
              <div className="mb-3">
                <span className={` ${TwosomeTwColors["color-red"]} `}>✔</span>
                Chocolaty
              </div>
              <div className="flex items-center gap-3">
                산미
                <div>
                  <ul className="flex gap-2">
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D6d6d6] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D6d6d6] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D6d6d6] w-4 h-4 rounded-3xl `}></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                바디
                <div>
                  <ul className="flex gap-2">
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                  </ul>
                </div>
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black`}
              >
                Origin
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-16px"]} mb-10 font font-bold text-[#4388bc]`}
              >
                에티오피아(Natural), 과테말라
              </div>
            </div>
          </article>

          <article className=" w-150 md:w-95 border border-[#d6d6d6]  ">
            <div className="flex flex-col items-center w-[100%] py-12">
              <div className="flex flex-col items-center w-[100%]">
                <img
                  src="https://www.twosome.co.kr/resources/images/icon/ico_64_coffee_swp.svg"
                  alt=""
                />
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-24px"]} my-3 font-black`}
              >
                SWP. DECAF
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-18px"]} text-[#53575A] `}
              >
                DARK ROAST
              </div>
            </div>
            <div className="flex gap-3 flex-col items-center w-[100%] border border-[#d6d6d6]  ">
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black mt-12`}
              >
                SWP. 디카페인
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-16px"]} text-[#333333] mb-4 px-8 tracking-tighter font-black text-center`}
              >
                친환경 방식의 스위스 워터 프로세스로 카페인을 제거하고 견과류의
                고소한 풍미는 그대로 남긴 다크 로스팅 블렌드
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} mb-2 text-[#333333] px-8 tracking-tighter font-black text-center`}
              >
                Dark Roast
              </div>
              <div>
                <span className={` ${TwosomeTwColors["color-red"]}`}>✔</span>
                Rich
              </div>
              <div>
                <span className={` ${TwosomeTwColors["color-red"]}`}>✔</span>
                Sweet
              </div>
              <div className="mb-3">
                <span className={` ${TwosomeTwColors["color-red"]} `}>✔</span>
                Well-Balanced
              </div>
              <div className="flex items-center gap-3">
                산미
                <div>
                  <ul className="flex gap-2">
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D6d6d6] w-4 h-4 rounded-3xl `}></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                바디
                <div>
                  <ul className="flex gap-2">
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D50037] w-4 h-4 rounded-3xl `}></li>
                    <li className={`bg-[#D6d6d6] w-4 h-4 rounded-3xl `}></li>
                  </ul>
                </div>
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black`}
              >
                Origin
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-16px"]} mb-10 font font-bold text-[#53575A]`}
              >
                콜롬비아, 브라질, 에티오피아, 과테말라
              </div>
            </div>
          </article>
        </article>
      </div>
    </>
  );
};

export default CoffeeCard;
