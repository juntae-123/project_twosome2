"use client";

import { NoticeData } from "../../data/data";
import { useParams } from "next/navigation";
import Title from "../../subComponents/title";

const NoticeInpPage = () => {
  const params = useParams();
  const id = Number(params.id); // ← 여기 수정됨

  const notice = NoticeData.find((v) => v.id === id);

  if (!notice) return <div>해당 공지사항을 찾을 수 없습니다.</div>;

  return (
    <div className=" w-[1212px]  mx-auto   flex flex-col gap-10 items-start mb-100">
      <Title text="공지사항" />
      <h1 className="text-4xl font-bold mt-4 mb">{notice.text}</h1>
      <p className="text-base whitespace-pre-wrap">{notice.date}</p>
      <hr className="border-[#ebebeb]  w-[100%] mb-20" />
      <p className="leading-loose	 whitespace-pre-wrap text-xl">
        {notice.detail}
      </p>
    </div>
  );
};

export default NoticeInpPage;
