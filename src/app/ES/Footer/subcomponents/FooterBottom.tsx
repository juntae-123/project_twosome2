import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import FooterSNS from "./FooterSNS";

const FooterBottom = () => {
  return (
    <div className="py-[48px] flex flex-col gap-6 max-md:gap-3 max-md:py-[32px]">
      <ul
        className={`${TwosomeTwFontSizes["fontSize-14px"]} font-semibold flex gap-10 max-md:text-xs/3 max-md:flex-wrap max-md:gap-4`}
      >
        <li>이용약관</li>
        <li className={`${TwosomeTwColors["color-yellow"]}`}>
          개인정보처리방침
        </li>
        <li>위치기반서비스 이용약관</li>
        <li>이메일 무단수집거부</li>
        <li>법적고지</li>
        <li>사업자정보확인</li>
      </ul>
      <div
        className={`${TwosomeTwColors["color-grayTwo"]} ${TwosomeTwFontSizes["fontSize-14px"]} font-normal flex flex-col gap-2.5 max-md:gap-2 max-md:text-xs`}
      >
        <ul className="flex gap-8 max-md:flex-col max-md:gap-2">
          <li>대표이사 : 문영주</li>
          <li> 개인정보보호책임자 : 정병구</li>
          <li> 사업자등록번호 : 404-86-01054</li>
        </ul>
        <ul className="flex gap-8 max-md:flex-col max-md:gap-2">
          <li>통신판매업종신고증 : 제 2018-서울중구-0353호</li>
          <li>대표이메일 : helpmaster@twosome.co.kr</li>
        </ul>
      </div>
      <span
        className={`${TwosomeTwColors["color-grayTwo"]} ${TwosomeTwFontSizes["fontSize-12px"]} max-md:text-[10px] max-md:flex max-md:flex-col`}
      >
        <span>Copyright ⓒ 2021 A TWOSOME PLACE Co., LTD. </span>
        <span>All Rights Reserved.</span>
      </span>
      <FooterSNS />
    </div>
  );
};

export default FooterBottom;
