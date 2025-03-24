import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import { CoffeeCardData } from "../data/coffeeCardData";

const CoffeeCard = () => {
  const renderRedDots = (x: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const isActive = x > i;
      return (
        <li
          key={i}
          className={`w-4 h-4 rounded-full ${
            isActive ? "bg-[#D50037]" : "bg-[#d6d6d6]"
          }`}
        ></li>
      );
    });
  };

  return (
    <>
      <div className="mb-20 flex flex-col  items-center    md:items-start">
        <h2
          className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter mb-8`}
        >
          투썸의 특별한 블랜드
        </h2>
        <div className="flex gap-10">
          {CoffeeCardData.map((x) => {
            return (
              <article className="flex flex-col gap-10 md:flex-row md: gap-0 justify-between max-w-[1215px]">
                <article className=" w-150 md:w-95 border border-[#d6d6d6]  ">
                  <div className="flex flex-col items-center w-[100%] py-12">
                    <div className="flex flex-col items-center w-[100%]">
                      <img src={x.img} alt="" />
                    </div>
                    <div
                      className={`${TwosomeTwFontSizes["fontSize-24px"]} my-3 font-black`}
                    ></div>
                    <div
                      className={`${TwosomeTwFontSizes["fontSize-18px"]} text-[#53575A] `}
                    >
                      {x.title}
                    </div>
                  </div>
                  <div className="flex gap-3 flex-col items-center w-[100%] border border-[#d6d6d6]  ">
                    <div
                      className={`${TwosomeTwFontSizes["fontSize-20px"]} font-black mt-12`}
                    >
                      {x.subTitle}
                    </div>
                    <div
                      className={`${TwosomeTwFontSizes["fontSize-16px"]} text-[#333333] mb-4 px-8 tracking-tighter font-black text-center`}
                    >
                      {x.detail}
                    </div>
                    <div
                      className={`${TwosomeTwFontSizes["fontSize-20px"]} mb-2 text-[#333333] px-8 tracking-tighter font-black text-center`}
                    >
                      {x.roast}
                    </div>
                    {[x.taste1, x.taste2, x.taste3].map((v, i) => {
                      return (
                        <div key={i}>
                          <span className={` ${TwosomeTwColors["color-red"]}`}>
                            ✔
                          </span>
                          {v}
                        </div>
                      );
                    })}

                    <div className="flex items-center gap-3">
                      산미
                      <div>
                        <ul className="flex gap-2">
                          {renderRedDots(x.review1)}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      바디
                      <div>
                        <ul className="flex gap-2">
                          {renderRedDots(x.review2)}
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
                      {x.origin}
                    </div>
                  </div>
                </article>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
