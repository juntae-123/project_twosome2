"use client"; // ✅ 클라이언트 컴포넌트 설정

import React, { useEffect, useState } from "react";
import { fetchUsers } from "./firebase/firestore";

interface User {
  id?: string;
  name: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log("🔄 Firestore에서 사용자 데이터 가져오기 시작...");

    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers(); // ✅ Firestore에서 사용자 데이터 가져오기
      console.log("🎯 가져온 데이터:", fetchedUsers);
      setUsers(fetchedUsers);
    };

    loadUsers();
  }, []);

  return (
    <div>
      <h1>🔥 Firestore 사용자 목록</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            이름: {user.name} - 나이: {user.age}세
          </li>
        ))}
      </ul>
    </div>
  );
}
