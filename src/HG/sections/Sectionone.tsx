import { Imagegather, ImageMap } from "../ts/Image";

type sectiononeProps = {
  img: Imagegather;
};

const Sectionone = ({ img }: sectiononeProps) => {
  return (
    <section
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${ImageMap[img]})` }}
    ></section>
  );
};

export default Sectionone;
