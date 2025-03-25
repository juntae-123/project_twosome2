import { TwosomeTwFontSizes } from "@/common/tailstyles";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
}

const NoticeInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const [searchType, setSearchType] = useState("title");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <article className="max-w-full flex justify-end pb-10 border-b mt-10 border-[#ebebeb]">
      <div className="w-[452px] flex">
        <select
          className={`${TwosomeTwFontSizes["fontSize-16px"]} w-25 h-14 border-b`}
          name="searchType"
          id="searchType"
          title="검색범위"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>
        <div className="relative pl-6 h-14 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="검색어 입력 후 엔터"
            className="w-full h-full border-b"
          />
          <div className="absolute right-0 top-5 pr-3">
            <FaMagnifyingGlass
              className={`${TwosomeTwFontSizes["fontSize-20px"]}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default NoticeInput;
