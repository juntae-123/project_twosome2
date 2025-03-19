import FranchiseSection from "./Main/MainSectionFranchise/page";
import NewsSection from "./Main/MainSectionNews/page";
import SupportSection from "./Main/MainSectionSupport/page";

const MainBtmPage = () => {
  return (
    <section>
      <SupportSection />
      <FranchiseSection />
      <NewsSection />
    </section>
  );
};

export default MainBtmPage;
