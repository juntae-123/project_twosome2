import BrandPage from "@/HB/components/pageBrand/page";
import PageDel from "@/HB/components/pageDel/page";
import PageDesert from "@/HB/components/pageDesert/page";
import Pagevision from "@/HB/components/pageIntro/page";
import PageStory from "@/HB/components/pageMenu/page";
import PageNotice from "@/HB/components/pageNotice/page";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex felx-col gap-50">
        <PageDel></PageDel>
        <PageDesert></PageDesert>
        <PageStory></PageStory>
      </div>
    </>
  );
}
