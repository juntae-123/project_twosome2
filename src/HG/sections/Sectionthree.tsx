import { Imagegather, ImageMap } from "../ts/Image";

type sectiononeProps = {
  img: Imagegather;
};

const Sectionthree = ({ img }: sectiononeProps) => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${ImageMap[img]})` }}
    >
      <div className="relative flex flex-col justify-center px-12 text-left max-w-[1312px] w-full h-[934px] mx-auto pt-28">
        <h1 className="text-8xl font-black after:content-[''] after:inline-block after:w-[20px] after:h-[20px] after:bg-red-500 mb-16">
          에이리스트
        </h1>
        <p className="text-[32px] font-extrabold mb-10">
          TWOSOME
          <br />
          IN YOUR MUG, A LIST
        </p>
        <p className="text-[24px] mb-4 font-bold">
          언제 어디서나 여유롭게 즐기는 에이리스트
        </p>
        <p className="text-[18px] font-medium ">
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
