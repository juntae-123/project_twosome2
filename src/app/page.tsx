<<<<<<< HEAD
"use client"; // ✅ 클라이언트 컴포넌트 설정

import React, { useEffect, useState } from "react";
import { fetchUsers } from "@/firebase/firestore";
import Tosometags from "@/JT/components/subcomponents/tosometags";

interface User {
  name: string;
  age: number;
=======
import BrandPage from "@/HB/components/pageBrand/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
import PageNotice from "@/HB/components/pageNotice/page";
import NoticeText from "@/HB/components/subComponents/notice";
import Link from "next/link";
import Signup from "./login";

export default function Home() {
  return (
    <>
      <PageNotice></PageNotice>
      <BrandPage></BrandPage>
      <Pagevision></Pagevision>
      <PageStory></PageStory>
    </>
  );
>>>>>>> origin/my-LHB
}

const Page: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("🔄 useEffect 실행됨! Firestore 데이터 요청 중..."); // ✅ 실행 확인 로그 추가

    const loadUser = async () => {
      const fetchedUser = await fetchUsers();
      console.log("🎯 가져온 데이터:", fetchedUser); // ✅ 데이터 확인 로그
      setUser(fetchedUser);
    };

    loadUser();
  }, []);

  return (
    <div>
      <h1>사용자 정보</h1>
      {user ? (
        <p>
          이름: {user.name} <br />
          나이: {user.age}세 아이디:{user.ID}
        </p>
      ) : (
        <p>❌ Firestore에 데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default Page;
