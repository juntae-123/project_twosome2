import SupportSwiper from "./subcomponents/SupportSwiper";
import SupportTitle from "./subcomponents/SupportTitle";
import { TwosomeTwColors } from "@/common/tailstyles";

const SupportSection = () => {
  return (
    <div
      className={`w-[100vw] h-[100vh] bg-white ${TwosomeTwColors["color-black"]} max-md:h-[719px] max-md:px-[80px]`}
    >
      <SupportTitle />
      <SupportSwiper />
    </div>
  );
};

export default SupportSection;
