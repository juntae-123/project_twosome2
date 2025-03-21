import Footer from "@/ES/Footer/page";
import FranchiseSection from "@/ES/Main/MainSectionFranchise/page";
import NewsSection from "@/ES/Main/MainSectionNews/page";
import SupportSection from "@/ES/Main/MainSectionSupport/page";

export default function Home() {
  return (
    <>
      <SupportSection />
      <FranchiseSection />
      <NewsSection />
      <Footer />
    </>
  );
}
