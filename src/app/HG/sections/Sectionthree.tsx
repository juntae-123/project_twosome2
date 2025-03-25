import { Imagegather, ImageMap } from "../../../common/Image";

type sectiononeProps = {
  img: Imagegather;
};

const Sectionthree = ({ img }: sectiononeProps) => {
  return (
    <section
      className="w-full  h-170 md:h-200 lg:h-screen bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${ImageMap[img]})` }}
    >
      <div className="relative flex flex-col px-12 text-left max-w-[1312px] w-full h-[934px] mx-auto justify-center  ">
        <h1 className=" font-black after:content-[''] after:inline-block after:w-2 after:h-2  md:after:w-5 md:after:h-5 after:bg-red-500 mb-6   lg:mb-16 text-3xl md:text-6xl lg:text-8xl ">
          에이리스트
        </h1>
        <p className="  text-xl  md:text-2xl lg:text-3xl font-extrabold mb-10">
          TWOSOME
          <br />
          IN YOUR MUG, A LIST
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 font-bold">
          언제 어디서나 여유롭게 즐기는 에이리스트
        </p>
        <p className="text-xs lg:text-lg font-medium mb-70 md:mb-10">
          좋은 커피를 마셔야 비로소 하루가 시작되는 느낌이라면 하루에도 몇<br />
          번씩 그윽한 커피 향이 생각난다면 마음속 우선순위에 언제나 커피가
          <br />
          있는 당신이라면 잊지 말고 챙겨야 할 단 하나의 리스트, 투썸플레이스
          <br />
          에이리스트.
        </p>
      </div>
    </section>
  );
};

export default Sectionthree;
