type TitleProps = {
  title: string;
  ismore: boolean;
};
const Title = ({ title, ismore }: TitleProps) => {
  return (
    <div className={`text-8xl font-extrabold max-md:text-[32px]`}>
      <span>{title}</span>
      <span
        className={`w-[20px] h-[20px] bg-[#d50037] ${
          ismore ? "inline-block" : "none"
        } max-md:w-[8px] max-md:h-[8px]`}
      ></span>
    </div>
  );
};

export default Title;
