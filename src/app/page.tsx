<<<<<<< HEAD
<<<<<<< HEAD
"use client";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import BrandPage from "@/HB/components/pageBrand/page";
import PageDel from "@/HB/components/pageDel/page";
import PageDesert from "@/HB/components/pageDesert/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
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
      {/* <Pagemain /> */}
      <SupportSection />
      <AdminPage />
    </div>
>>>>>>> 9bb6444b564a39338100d1e75f5bf77560e4d6f9
  );
=======
  return <></>;
>>>>>>> origin/my-LHB
}
