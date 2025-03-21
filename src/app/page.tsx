"use client";

import React, { useEffect, useState } from "react";

import AdminPage from "./admin/admin";
import Pagemain from "@/app/HG/components/Pagemain";

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

export default function Home() {
  return (
    <div>
      <Pagemain />
    </div>
  );
}
