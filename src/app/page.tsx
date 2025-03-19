<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return <></>;
=======
"use client";
import Franchise from "@/JT/components/subcomponents/franchise";
import FranchiseBanner from "@/JT/components/subcomponents/slides";
import Twosomeall from "@/JT/twosomeall";

export default function Home() {
  return (
    <>
      <Franchise />
    </>
  );
>>>>>>> origin/PJT
=======
import MainBtmPage from "@/ES/page";

export default function Home() {
  return (
    <>
      <MainBtmPage />
    </>
  );
>>>>>>> origin/ES
=======
import BrandPage from "@/HB/components/pageBrand/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
import PageNotice from "@/HB/components/pageNotice/page";
import NoticeText from "@/HB/components/subComponents/notice";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-100">
        <Pagevision></Pagevision>
        <PageStory></PageStory>
        <BrandPage></BrandPage>
        <PageNotice></PageNotice>
      </div>
    </>
  );
>>>>>>> origin/my-LHB
}
