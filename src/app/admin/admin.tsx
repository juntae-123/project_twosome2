"use client"; // ✅ 클라이언트 컴포넌트 설정

import React, { useEffect, useState } from "react";
import {
  subscribeToMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "@/firebase/firestore"; // ✅ Firestore 함수 import

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

export default function AdminPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [ename, setEname] = useState("");
  const [pricename, setPricename] = useState("");
  const [explanation, setExplanation] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [editingMenu, setEditingMenu] = useState<MenuItem | null>(null);

  useEffect(() => {
    console.log("🔄 Firestore 실시간 메뉴 데이터 구독 시작!");

    // Firestore 데이터를 실시간으로 가져옴
    const unsubscribe = subscribeToMenuItems(setMenuItems);
    return () => unsubscribe();
  }, []);

  // 🔹 메뉴 추가
  const handleAddMenuItem = async () => {
    if (!ename || !pricename || !explanation || !imgurl) {
      alert("모든 필드를 입력하세요!");
      return;
    }
    await addMenuItem(ename, pricename, explanation, imgurl);
    setEname("");
    setPricename("");
    setExplanation("");
    setImgurl("");
  };

  // 🔹 메뉴 정보 수정
  const handleUpdateMenuItem = async () => {
    if (!editingMenu || !ename || !pricename || !explanation || !imgurl) return;
    await updateMenuItem(editingMenu.id, ename, pricename, explanation, imgurl);
    setEditingMenu(null);
    setEname("");
    setPricename("");
    setExplanation("");
    setImgurl("");
  };

  // 🔹 수정 버튼 클릭 시 기존 정보 채우기
  const startEditing = (menu: MenuItem) => {
    setEditingMenu(menu);
    setEname(menu.ename);
    setPricename(menu.pricename);
    setExplanation(menu.explanation);
    setImgurl(menu.imgurl);
  };

  // 🔹 메뉴 삭제
  const handleDeleteMenuItem = async (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      await deleteMenuItem(id);
    }
  };

  return (
    <div>
      <h1>🔥 디저트 메뉴 관리자 페이지</h1>

      <h2>{editingMenu ? "메뉴 수정" : "메뉴 추가"}</h2>
      <input
        type="text"
        placeholder="영어 메뉴명"
        value={ename}
        onChange={(e) => setEname(e.target.value)}
      />
      <input
        type="text"
        placeholder="한글 메뉴명"
        value={pricename}
        onChange={(e) => setPricename(e.target.value)}
      />
      <textarea
        placeholder="설명"
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
      />
      <input
        type="text"
        placeholder="이미지 URL"
        value={imgurl}
        onChange={(e) => setImgurl(e.target.value)}
      />

      {editingMenu ? (
        <button onClick={handleUpdateMenuItem}>수정 완료</button>
      ) : (
        <button onClick={handleAddMenuItem}>추가</button>
      )}

      <h2>메뉴 목록</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            <img
              src={menu.imgurl}
              alt={menu.ename}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>
              {menu.pricename} ({menu.ename})
            </h3>
            <p>{menu.explanation}</p>
            <button onClick={() => startEditing(menu)}>수정</button>
            <button onClick={() => handleDeleteMenuItem(menu.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
