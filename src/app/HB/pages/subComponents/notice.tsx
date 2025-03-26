import React, { useState, useMemo, useEffect } from "react";
import { TwosomeTwFontSizes } from "@/common/tailstyles";
import { BsArrowRight } from "react-icons/bs";

import { NoticeData } from "../data/data";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

interface NoticeTextProps {
  searchQuery: string;
}

const NoticeText: React.FC<NoticeTextProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    // 초기 체크
    handleResize();

    // 리사이즈 이벤트 등록
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData = useMemo(() => {
    return NoticeData.filter((v) => v.text.includes(searchQuery)).sort((a, b) =>
      b.date.localeCompare(a.date)
    ); // 날짜 내림차순 정렬
  }, [searchQuery]); // searchQuery가 변경될 때만 필터링 수행

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
          <Link href={`/HB/pages/pageNotice/${v.id}`} key={v.id}>
            <div
              className="flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between h-[116px] border-b border-[#ebebeb]"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex  items-center">
                <div className={`text-sm font-bold px-8 hidden md:block`}>
                  {filteredData.length -
                    ((currentPage - 1) * ITEMS_PER_PAGE + i)}
                </div>
                <div
                  className={`text-lg md:text-2xl pl-10 md:pl-0 font-medium`}
                >
                  {v.text}
                </div>

                <div
                  className={`${
                    TwosomeTwFontSizes["fontSize-32px"]
                  } ml-10 transition-opacity duration-300 ${
                    hoveredItem === i && isWideScreen
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <BsArrowRight />
                </div>
              </div>
              <div className={`text-xs md:text-sm font-normal px-10`}>
                {v.date}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">검색 결과가 없습니다.</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-40">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`cursor-pointer   mx-1 px-4 py-2 border rounded ${
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
