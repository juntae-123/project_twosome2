import { initializeApp } from "firebase/app";
import { getFirestore, enableNetwork } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0rlSvoRfW39IrqKiFo7ctEsOCDVir3tU",
<<<<<<< HEAD
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
=======
  authDomain: "twosome-1e8cb.firebaseapp.com",
>>>>>>> origin/main
  projectId: "twosome-1e8cb",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

enableNetwork(db).catch((error) => {
  console.error("네트워크 실패:", error);
});
const auth = getAuth(app);

export { db, auth };
