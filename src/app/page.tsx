"use client";
<<<<<<< HEAD

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
}
