import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const FooterSNS = () => {
  return (
    <div className="flex gap-3 justify-end max-md:justify-start">
      <a
        href="https://www.instagram.com/atwosomeplace_official/?igshid=1vu3rl2z5ps7n"
        target="_blank"
      >
        <FaInstagram className="w-[30px] h-[30px] border border-[#777] rounded-[9999px] p-1" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCDjdk0ufvcvV08hAm_vF06Q"
        target="_blank"
      >
        <FaYoutube className="w-[30px] h-[30px] border border-[#777] rounded-[9999px] p-1" />
      </a>
      <a href="https://x.com/TWOSOMEsays" target="_blank">
        <RiTwitterXFill className="w-[30px] h-[30px] border border-[#777] rounded-[9999px] p-1" />
      </a>
    </div>
  );
};

export default FooterSNS;
