"use client";

import { useAuth } from "../hooks/useAuth";
import LogoutButton from "../login/Logout";

const AuthStatus = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>로딩 중...</p>;

  return (
    <div className="text-center py-4">
      {user ? (
        <>
          <p>{user.email}님 안녕하세요 👋</p>
          <LogoutButton />
        </>
      ) : (
        <p>로그인이 필요합니다</p>
      )}
    </div>
  );
};

export default AuthStatus;
