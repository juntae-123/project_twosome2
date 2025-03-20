import BrandPage from "@/HB/components/pageBrand/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
import PageNotice from "@/HB/components/pageNotice/page";
import NoticeText from "@/HB/components/subComponents/notice";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageNotice></PageNotice>
      <BrandPage></BrandPage>
      <Pagevision></Pagevision>
      <PageStory></PageStory>
    </>
  );
}
