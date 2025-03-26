"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TwosomeColors } from "@/common/styles";

// GSAP 플러그인 등록
gsap.registerPlugin(MotionPathPlugin);

const BlackCard = () => {
  const rectRefs = useRef<HTMLDivElement[]>([]); // 여러 개의 요소를 배열로 관리
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (rectRefs.current.length > 0 && pathRef.current) {
      gsap.to(rectRefs.current, {
        duration: 2.5, // 더 빠르게 (기존 3초 → 2.5초)
        repeat: Infinity,
        repeatDelay: 0.5, // 반복 간격을 짧게
        ease: "power2.inOut", // 부드러운 가속 및 감속 추가
        stagger: 0.2, // 스태거 효과 추가 (각 요소가 0.2초 간격으로 시작)
        keyframes: [
          { opacity: 1 }, // 시작 상태 (완전히 보임)
          { opacity: 0.3 }, // 중간 상태 (반투명)
          { opacity: 1 }, // 마지막 상태 (다시 완전히 보임)
        ],
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: false, // 직사각형이므로 자동 회전 비활성화
          alignOrigin: [0.5, 0.5],
        },
      });
    }
  }, []);

  return (
    <>
      <div
        className=" h-60 py-10  md:px-17 md:py-18 md:h-80 md:gap-0"
        style={{
          maxWidth: "1216px",
          width: "100%",

          backgroundColor: TwosomeColors["color-black"],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          position: "relative",
          overflow: "hidden",
        }}
      >
        <dt
          style={{
            fontSize: "18px",
            fontWeight: 800,
            color: TwosomeColors["color-red"],
            marginBottom: "32px",
          }}
          className="whitespace-nowrap"
        >
          중장기 전략목표
        </dt>
        <dd
          className="text-lg md:text-2xl whitespace-nowrap"
          style={{
            color: TwosomeColors["color-white"],

            fontWeight: "bold",
            display: "flex",
            marginBottom: "16px",
          }}
        >
          장단기 목표 동시 달성을 통한 &nbsp;
          <p className="underline"> 독보적 국내 1위</p>
        </dd>
        <strong
          className="text-2xl md:text-5xl  whitespace-nowrap"
          style={{ color: TwosomeColors["color-white"] }}
        >
          Win Now, Win 2025!
        </strong>
        {/* SVG 경로 */}
        <svg
          width="1216"
          height="400" // 높이를 더 크게 설정하여 짤림 방지
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        >
          <path
            ref={pathRef}
            d="M0,300 C400,-200 800,700 1216,50"
            fill="none"
            stroke="rgba(0, 0, 0, 0.5)" // 더 강조된 핑크 계열 반투명 선
            strokeWidth="4"
          />
        </svg>
        {/* 애니메이션 적용 대상 (흰색 작은 직사각형) */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) rectRefs.current[i] = el;
            }}
            style={{
              width: 6,
              height: 6,
              backgroundColor: TwosomeColors["color-white"],
              position: "absolute",
              // 원 형태로 변경하여 더욱 부드럽게
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BlackCard;
