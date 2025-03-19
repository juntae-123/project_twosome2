import { TwosomeTwFontSizes } from "@/common/tailstyles";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgArrowLongRight } from "react-icons/cg";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const NoticeInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <>
      <article className="max-w-[100%] flex justify-end pb-10 border-b mt-10 border-[#ebebeb]">
        <div className="w-[452px] flex ">
          <select
            className={`${TwosomeTwFontSizes["fontSize-16px"]} w-25 h-14 border-b`}
            name="searchType"
            id="searchType"
            title="검색범위"
          >
            <option value="title" selected>
              제목
            </option>
            <option value="content">내용</option>
          </select>
          <div className="relative pl-6 h-14 w-[100%]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색어 입력"
              className="w-[100%] h-[100%] border-b"
            />
            <div className={`absolute right-0 top-5 pr-3`}>
              <FaMagnifyingGlass
                className={` ${TwosomeTwFontSizes["fontSize-20px"]} `}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NoticeInput;
