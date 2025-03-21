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

export const fetchMenuItems = async () => {
  try {
    console.log("메뉴 데이터 가져오는 중");

    const querySnapshot = await getDocs(collection(db, "twosome"));
    if (querySnapshot.empty) {
      console.warn("데이터가 없습니다.");
      return [];
    }

    const menuItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("가져온 메뉴 데이터:", menuItems);
    return menuItems;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    return [];
  }
};

export const subscribeToMenuItems = (callback: (menuItems: any[]) => void) => {
  return onSnapshot(collection(db, "twosome"), (snapshot) => {
    const menuItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(menuItems);
  });
};

export const addMenuItem = async (
  ename: string,
  pricename: string,
  explanation: string,
  imgurl: string,
  menu: string
) => {
  try {
    await addDoc(collection(db, "twosome"), {
      ename,
      pricename,
      explanation,
      imgurl,
      menu,
    });
    console.log("메뉴 추가 완료!");
  } catch (error) {
    console.error("메뉴 추가 실패:", error);
  }
};

export const updateMenuItem = async (
  id: string,
  ename: string,
  pricename: string,
  explanation: string,
  imgurl: string,
  menu: string
) => {
  try {
    const menuRef = doc(db, "twosome", id);
    await updateDoc(menuRef, { ename, pricename, explanation, imgurl, menu });
    console.log("정보 수정 완료!");
  } catch (error) {
    console.error("수정 실패:", error);
  }
};

export const deleteMenuItem = async (id: string) => {
  try {
    const menuRef = doc(db, "twosome", id);
    await deleteDoc(menuRef);
    console.log("제 완료!");
  } catch (error) {
    console.error("삭제 실패:", error);
  }
};
