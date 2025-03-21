<<<<<<< HEAD
"use client";
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

import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
import Link from "next/link";
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
export default function Home() {
<<<<<<< HEAD
  return (
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
  );
=======
  return <></>;
>>>>>>> origin/my-LHB
}
