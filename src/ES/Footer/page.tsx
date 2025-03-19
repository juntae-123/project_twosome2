import { TwosomeTwColors } from "@/common/tailstyles";
import FooterBottom from "./subcomponents/FooterBottom";
import FooterTop from "./subcomponents/FooterTop";

const Footer = () => {
  return (
    <footer
      className={`w-screen h-[578px] bg-black ${TwosomeTwColors["color-white"]} py-[48px]`}
    >
      <div className="w-full max-w-[1312px] h-full m-auto">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
