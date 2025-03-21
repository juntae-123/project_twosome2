"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google 로그인 성공:", user);
    } catch (error: any) {
      console.error("Google 로그인 실패:", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-amber-50-500 text-black p-2 rounded hover:bg-blue-100"
    >
      Google로 로그인
    </button>
  );
};

export default GoogleLoginButton;
