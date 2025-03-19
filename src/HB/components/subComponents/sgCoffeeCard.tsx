import { TwosomeTwFontSizes } from "@/common/tailstyles";

type coffeeProps = {
  img: string;
  text1: string;
  name: string;
  text2: string;
  text3: string;
};

const SgCoffeeCard = ({ img, text1, name, text2, text3 }: coffeeProps) => {
  return (
    <>
      <article className="w-200 md:w-70 ">
        <div className="realative ">
          <div
            className={`bg-black absolute text-[white] ${TwosomeTwFontSizes["fontSize-14px"]} px-3`}
          >
            Espress
          </div>
          <img src={img} alt="" />
        </div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-24px"]} font-black  mt-6 `}
        >
          {name}
        </div>
        <div className="text-[#707070]  mb-5">{text1}</div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-18px"]} font-black tracking-tighter mb-5 `}
        >
          {text2}
        </div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-13px"]} tracking-tighter text-[#707070]`}
        >
          {text3}
        </div>
      </article>
    </>
  );
};

export default SgCoffeeCard;
