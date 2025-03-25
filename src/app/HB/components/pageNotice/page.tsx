"use client";

import NoticeText from "../subComponents/notice";

import Title from "../subComponents/title";
import NoticeInput from "../subComponents/noticeInput";
import { useState } from "react";

<<<<<<< HEAD:src/HB/components/pageNotice/page.tsx
const PageNotice = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
=======
export default function PageNotice() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
  const [searchQuery, setSearchQuery] = useState(""); // 실제 검색 실행된 값
>>>>>>> origin/hg:src/app/HB/components/pageNotice/page.tsx

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };
  return (
    <>
      <div className="max-w-[1215px] mx-auto mb-20">
        <Title text="공지사항" />
        <NoticeInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
        <NoticeText searchQuery={searchQuery} />
      </div>
    </>
  );
}
