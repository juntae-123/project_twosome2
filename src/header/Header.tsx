"use client";

import { Imagegather, ImageMap } from "@/common/Image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  button: Imagegather;
};

const Header = ({ button }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateState = () => {
      setIsScrolled(window.scrollY > 100);
      setWindowWidth(window.innerWidth);
    };

    updateState(); // 초기 상태 반영
    window.addEventListener("scroll", updateState);
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const logoSrc =
    isScrolled && windowWidth >= 768
      ? "https://www.twosome.co.kr/resources/images/common/logo_black_.svg"
      : "https://www.twosome.co.kr/resources/images/common/logo_white_.svg";

  const logoSrc2 =
    isScrolled && windowWidth >= 768
      ? "https://www.twosome.co.kr/resources/images/icon/ico_24_allmenu_black.svg"
      : "https://www.twosome.co.kr/resources/images/icon/ico_24_allmenu_white.svg";

  return (
    <header
      className={`${
        isScrolled && windowWidth <= 768 ? "bg-black" : "bg-none"
      }   fixed top-0 left-0 z-50 w-full px-10 transition-colors duration-300 
      ${isScrolled ? "md:text-black text-white" : "text-white"}  `}
    >
      <div className="flex items-center justify-between h-20">
        <a href="https://www.twosome.co.kr/main.do">
          <img
            className="h-[30px] w-40  md:w-50 transition duration-300"
            src={logoSrc}
            alt="투썸 로고"
          />
        </a>

        <ul className="flex  hidden  gap-10 whitespace-nowrap text-lg font-bold 2xl:flex ">
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
          <button className="border rounded-3xl px-4 py-0 md:px-8 md:py-1 transition-colors duration-300">
            English
          </button>
          <button>
            <img className="h-6 w-6 mr-3" src={logoSrc2} alt="메뉴 버튼" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
