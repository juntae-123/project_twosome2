"use client";

import React, { useEffect, useState } from "react";
import {
  subscribeToMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../firebase/firestore";

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
  menu: string;
}

export default function AdminPage() {
  const [menu, setMenu] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [ename, setEname] = useState("");
  const [pricename, setPricename] = useState("");
  const [explanation, setExplanation] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [editingMenu, setEditingMenu] = useState<MenuItem | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToMenuItems(setMenuItems);
    return () => unsubscribe();
  }, []);

  const AddMenuItem = async () => {
    if (!ename || !pricename || !explanation || !imgurl) {
      alert("모든 필드를 입력하세요");
      return;
    }
    await addMenuItem(ename, pricename, explanation, imgurl, menu);
    setEname("");
    setPricename("");
    setExplanation("");
    setImgurl("");
    setMenu("");
  };

  const UpdateMenuItem = async () => {
    if (
      !editingMenu ||
      !ename ||
      !pricename ||
      !explanation ||
      !imgurl ||
      !menu
    )
      return;
    await updateMenuItem(
      editingMenu.id,
      ename,
      pricename,
      explanation,
      imgurl,
      menu
    );
    setEditingMenu(null);
    setEname("");
    setPricename("");
    setExplanation("");
    setImgurl("");
    setMenu("");
  };

  const startEditing = (menu: MenuItem) => {
    setEditingMenu(menu);
    setEname(menu.ename);
    setPricename(menu.pricename);
    setExplanation(menu.explanation);
    setImgurl(menu.imgurl);
    setMenu(menu.menu);
  };

  const DeleteMenuItem = async (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      await deleteMenuItem(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-40">
      <h1 className="text-3xl font-bold mb-6 text-center">
        투썸 관리자 페이지
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingMenu ? "메뉴 수정" : "메뉴 추가"}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="영어 메뉴명"
            value={ename}
            onChange={(e) => setEname(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="한글 메뉴명"
            value={pricename}
            onChange={(e) => setPricename(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="메뉴 종류"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="설명"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="이미지 URL"
            value={imgurl}
            onChange={(e) => setImgurl(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {editingMenu ? (
            <button
              onClick={UpdateMenuItem}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition"
            >
              수정 완료
            </button>
          ) : (
            <button
              onClick={AddMenuItem}
              className="bg-blue-300 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
            >
              추가
            </button>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">메뉴 목록</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((menu) => (
          <li
            key={menu.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={menu.imgurl}
              alt={menu.ename}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">
              {menu.pricename} ({menu.ename})
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              {menu.explanation}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => startEditing(menu)}
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg text-sm"
              >
                수정
              </button>
              <button
                onClick={() => DeleteMenuItem(menu.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg text-sm"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
