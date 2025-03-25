<<<<<<< HEAD
"use client";
=======
import BrandPage from "@/HB/components/pageBrand/page";
import PageDel from "@/HB/components/pageDel/page";
import PageDesert from "@/HB/components/pageDesert/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
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

export default function Home() {
  return (
    <div>
      <Pagemain />
    </div>
>>>>>>> origin/hg
  );
=======
  return <></>;
>>>>>>> origin/my-LHB
}
