import { TwosomeTwFontSizes } from "@/common/tailstyles";

type textprops = {
  text: string;
  img: string;
};
const Canoncard = ({ text, img }: textprops) => {
  return (
    <>
      <div className="pt-14 pb-14 px-10 flex flex-col items-center gap-5 w-60 max-h-60 border border-[#d6d6d6]">
        <img src={img} alt="" />
        <h3 className={`${TwosomeTwFontSizes["fontSize-24px"]} font-black`}>
          {text}
        </h3>
      </div>
    </>
  );
};

export default Canoncard;
