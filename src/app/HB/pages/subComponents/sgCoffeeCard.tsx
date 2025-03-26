import { TwosomeTwFontSizes } from "@/common/tailstyles";
import React from "react";

interface MenuItem {
  menu: string;
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
  details: string;
}

const SgCoffeeCard = ({
  menu,
  id,
  ename,
  pricename,
  explanation,
  imgurl,
  details,
}: MenuItem) => {
  return (
    <>
      <article className="w-170 md:w-70 mt-5">
        <div className="relative">
          <div
            className={`bg-black absolute text-[white] ${TwosomeTwFontSizes["fontSize-14px"]} px-3`}
          >
            {menu}
          </div>
          <img src={imgurl} alt={id} />
        </div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-24px"]} font-black mt-6`}
        >
          {pricename}
        </div>
        <div className="text-[#707070] mb-5">{ename}</div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-18px"]} font-black tracking-tighter mb-5`}
        >
          {explanation}
        </div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-13px"]} tracking-tighter text-[#707070]`}
        >
          {details}
        </div>
      </article>
    </>
  );
};

export default SgCoffeeCard;
