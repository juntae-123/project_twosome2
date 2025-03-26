"use client";

import NoticeText from "../subComponents/notice";

import Title from "../subComponents/title";
import NoticeInput from "../subComponents/noticeInput";
import { useState } from "react";

const PageNotice = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
  const [searchQuery, setSearchQuery] = useState(""); // 실제 검색 실행된 값

  const handleSearch = () => {
    setSearchQuery(searchTerm); // 검색어 입력 후 엔터 시 반영
  };
  return (
    <>
      <div className="max-w-[1215px] mx-auto mb-20">
        <div className="flex flex-col ">
          <div className="px-8 -mt-20 md:mt-0">
            <Title text="공지사항" />
          </div>
          <NoticeInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />{" "}
        </div>
        <NoticeText searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default PageNotice;
