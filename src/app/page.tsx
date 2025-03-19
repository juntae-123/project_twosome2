import MainBtmPage from "@/ES/page";
import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
import Sectionthree from "@/HG/sections/Sectionthree";
import Sectiontwo from "@/HG/sections/Sectiontwo";

export default function Home() {
  return (
    <>
      <Sectiononeswiper />

      <section>
        <Sectiontwo />
      </section>
      <section>
        <Sectionthree img="sectionthree1" />
      </section>

      <MainBtmPage />
    </>
  );
}
