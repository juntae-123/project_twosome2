"use client"; // ✅ 클라이언트 컴포넌트 설정

import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
import Link from "next/link";

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
      <h1>🔥 투썸플레이스 메뉴</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {menuItems.length === 0 ? (
          <p>❌ Firestore에 데이터가 없습니다.</p>
        ) : (
          menuItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src={item.imgurl}
                alt={item.ename}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{item.pricename}</h3>
              <p>{item.explanation}</p>
            </div>
          ))
        )}
      </div>

      {/* ✅ 관리자 페이지로 이동 버튼 */}
      {/* <Link href="/admin">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
        >
          관리자 페이지로 이동
        </button>
      </Link> */}
    </div>
  );
}
