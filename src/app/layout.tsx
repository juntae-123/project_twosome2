"use client";

import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

import "../common/swiper-overrides.css";

import Header from "@/header/Header";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"], // 또는 ['latin', 'korean']
  weight: ["700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

// 클라이언트 컴포넌트 선언 필요
export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHB = pathname?.startsWith("/HB");
  const islog = pathname?.startsWith("/log");
  const isadmin = pathname?.startsWith("/admin");

  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable}`}
      >
        {!isHB && !islog && !isadmin && (
          <header className="flex justify-between items-center fixed top-0 left-0 w-[1920px] h-[100px] z-30">
            <Header button="logomenu" />
          </header>
        )}

        {children}

        {!isHB && !islog && !isadmin && <div style={{ margin: "0" }}></div>}
      </body>
    </html>
  );
}
