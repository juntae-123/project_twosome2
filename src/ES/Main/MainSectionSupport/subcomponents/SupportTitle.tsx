import Title from "@/ES/common/Title";

const SupportTitle = () => {
  return (
    <div className="w-full max-w-[1312px] absolute top-[20%] left-[16%] z-10 ">
      <Title title={"BRAND"} ismore={false} />
      <Title title={"SUPPORT"} ismore={true} />
    </div>
  );
};

export default SupportTitle;
