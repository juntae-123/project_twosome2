import { useEffect, useState } from "react";

const useLoopScroll = () => {
  // setInterval로 16ms마다 가로위치(offsetX)를 -1씩 줄여서 왼쪽으로 이동시키기
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetX((prev) => {
        const newOffset = prev - 1;
        return newOffset <= -window.innerWidth ? 0 : newOffset;
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return offsetX;
};

export default useLoopScroll;
