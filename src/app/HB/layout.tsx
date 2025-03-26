import Footer from "@/app/ES/Footer/page";

import HeaderSide from "@/header/HeaderSide";
import type { ReactNode } from "react";

export const metadata = {
  title: "투썸플레이스 - Premium Dessert Cafe A Twosome Place",
};

export default function HBLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* 고정 헤더 */}
      <header className="flex justify-between items-center fixed top-0 left-0 w-full h-[100px] z-30 bg-none">
        <HeaderSide />
      </header>

      <main className="pt-[100px] pb-[120px]">{children}</main>

      {/* 푸터 */}
      <Footer />
    </>
  );
}
