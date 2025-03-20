import BrandText from "../subComponents/brandText";
import Title from "../subComponents/title";

const BrandPage = () => {
  return (
    <>
      <div className="max-w-[1215px] mx-auto flex flex-col gap-10">
        <Title text="어썸 페어링 플랜트"></Title>
        <BrandText></BrandText>
      </div>
    </>
  );
};

export default BrandPage;
