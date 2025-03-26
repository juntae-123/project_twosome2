"use client";
import { TwosomeColors, TwosomeFontSizes } from "@/common/styles";
import Link from "next/link";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 관리

  const togglemenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const NoticeTitle = text == "공지사항" || "비전체계";

  return (
    <>
      <div className=" mt-30  hidden md:flex">
        <p
          style={{
            color: TwosomeColors["color-gray"],
            fontSize: TwosomeFontSizes["fontSize-14px"],
            paddingLeft: 7,
          }}
        >
          홈 ·&nbsp;
        </p>
        <div className="relative ">
          <p
            style={{
              color: TwosomeColors["color-red"],
              fontSize: TwosomeFontSizes["fontSize-14px"],
            }}
            className=" cursor-pointer   items-center font-bold  hidden md:flex "
            onClick={togglemenu}
          >
            {text == "커피이야기"
              ? "메뉴이야기"
              : text == "어썸 페어링 플랜트"
              ? "브랜드 지원"
              : text == "공지사항"
              ? "새소식&공지"
              : text}
            <GoChevronDown />
          </p>

          {(text == "커피이야기" ||
            text == "델리이야기" ||
            text == "디저트이야기") &&
            isMenuOpen && (
              <ul
                className="bg-white absolute top-7 text-sm border border-[#ccc] z-0 cursor-pointer
          "
              >
                <Link href="./pageMenu">
                  <li
                    style={{
                      color: text == "커피이야기" ? "#d50037" : "black",
                    }}
                    className=" w-27 p-2"
                  >
                    메뉴이야기
                  </li>
                </Link>
                <Link href="./pageDesert">
                  <li
                    style={{
                      color: text == "디저트이야기" ? "#d50037" : "black",
                    }}
                    className=" w-27 p-2 "
                  >
                    디저트이야기
                  </li>
                </Link>
                <Link href="./pageDel">
                  <li
                    style={{
                      color: text == "델리이야기" ? "#d50037" : "black",
                    }}
                    className="  w-27 p-2"
                  >
                    델리이야기
                  </li>
                </Link>
              </ul>
            )}
        </div>
      </div>
      <h1
        className={` mt-25 md:mt-14 font-bold ${
          NoticeTitle ? "text-4xl md:text-7xl" : "text-7xl"
        }`}
      >
        {text}
      </h1>
    </>
  );
};

export default Title;
