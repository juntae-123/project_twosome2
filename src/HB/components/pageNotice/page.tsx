"use client";
import NoticeText from "../subComponents/notice";
import Title from "../subComponents/title";
import NoticeInput from "../subComponents/noticeInput";
import { useState } from "react";

const PageNotice = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
  return (
    <>
      <div className="max-w-[1215px] mx-auto mb-20">
        <Title text="공지사항" />

        <NoticeInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <NoticeText searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default PageNotice;
