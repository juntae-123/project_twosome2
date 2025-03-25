"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("로그인 성공:", user);
    } catch (error: any) {
      console.error("로그인 실패:", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      style={{ border: "1px solid gray" }}
      className="bg-amber-50-500 text-black p-2 rounded hover:bg-sky-500 hover:text-white hover:border-none"
    >
      Google 로그인
    </button>
  );
};

export default GoogleLoginButton;
