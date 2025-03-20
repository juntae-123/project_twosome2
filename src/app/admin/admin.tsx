"use client"; // ✅ 클라이언트 컴포넌트 설정

import React, { useEffect, useState } from "react";
import {
  subscribeToUsers,
  addUser,
  updateUser,
  deleteUser,
} from "@/firebase/firestore"; // ✅ Firestore 함수 import

interface User {
  id: string;
  name: string;
  age: number;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("🔄 Firestore 실시간 데이터 구독 시작!");

    // Firestore 데이터를 실시간으로 가져옴
    const unsubscribe = subscribeToUsers(setUsers);
    return () => unsubscribe();
  }, []);

  // 🔹 사용자 추가
  const handleAddUser = async () => {
    if (!name || !age) {
      alert("이름과 나이를 입력하세요!");
      return;
    }
    await addUser(name, parseInt(age));
    setName("");
    setAge("");
  };

  // 🔹 사용자 정보 수정
  const handleUpdateUser = async () => {
    if (!editingUser || !name || !age) return;
    await updateUser(editingUser.id!, name, parseInt(age));
    setEditingUser(null);
    setName("");
    setAge("");
  };

  // 🔹 수정 버튼 클릭 시 기존 정보 채우기
  const startEditing = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setAge(user.age.toString());
  };

  // 🔹 사용자 삭제
  const handleDeleteUser = async (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      await deleteUser(id);
    }
  };

  return (
    <div>
      <h1>🔥 Firebase 관리자 페이지</h1>

      <h2>{editingUser ? "사용자 수정" : "사용자 추가"}</h2>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {editingUser ? (
        <button onClick={handleUpdateUser}>수정 완료</button>
      ) : (
        <button onClick={handleAddUser}>추가</button>
      )}

      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}세
            <button onClick={() => startEditing(user)}>수정</button>
            <button onClick={() => handleDeleteUser(user.id!)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
