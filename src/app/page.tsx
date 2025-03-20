import MainBtmPage from "@/ES/page";
import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
import Sectionthree from "@/HG/sections/Sectionthree";
import Sectiontwo from "@/HG/sections/Sectiontwo";

export default function Home() {
  return (
    <>
      <Sectiononeswiper />

      <Sectiontwo />

      <Sectionthree img="sectionthree1" />

      <MainBtmPage />
    </>
  );
}
