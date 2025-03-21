"use client";

import React, { useEffect, useState } from "react";

import AdminPage from "./admin/admin";

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
      <AdminPage />
    </div>
  );
}
