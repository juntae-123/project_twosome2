"use client";
import MainBtmPage from "@/ES/page";
import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
import Sectionthree from "@/HG/sections/Sectionthree";
import Sectiontwo from "@/HG/sections/Sectiontwo";

// ✅ 클라이언트 컴포넌트 설정

interface User {
  name: string;
  age: number;
}

export default function Home() {
  return (
    <>
      <Sectiononeswiper />

      <Sectiontwo />

      <Sectionthree img="sectionthree1" />

      <MainBtmPage />
    </>
  );
}

// const Page: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     console.log("🔄 useEffect 실행됨! Firestore 데이터 요청 중..."); // ✅ 실행 확인 로그 추가

//     const loadUser = async () => {
//       const fetchedUser = await fetchUsers();
//       console.log("🎯 가져온 데이터:", fetchedUser); // ✅ 데이터 확인 로그
//       setUser(fetchedUser);
//     };

//     loadUser();
//   }, []);

//   return (
//     <div>
//       <h1>사용자 정보</h1>
//       {user ? (
//         <p>
//           이름: {user.name} <br />
//           나이: {user.age}세 아이디:{user.ID}
//         </p>
//       ) : (
//         <p>❌ Firestore에 데이터가 없습니다.</p>
//       )}
//     </div>
//   );
// };

// export default Page;
