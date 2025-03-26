"use client";
import { TwosomeTwFontSizes } from "@/common/tailstyles";
import SgCoffeeCard from "./sgCoffeeCard";
import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "../../../firebase/firestore";

type menuprops = {
  title: string;
  text: string;
};

interface MenuItem {
  menu: string;
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
  details: string;
}

const SgCoffee = ({ title, text }: menuprops) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const loadMenu = async () => {
      const fetchedMenu = await fetchMenuItems(); // fetchedMenu 타입을 명시적으로 MenuItem[]로 지정
      setMenuItems(fetchedMenu);
    };

    loadMenu();
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행됨

  const name =
    text == "디저트이야기"
      ? menuItems.filter((v) => v.menu == "desert")
      : text == "델리이야기"
      ? menuItems.filter((v) => v.menu == "deli")
      : menuItems.filter((v) => v.menu == "drink");
  console.log(name);
  return (
    <div className="max-w-[1215px] flex flex-col items-center md:items-start mb-30">
      <h2
        className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8`}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 items-start md:ml-0 md:h-[100%] gap-10 md:grid-cols-4  justify-between">
        {name.map((v, i) => (
          <SgCoffeeCard key={i} {...v} />
        ))}
      </div>
    </div>
  );
};

export default SgCoffee;
