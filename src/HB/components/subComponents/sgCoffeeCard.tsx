"use client";

import { TwosomeTwFontSizes } from "@/common/tailstyles";
import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore"; // ✅ Firestore에서 메뉴 데이터 가져오기

type coffeeProps = {
  img: string;
  text1: string;
  name: string;
  text2: string;
  text3: string;
};

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

const SgCoffeeCard = ({ img, text1, name, text2, text3 }: coffeeProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const loadMenu = async () => {
      const fetchedMenu = await fetchMenuItems(); // fetchedMenu 타입을 명시적으로 MenuItem[]로 지정
      setMenuItems(fetchedMenu);
      console.log(fetchedMenu);
    };

    loadMenu();
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행됨

  return (
    <>
      <article className="w-170 md:w-70 mt-5">
        <div className="relative">
          {" "}
          {/* "realative" -> "relative" 오타 수정 */}
          <div
            className={`bg-black absolute text-[white] ${TwosomeTwFontSizes["fontSize-14px"]} px-3`}
          >
            Espresso {/* "Espress" 오타 수정 */}
          </div>
          <img src={img} alt={name} />
        </div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-24px"]} font-black mt-6`}
        >
          {name}
        </div>
        <div className="text-[#707070] mb-5">{text1}</div>
        <div
          className={`${TwosomeTwFontSizes["fontSize-18px"]} font-black tracking-tighter mb-5`}
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
