import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import SgCoffeeCard from "./sgCoffeeCard";
import coffeeMenu from "./coffeemenu";
import desertMenu from "./desertmenu";
import deliMenu from "./delimenu";

type menuprops = {
  title: string;
  text: string;
};

const SgCoffee = ({ title, text }: menuprops) => {
  const name =
    text == "디저트이야기"
      ? desertMenu
      : text == "델리이야기"
      ? deliMenu
      : coffeeMenu;
  return (
    <div className="max-w-[1215px] flex flex-col items-center md:items-start mb-20">
      {/* 타이틀 */}
      <h2
        className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8`}
      >
        {title}
      </h2>

      {/* 커피 카드 리스트 */}
      <div className="grid grid-cols-1 items-start ml-10 md:ml-0 md:h-130 gap-10 md:grid-cols-4 justify-between">
        {name.map((v, index) => (
          <SgCoffeeCard key={index} {...v} />
        ))}
      </div>
    </div>
  );
};

export default SgCoffee;
