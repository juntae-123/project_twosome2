import SupportSwiper from "./subcomponents/SupportSwiper";
import SupportTitle from "./subcomponents/SupportTitle";
import { TwosomeTwColors } from "@/common/tailstyles";

const SupportSection = () => {
  return (
    <section
      className={`relative w-full h-[100vh] py-[100px] bg-white ${TwosomeTwColors["color-black"]} overflow-hidden max-md:h-[719px] max-md:py-[80px] max-md:px-[32px]`}
    >
      <div className="w-full max-w-[1312px] h-full mx-auto max-md:max-w-[366px]">
        <SupportTitle />
        <SupportSwiper />
      </div>
    </section>
  );
};

export default SupportSection;
