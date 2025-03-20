import Link from "next/link";
import { Imagegather, ImageMap } from "../Image";

type HeaderProps = {
  img: Imagegather;
  button: Imagegather;
};

const Header = ({ img, button }: HeaderProps) => {
  return (
    <>
      <header className="flex justify-center items-center w-screen h-full px-10">
        <div className="flex items-center w-screen h-full justify-between">
          <a href="https://www.twosome.co.kr/main.do">
            <img className="h-[30px] w-[216px]" src={ImageMap[img]} alt="" />
          </a>
          <ul className="flex flex-row gap-10 text-lg text-white font-bold ">
            <Link href="/HB/componets/pageIntro">투썸플레이스 소개</Link>
            <Link href="/HB/componets/pageMenu">메뉴이야기</Link>
            <Link href="/HB/componets/pageBrand">브랜드 지원</Link>
            {/* 서브 컴포넌트 페이지별로 분리해야함 */}
            <Link href="/JT/componets/subcomponets">
              투썸플레이스 앱 & 멤버십
            </Link>
            <Link href="/JT/componets/subcomponets">가맹점 창업안내</Link>
            <Link href="/JT/componets/subcomponets">새소식 & 공지</Link>
          </ul>
          <div className="flex gap-10">
            <button className="border border-white rounded-3xl px-8 py-1 text-white ml-12">
              English
            </button>
            <button>
              <img src={ImageMap[button]} alt="" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
