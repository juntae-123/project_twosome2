import React, { useEffect, useState } from "react";
import { fetchUsers } from ".././src/firebase/firestore"; // Firestore에서 데이터 가져오기 함수 import

const UserList: React.FC = () => {
  const [users, setUsers] = useState<
    { id: string; name: string; age: number }[]
  >([]);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers(); // Firestore에서 데이터 가져오기
      setUsers(fetchedUsers); // 가져온 데이터를 상태에 저장
    };

    loadUsers();
  }, []);

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}세
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
