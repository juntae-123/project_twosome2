import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Sectiononeswiper from "@/app/HG/sections/Sectiononeswiper";
import Sectionthree from "@/app/HG/sections/Sectionthree";
import Sectiontwo from "@/app/HG/sections/Sectiontwo";
import SupportSection from "@/app/ES/Main/MainSectionSupport/page";
import FranchiseSection from "@/app/ES/Main/MainSectionFranchise/page";
import NewsSection from "@/app/ES/Main/MainSectionNews/page";
gsap.registerPlugin(ScrollTrigger);

const Pagemain = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  // Lenis 부드러운 스크롤
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // ScrollTrigger Pin 설정
  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    sectionRefs.current.forEach((el) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "top top",
        pin: true,
        pinSpacing: true,
      });
    });
  }, []);

  // 휠 이벤트 감지하여 1px 스크롤 시 섹션 전환
  useEffect(() => {
    if (!lenisRef.current) return;

    const scrollToSection = (index: number) => {
      const section = sectionRefs.current[index];
      if (!section) return;

      lenisRef.current!.scrollTo(section);
      currentIndex.current = index;
      isScrolling.current = true;

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // lenis duration
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      const direction = Math.sign(e.deltaY);
      if (direction === 0) return;

      const next = currentIndex.current + direction;

      if (next < 0 || next >= sectionRefs.current.length) return;

      scrollToSection(next);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main className="w-full">
      <section
        ref={(el) => {
          if (el) sectionRefs.current[0] = el;
        }}
        className="h-screen"
      >
        <Sectiononeswiper />
      </section>

      <section
        ref={(el) => {
          if (el) sectionRefs.current[1] = el;
        }}
        className="h-screen"
      >
        <Sectiontwo />
      </section>

      <section
        ref={(el) => {
          if (el) sectionRefs.current[2] = el;
        }}
        className="h-screen"
      >
        <Sectionthree img="sectionthree1" />
      </section>

      <section
        ref={(el) => {
          if (el) sectionRefs.current[3] = el;
        }}
        className="h-screen"
      >
        <SupportSection />
      </section>
      <section
        ref={(el) => {
          if (el) sectionRefs.current[4] = el;
        }}
        className="h-screen"
      >
        <FranchiseSection />
      </section>
      <section
        ref={(el) => {
          if (el) sectionRefs.current[5] = el;
        }}
        className="h-screen"
      >
        <NewsSection />
      </section>
    </main>
  );
};
export default Pagemain;
