// "use client";

// import MainBtmPage from "@/ES/page";
// import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
// import Sectionthree from "@/HG/sections/Sectionthree";
// import Sectiontwo from "@/HG/sections/Sectiontwo";

// export default function Home() {
//   return (
//     <>
//       <Sectiononeswiper />
//       <Sectiontwo />
//       <Sectionthree img={"sectionthree1"} />
//       <MainBtmPage />
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import MainBtmPage from "@/ES/page";
// import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
// import Sectionthree from "@/HG/sections/Sectionthree";
// import Sectiontwo from "@/HG/sections/Sectiontwo";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const sectionRefs = useRef<HTMLElement[]>([]);

//   useEffect(() => {
//     // 기존 ScrollTrigger 제거
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//     sectionRefs.current.forEach((el) => {
//       if (!el) return;

//       ScrollTrigger.create({
//         trigger: el,
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         pinSpacing: true,
//         scrub: true,
//         // markers: true, // 디버깅용
//       });
//     });
//   }, []);

//   return (
//     <>
//       <section
//         ref={(el) => {
//           if (el) sectionRefs.current[0] = el;
//         }}
//         className="w-full h-screen"
//       >
//         <Sectiononeswiper />
//       </section>

//       <section
//         ref={(el) => {
//           if (el) sectionRefs.current[1] = el;
//         }}
//         className="w-full h-screen"
//       >
//         <Sectiontwo />
//       </section>

//       <section
//         ref={(el) => {
//           if (el) sectionRefs.current[2] = el;
//         }}
//         className="w-full h-screen"
//       >
//         <Sectionthree img={"sectionthree1"} />
//       </section>

//       <section
//         ref={(el) => {
//           if (el) sectionRefs.current[3] = el;
//         }}
//         className="w-full h-screen"
//       >
//         <MainBtmPage />
//       </section>
//     </>
//   );
// }
"use client";
import Pagemain from "@/HG/components/Pagemain";

export default function Home() {
  return (
    <>
      <Pagemain />
    </>
  );
}
