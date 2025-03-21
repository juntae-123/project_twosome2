import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";

const FooterTop = () => {
  return (
    <div className="flex justify-between border-b border-b-[#777] pb-[48px] max-md:flex-col max-md:[32px]">
      <ul
        className={`${TwosomeTwFontSizes["fontSize-24px"]} font-semibold flex flex-col gap-5 max-md:text-lg max-md:gap-2`}
      >
        <li className="hover:underline">기업 및 단체구매안내</li>
        <li className="hover:underline">협력업체 제안</li>
        <li className="hover:underline">가맹상담신청</li>
        <li className="hover:underline">사이버신문고</li>
      </ul>
      <div className="flex flex-col gap-8 max-md:hidden">
        <dl className="flex flex-col gap-3">
          <dt
            className={`${TwosomeTwFontSizes["fontSize-16px"]} font-semibold`}
          >
            Adress
          </dt>
          <dd
            className={`${TwosomeTwFontSizes["fontSize-14px"]} ${TwosomeTwColors["color-grayTwo"]} font-medium`}
          >
            서울특별시 중구 을지로 170, 8층(을지로4가,
            을지트윈타워)투썸플레이스(주)
          </dd>
        </dl>
        <dl className="flex flex-col gap-3">
          <dt
            className={`${TwosomeTwFontSizes["fontSize-16px"]} font-semibold`}
          >
            Customer Center
          </dt>
          <dd
            className={`${TwosomeTwFontSizes["fontSize-14px"]} ${TwosomeTwColors["color-grayTwo"]} font-medium`}
          >
            고객센터 : 1577-4410
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default FooterTop;
