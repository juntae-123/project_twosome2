import { Imagegather, ImageMap } from "../Image";

type sectiononeProps = {
  img: Imagegather;
};

const Sectionone = ({ img }: sectiononeProps) => {
  return (
    <picture
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${ImageMap[img]})`,
        backgroundRepeat: "no-repeat",
      }}
    ></picture>
  );
};

export default Sectionone;
