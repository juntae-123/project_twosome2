"use client";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut(auth);
    alert("로그아웃 완료!");
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
