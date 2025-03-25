import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Footer from "@/ES/Footer/page";
import Header from "@/HG/header/Header";
import AuthStatus from "./login/AuthStatus";
import LoginPage from "./login/LoginPage";
import SignupPage from "./login/signup";
import Pagemain from "@/HG/components/Pagemain";
import "../common/swiper-overrides.css";
import AdminPage from "./admin/admin";
import Sectiontwo from "@/HG/sections/Sectiontwo";
import Sectionone from "@/HG/sections/Sectionone";

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
      </body>
    </html>
  );
}
