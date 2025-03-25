import Title from "@/app/ES/common/Title";

const NewsTitle = () => {
  return (
    <div>
      <Title title={"NEWS"} ismore={false} />
      <Title title={"&NOTICE"} ismore={true} />
    </div>
  );
};

export default NewsTitle;
