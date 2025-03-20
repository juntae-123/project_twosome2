import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// 🔹 유저 데이터 타입 정의
interface User {
  name: string;
  age: number;
}

// 🔹 Firestore에서 "twosome" 컬렉션의 "list" 문서 데이터 가져오기
export const fetchUsers = async (): Promise<User | null> => {
  try {
    console.log("📡 fetchUsers() 실행됨! Firestore 데이터 요청 중..."); // ✅ 실행 확인 로그

    const docRef = doc(db, "twosome", "list"); // ✅ Firestore 경로 확인
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.warn("⚠ Firestore에 데이터가 없습니다.");
      return null;
    }

    const data = docSnap.data() as User;
    console.log("🔥 Firestore에서 가져온 데이터:", data); // ✅ 데이터 확인 로그
    return data;
  } catch (error) {
    console.error("❌ Firestore 데이터 가져오기 실패:", error);
    return null;
  }
};
