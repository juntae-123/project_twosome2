import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// 🔹 메뉴 아이템 데이터 타입 정의
interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  try {
    console.log("📡 Firestore에서 메뉴 데이터 가져오는 중...");

    const querySnapshot = await getDocs(collection(db, "twosome"));
    const menuItems: MenuItem[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ename: data.ename ?? "이름 없음",
        pricename: data.pricename ?? "이름 없음",
        explanation: data.explanation ?? "설명 없음",
        imgurl: data.imgurl ?? "",
      };
    });

    console.log("🔥 Firestore에서 가져온 메뉴 데이터:", menuItems);
    return menuItems;
  } catch (error) {
    console.error("❌ Firestore 메뉴 데이터 가져오기 실패:", error);
    return [];
  }
};
