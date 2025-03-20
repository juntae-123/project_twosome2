"use client";
import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import SgCoffeeCard from "./sgCoffeeCard";
import coffeeMenu from "./coffeemenu";
import desertMenu from "./desertmenu";
import deliMenu from "./delimenu";
import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";

type menuprops = {
  title: string;
  text: string;
};

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

const SgCoffee = ({ title, text }: menuprops) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const loadMenu = async () => {
      const fetchedMenu = await fetchMenuItems(); // fetchedMenu 타입을 명시적으로 MenuItem[]로 지정
      setMenuItems(fetchedMenu);
      console.log(fetchedMenu[0].menu);
    };

    loadMenu();
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행됨

  const name =
    text == "디저트이야기"
      ? desertMenu
      : text == "델리이야기"
      ? deliMenu
      : coffeeMenu;
  return (
    <div className="max-w-[1215px] flex flex-col items-center md:items-start mb-20">
      <h2
        className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8`}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 items-start ml-10 md:ml-0 md:h-130 gap-10 md:grid-cols-4 justify-between">
        {name.map((v, index) => (
          <SgCoffeeCard key={index} {...v} />
        ))}
      </div>
    </div>
  );
};

export default SgCoffee;
