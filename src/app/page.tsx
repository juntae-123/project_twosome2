<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
"use client";
<<<<<<< HEAD
<<<<<<< HEAD
=======
"use client";
>>>>>>> PJT
=======
import BrandPage from "@/HB/components/pageBrand/page";
import PageDel from "@/HB/components/pageDel/page";
import PageDesert from "@/HB/components/pageDesert/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
<<<<<<< HEAD
import PageNotice from "@/HB/components/pageNotice/page";

import Link from "next/link";
>>>>>>> origin/my-LHB
=======
import Footer from "@/ES/Footer/page";
import FranchiseSection from "@/ES/Main/MainSectionFranchise/page";
import NewsSection from "@/ES/Main/MainSectionNews/page";
import SupportSection from "@/ES/Main/MainSectionSupport/page";
>>>>>>> origin/ES
=======

import Pagemain from "@/HG/components/Pagemain";
>>>>>>> 9bb6444b564a39338100d1e75f5bf77560e4d6f9

import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
import Link from "next/link";
<<<<<<< HEAD
=======
import Pagemain from "@/HG/components/Pagemain";
>>>>>>> origin/hg
import AdminPage from "./admin/admin";
import MainBtmPage from "@/ES/page";

<<<<<<< HEAD
interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

=======
>>>>>>> origin/hg
=======

import AdminPage from "./admin/admin";
import MainBtmPage from "@/ES/page";
import SupportSection from "@/ES/Main/MainSectionSupport/page";

// interface MenuItem {
//   id: string;
//   ename: string;
//   pricename: string;
//   explanation: string;
//   imgurl: string;
// }
=======
import NoticeInpPage from "@/HB/components/pageNotice/[id]/page";
import PageNotice from "@/HB/components/pageNotice/page";
>>>>>>> origin/my-LHB

<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Pagemain from "@/HG/components/Pagemain";
import AdminPage from "./admin/admin";
import LoginPage from "./login/LoginPage";
import PageDesert from "@/HB/components/pageDesert/page";
import Sectiontwo from "@/HG/sections/Sectiontwo";

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

export default function Home() {
<<<<<<< HEAD
  return (
    <>
      <div>
        {/* <AdminPage />
        <LoginPage></LoginPage> */}
        <Sectiontwo />
      </div>

      <>
        {/* <Pagemain /> */}
        {/* <PageDesert></PageDesert> */}
      </>
    </>
=======
import Pagemain from "@/app/HG/components/Pagemain";
>>>>>>> PJT

>>>>>>> 9bb6444b564a39338100d1e75f5bf77560e4d6f9
export default function Home() {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
      <MainBtmPage />
      <AdminPage />
    </div>
=======
    <>
      <Pagemain />
      <AdminPage />
    </>
>>>>>>> origin/hg
=======
  return (
    <>
      <SupportSection />
      <FranchiseSection />
      <NewsSection />
      <Footer />
    </>
>>>>>>> origin/ES
=======
    <div>
      <Pagemain />
    </div>
<<<<<<< HEAD
>>>>>>> 9bb6444b564a39338100d1e75f5bf77560e4d6f9
=======
>>>>>>> origin/hg
>>>>>>> PJT
  );
=======
  return <></>;
>>>>>>> origin/my-LHB
=======
import MainBtmPage from "@/ES/page";

export default function Home() {
  return <MainBtmPage />;
<<<<<<< HEAD
>>>>>>> 8ab16e7dd1d8155ded74adf2bb86bc77f7a881ee
=======
>>>>>>> origin/main
>>>>>>> PJT
}
