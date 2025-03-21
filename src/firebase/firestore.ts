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

<<<<<<< HEAD
export const fetchMenuItems = async () => {
  try {
    console.log("메뉴 데이터 가져오는 중");

    const querySnapshot = await getDocs(collection(db, "twosome"));
    if (querySnapshot.empty) {
      console.warn("데이터가 없습니다.");
=======
// 🔹 Firestore에서 "twosome" 컬렉션의 모든 메뉴 가져오기
export const fetchMenuItems = async () => {
  try {
    console.log("📡 Firestore에서 메뉴 데이터 가져오는 중...");

    const querySnapshot = await getDocs(collection(db, "twosome"));
    if (querySnapshot.empty) {
      console.warn("⚠ Firestore에 데이터가 없습니다.");
>>>>>>> origin/my-LHB
      return [];
    }

    const menuItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

<<<<<<< HEAD
    console.log("가져온 메뉴 데이터:", menuItems);
    return menuItems;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
=======
    console.log("🔥 Firestore에서 가져온 메뉴 데이터:", menuItems);
    return menuItems;
  } catch (error) {
    console.error("❌ Firestore 메뉴 데이터 가져오기 실패:", error);
>>>>>>> origin/my-LHB
    return [];
  }
};

<<<<<<< HEAD
=======
// 🔹 Firestore에서 메뉴 데이터를 실시간으로 구독
>>>>>>> origin/my-LHB
export const subscribeToMenuItems = (callback: (menuItems: any[]) => void) => {
  return onSnapshot(collection(db, "twosome"), (snapshot) => {
    const menuItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(menuItems);
  });
};

<<<<<<< HEAD
=======
// 🔹 Firestore에 메뉴 추가
>>>>>>> origin/my-LHB
export const addMenuItem = async (
  ename: string,
  pricename: string,
  explanation: string,
<<<<<<< HEAD
  imgurl: string,
  menu: string
=======
  imgurl: string
>>>>>>> origin/my-LHB
) => {
  try {
    await addDoc(collection(db, "twosome"), {
      ename,
      pricename,
      explanation,
      imgurl,
<<<<<<< HEAD
      menu,
    });
    console.log("메뉴 추가 완료!");
  } catch (error) {
    console.error("메뉴 추가 실패:", error);
  }
};

=======
    });
    console.log("✅ Firestore에 메뉴 추가 완료!");
  } catch (error) {
    console.error("❌ Firestore 메뉴 추가 실패:", error);
  }
};

// 🔹 Firestore에서 메뉴 정보 수정
>>>>>>> origin/my-LHB
export const updateMenuItem = async (
  id: string,
  ename: string,
  pricename: string,
  explanation: string,
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/my-LHB
export const deleteMenuItem = async (id: string) => {
  try {
    const menuRef = doc(db, "twosome", id);
    await deleteDoc(menuRef);
<<<<<<< HEAD
    console.log("제 완료!");
  } catch (error) {
    console.error("삭제 실패:", error);
=======
    console.log("✅ Firestore 메뉴 삭제 완료!");
  } catch (error) {
    console.error("❌ Firestore 메뉴 삭제 실패:", error);
>>>>>>> origin/my-LHB
  }
};
