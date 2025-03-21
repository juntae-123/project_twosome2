"use client";

import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
import Link from "next/link";
import AdminPage from "./admin/admin";

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

export default function Home() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    console.log("🔄 Firestore에서 메뉴 데이터 요청 중...");

    const loadMenuItems = async () => {
      const fetchedMenuItems = await fetchMenuItems();
      console.log("🎯 가져온 메뉴 데이터:", fetchedMenuItems);
      setMenuItems(fetchedMenuItems);
    };

    loadMenuItems();
  }, []);

  return (
    <div>
      <AdminPage />
    </div>
  );
}
