"use client";

import { Imagegather, ImageMap } from "@/common/Image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  button: Imagegather;
};

const Header = ({ button }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-10 transition-colors duration-300 ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between h-20">
        <a href="https://www.twosome.co.kr/main.do">
          <img
            className="h-[30px] w-[216px] transition duration-300"
            src={
              isScrolled
                ? "https://www.twosome.co.kr/resources/images/common/logo_black_.svg"
                : "https://www.twosome.co.kr/resources/images/common/logo_white_.svg"
            }
            alt="투썸 로고"
          />
        </a>

        <ul className="flex hidden gap-10 whitespace-nowrap text-lg font-bold 2xl:flex ">
          <Link href="/HB/componets/pageIntro">투썸플레이스 소개</Link>
          <Link href="/HB/componets/pageMenu">메뉴이야기</Link>
          <Link href="/HB/componets/pageBrand">브랜드 지원</Link>
          <Link href="/JT/componets/subcomponets">
            투썸플레이스 앱 & 멤버십
          </Link>
          <Link href="/JT/componets/subcomponets">가맹점 창업안내</Link>
          <Link href="/JT/componets/subcomponets">새소식 & 공지</Link>
        </ul>

        <div className="flex gap-10 items-center">
          <button className="border rounded-3xl px-8 py-1  transition-colors duration-300">
            English
          </button>
          <button>
            <img
              className="h-6 w-6 mr-3"
              src={ImageMap[button]}
              alt="메뉴 버튼"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
