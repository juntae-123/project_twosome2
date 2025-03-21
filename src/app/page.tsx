<<<<<<< HEAD
<<<<<<< HEAD
"use client";
<<<<<<< HEAD

import Pagemain from "@/HG/components/Pagemain";
=======
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
>>>>>>> dfa6a3c666bae019b0e66ea8b49bf95300bd19d3

import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
import Link from "next/link";
<<<<<<< HEAD

=======
=======
import Pagemain from "@/HG/components/Pagemain";
>>>>>>> origin/hg
>>>>>>> dfa6a3c666bae019b0e66ea8b49bf95300bd19d3
import AdminPage from "./admin/admin";
import MainBtmPage from "@/ES/page";
import SupportSection from "@/ES/Main/MainSectionSupport/page";

<<<<<<< HEAD
// interface MenuItem {
//   id: string;
//   ename: string;
//   pricename: string;
//   explanation: string;
//   imgurl: string;
// }

=======
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
>>>>>>> dfa6a3c666bae019b0e66ea8b49bf95300bd19d3
export default function Home() {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dfa6a3c666bae019b0e66ea8b49bf95300bd19d3
    <div>
      {/* <Pagemain /> */}
      <SupportSection />
      <AdminPage />
    </div>
<<<<<<< HEAD
=======
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
>>>>>>> dfa6a3c666bae019b0e66ea8b49bf95300bd19d3
  );
=======
  return <></>;
>>>>>>> origin/my-LHB
}
