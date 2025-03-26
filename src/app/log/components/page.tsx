"use client";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { MdEmail } from "react-icons/md";
import { auth } from "../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일/비밀번호 로그인
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ 이메일 로그인 성공!");
      alert("✅ 이메일 로그인 성공!");
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    }
  };

  // 구글 로그인
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" }); // 항상 계정을 선택할 수 있도록 설정
    try {
      await signInWithPopup(auth, provider);
      console.log("✅ 구글 로그인 성공!");
      alert("✅ 구글 로그인 성공!");
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-800 p-20 rounded shadow-2xl w-xl">
        <h2 className="text-2xl text-white font-bold mb-4 text-center">
          로그인
        </h2>

        {/* 이메일 로그인 폼 */}
        <form onSubmit={handleEmailLogin} className="mb-4">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border-2 border-white rounded text-white placeholder:text-white"
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 p-2 border-2 border-white rounded text-white placeholder:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black p-2 border border-gray-400 rounded flex justify-center items-center gap-3 hover:bg-gray-200"
          >
            <MdEmail className="w-[20px] h-[20px]" />
            <strong>이메일로 로그인</strong>
          </button>
        </form>

        {/* 구글 로그인 버튼 */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black p-2 border border-gray-400 rounded flex justify-center items-center gap-3 hover:bg-gray-200"
        >
          <img
            className="w-[20px] h-[20px] object-cover"
            src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-icon-PNG-Transparent-Background-letter-G-multiple-colors.png"
            alt=""
          />
          <strong>Google로 로그인</strong>
        </button>
      </div>
    </div>
  );
};

export default Login;
