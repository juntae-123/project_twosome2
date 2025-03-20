import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// 🔹 Firestore에서 "twosome" 컬렉션의 모든 메뉴 가져오기
export const fetchMenuItems = async () => {
  try {
    console.log("📡 Firestore에서 메뉴 데이터 가져오는 중...");

    const querySnapshot = await getDocs(collection(db, "twosome"));
    if (querySnapshot.empty) {
      console.warn("⚠ Firestore에 데이터가 없습니다.");
      return [];
    }

    const menuItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("🔥 Firestore에서 가져온 메뉴 데이터:", menuItems);
    return menuItems;
  } catch (error) {
    console.error("❌ Firestore 메뉴 데이터 가져오기 실패:", error);
    return [];
  }
};

// 🔹 Firestore에서 메뉴 데이터를 실시간으로 구독
export const subscribeToMenuItems = (callback: (menuItems: any[]) => void) => {
  return onSnapshot(collection(db, "twosome"), (snapshot) => {
    const menuItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(menuItems);
  });
};

// 🔹 Firestore에 메뉴 추가
export const addMenuItem = async (
  ename: string,
  pricename: string,
  explanation: string,
  imgurl: string
) => {
  try {
    await addDoc(collection(db, "twosome"), {
      ename,
      pricename,
      explanation,
      imgurl,
    });
    console.log("✅ Firestore에 메뉴 추가 완료!");
  } catch (error) {
    console.error("❌ Firestore 메뉴 추가 실패:", error);
  }
};

// 🔹 Firestore에서 메뉴 정보 수정
export const updateMenuItem = async (
  id: string,
  ename: string,
  pricename: string,
  explanation: string,
  imgurl: string
) => {
  try {
    const menuRef = doc(db, "twosome", id);
    await updateDoc(menuRef, { ename, pricename, explanation, imgurl });
    console.log("✅ Firestore 메뉴 정보 수정 완료!");
  } catch (error) {
    console.error("❌ Firestore 메뉴 수정 실패:", error);
  }
};

// 🔹 Firestore에서 메뉴 삭제
export const deleteMenuItem = async (id: string) => {
  try {
    const menuRef = doc(db, "twosome", id);
    await deleteDoc(menuRef);
    console.log("✅ Firestore 메뉴 삭제 완료!");
  } catch (error) {
    console.error("❌ Firestore 메뉴 삭제 실패:", error);
  }
};
