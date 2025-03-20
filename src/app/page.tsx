"use client";

import React, { useEffect, useState } from "react";

import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
import Sectiontwo from "@/HG/sections/Sectiontwo";
import Sectionthree from "@/HG/sections/Sectionthree";
import MainBtmPage from "@/ES/page";

interface User {
  name: string;
  age: number;
}

// export default function Home() {
//   return (
//     <>
//       <Sectiononeswiper />

//       <Sectiontwo />

//       <Sectionthree img="sectionthree1" />

//       <MainBtmPage />
//     </>
//   );
// }

// const Page: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     console.log("🔄 useEffect 실행됨! Firestore 데이터 요청 중..."); // ✅ 실행 확인 로그 추가

//     const loadUser = async () => {
//       const fetchedUser = await fetchUsers();
//       console.log("🎯 가져온 데이터:", fetchedUser); // ✅ 데이터 확인 로그
//       setUser(fetchedUser);
//     };

//     loadUser();
//   }, []);

//   return (
//     <div>
//       <h1>사용자 정보</h1>
//       {user ? (
//         <p>
//           이름: {user.name} <br />
//           나이: {user.age}세 아이디:{user.ID}
//         </p>
//       ) : (
//         <p>❌ Firestore에 데이터가 없습니다.</p>
//       )}
//     </div>
//   );
// };

//export default home;

import { fetchMenuItems } from "@/firebase/firestore";
import AdminPage from "./admin/admin";
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
      <div>
        <AdminPage />
      </div>
    </div>
  );
}
