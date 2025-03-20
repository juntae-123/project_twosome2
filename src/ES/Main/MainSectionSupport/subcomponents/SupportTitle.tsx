import Title from "@/ES/common/Title";

const SupportTitle = () => {
  return (
    <div className="w-full max-w-[1312px] absolute top-[20%] left-[16%] z-10 max-md:top-[8%] max-md:left-[6%]">
      <Title title={"BRAND"} ismore={false} />
      <Title title={"SUPPORT"} ismore={true} />
    </div>
  );
};

export default SupportTitle;
