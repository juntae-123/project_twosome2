import { initializeApp } from "firebase/app";
import { getFirestore, enableNetwork } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Firestore 온라인 모드 활성화
enableNetwork(db).catch((error) => {
  console.error("Firestore 네트워크 활성화 실패:", error);
});

export { db };
