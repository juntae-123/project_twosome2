"use client";

import Pagemain from "@/HG/components/Pagemain";

import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
import Link from "next/link";

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

export default function Home() {
  return (
    <div>
      {/* <Pagemain /> */}
      <SupportSection />
      <AdminPage />
    </div>
  );
}
