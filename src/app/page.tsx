"use client";

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
  );
}
