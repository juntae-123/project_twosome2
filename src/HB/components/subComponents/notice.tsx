import React, { useState, useMemo } from "react";
import { Data } from "./data";
import { TwosomeTwFontSizes } from "@/common/tailstyles";
import { BsArrowRight } from "react-icons/bs";

const ITEMS_PER_PAGE = 10;

interface NoticeTextProps {
  searchTerm: string;
}

const NoticeText: React.FC<NoticeTextProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredData = useMemo(() => {
    return Data.filter((item) =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => b.date.localeCompare(a.date));
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const currentData = useMemo(() => {
    return filteredData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredData, currentPage]);

  return (
    <div className="flex flex-col max-w-[1216px]">
      {currentData.length > 0 ? (
        currentData.map((v, i) => (
          <div
            key={i}
            className="flex items-center justify-between h-[116px] border-b border-[#ebebeb]"
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center">
              <div
                className={`${TwosomeTwFontSizes["fontSize-14px"]} font-bold px-8`}
              >
                {(currentPage - 1) * ITEMS_PER_PAGE + i + 1}
              </div>
              <div
                className={`${TwosomeTwFontSizes["fontSize-24px"]} font-medium`}
              >
                {v.text}
              </div>

              <div
                className={`${
                  TwosomeTwFontSizes["fontSize-32px"]
                } ml-10 transition-opacity duration-300 ${
                  hoveredItem === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <BsArrowRight />
              </div>
            </div>
            <div
              className={`${TwosomeTwFontSizes["fontSize-14px"]} font-normal pr-8`}
            >
              {v.date}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">검색 결과가 없습니다.</p>
      )}

      {/* 페이지네이션 버튼 */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-40">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-4 py-2 border rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticeText;
