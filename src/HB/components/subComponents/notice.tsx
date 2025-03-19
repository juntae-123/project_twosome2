import React, { useState } from "react";
import { Data } from "./data";
import { TwosomeTwFontSizes } from "@/common/tailstyles";

import { BsArrowRight } from "react-icons/bs";

const ITEMS_PER_PAGE = 10;

const NoticeText = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null); // 개별 hover 상태 관리

  const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);

  const currentData = Data.sort((a, b) => b.date.localeCompare(a.date)).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col max-w-[1216px]">
      {currentData.map((v, i) => (
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
              className={`${TwosomeTwFontSizes["fontSize-32px"]} ml-10  ${
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
      ))}

      {/* 페이지네이션 버튼 */}
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
    </div>
  );
};

export default NoticeText;
