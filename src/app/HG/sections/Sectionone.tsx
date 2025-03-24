import { Imagegather, ImageMap } from "../../../common/Image";

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
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></picture>
  );
};

export default Sectionone;
