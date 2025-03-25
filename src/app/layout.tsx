import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

import AuthStatus from "./login/AuthStatus";
import LoginPage from "./login/LoginPage";
import SignupPage from "./login/signup";
<<<<<<< HEAD
import Pagemain from "@/HG/components/Pagemain";
import "../common/swiper-overrides.css";
import AdminPage from "./admin/admin";
import Sectiontwo from "@/HG/sections/Sectiontwo";
import Sectionone from "@/HG/sections/Sectionone";
=======
import Header from "@/header/Header";
import Footer from "./ES/Footer/page";
>>>>>>> origin/hg

// 폰트 설정
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable}`}
      >
        <header className="flex justify-center items-center fixed top-0 left-0 w-[1920px] h-[100px] z-30">
          <Header img="logowhite" button="logomenu" />
        </header>

        {children}

        <Sectionone img="..." />
        <Sectiontwo />

        <Footer />
=======
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="flex justify-between items-center fixed top-0 left-0 w-[1920px] h-[100px] z-30">
          <Header button="logomenu" />
        </header>
        {children}
        <div style={{ margin: "0" }}>
          <Footer />
        </div>
>>>>>>> origin/hg
      </body>
    </html>
  );
}
