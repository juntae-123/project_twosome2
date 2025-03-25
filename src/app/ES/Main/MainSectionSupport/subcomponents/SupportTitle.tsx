import Title from "@/app/ES/common/Title";

const SupportTitle = () => {
  return (
    <div className="relative z-10 max-md:top-0 max-md:left-[6%]">
      <Title title={"BRAND"} ismore={false} />
      <Title title={"SUPPORT"} ismore={true} />
    </div>
  );
};

export default SupportTitle;
