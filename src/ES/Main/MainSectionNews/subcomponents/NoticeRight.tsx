import Noticebox from "./noticecomponents/Noticebox";

const NoticeRight = () => {
  return (
    <ul>
      <Noticebox title="투썸플레이스 이용약관 개정 안내" date="2025-03-07" />
      <Noticebox title="투썸플레이스 멤버십 정책 변경 안내" date="2023-06-01" />
      <Noticebox
        title="투썸플레이스 음료 열량 및 알레르기 유발 성분"
        date="2023-06-01"
      />
    </ul>
  );
};

export default NoticeRight;
