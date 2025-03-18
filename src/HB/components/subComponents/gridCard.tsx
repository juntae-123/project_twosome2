import { TwosomeFontSizes } from "@/common/styles";

const GridCard = () => {
  return (
    <>
      <div
        style={{ marginTop: "100px" }}
        className="grid grid-cols-3 grid-rows-1 gap-4 max-w-[1312px] mx-auto"
      >
        <div
          style={{ padding: "48px 32px", border: "1px solid #d6d6d6" }}
          className=" flex items-center flex-col h-96  gap-8"
        >
          <img
            src="https://www.twosome.co.kr/resources/images/icon/ico_value_1.svg"
            alt=""
          />
          <p
            className="font-bold mt-3.5"
            style={{ fontSize: TwosomeFontSizes["fontSize-24px"] }}
          >
            Customer centric
          </p>

          <p
            style={{ fontSize: TwosomeFontSizes["fontSize-18px"] }}
            className="text-center mt-3.5"
          >
            고객중심
          </p>
        </div>
        <div
          style={{ padding: "48px 32px", border: "1px solid #d6d6d6" }}
          className=" flex items-center flex-col h-96 gap-8"
        >
          <img
            src="https://www.twosome.co.kr/resources/images/icon/ico_value_2.svg"
            alt=""
          />
          <p
            className="font-bold mt-3.5"
            style={{ fontSize: TwosomeFontSizes["fontSize-24px"] }}
          >
            Intelligence driven
          </p>

          <p
            style={{ fontSize: TwosomeFontSizes["fontSize-18px"] }}
            className="text-center mt-3.5"
          >
            정보기반
          </p>
        </div>
        <div
          style={{ padding: "48px 32px", border: "1px solid #d6d6d6" }}
          className=" flex items-center flex-col h-96  gap-8"
        >
          <img
            src="https://www.twosome.co.kr/resources/images/icon/ico_value_3.svg"
            alt=""
          />
          <p
            className="font-bold mt-3.5"
            style={{ fontSize: TwosomeFontSizes["fontSize-24px"] }}
          >
            Operational excellence
          </p>

          <p
            style={{ fontSize: TwosomeFontSizes["fontSize-18px"] }}
            className="text-center mt-3.5"
          >
            운영탁월성
          </p>
        </div>
      </div>
    </>
  );
};

export default GridCard;
