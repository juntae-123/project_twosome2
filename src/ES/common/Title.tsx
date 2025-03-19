type TitleProps = {
  title: string;
  ismore: boolean;
};
const Title = ({ title, ismore }: TitleProps) => {
  return (
    <div className="text-8xl font-extrabold">
      <span>{title}</span>
      <span
        className={`w-[20px] h-[20px] bg-[#d50037] ${
          ismore ? "inline-block" : "none"
        }`}
      ></span>
    </div>
  );
};

export default Title;
