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

const PageMain = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  // const lenisRef = useRef<Lenis | null>(null);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    currentIndex.current = index;
    isScrolling.current = true;

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

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
        scrub: true,
      });
    });
  }, []);

  useEffect(() => {
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
        id="section1"
        ref={(el) => {
          if (el) sectionRefs.current[0] = el;
        }}
        className="h-screen"
      >
        <Sectiononeswiper />
      </section>

      <section
        id="section2"
        ref={(el) => {
          if (el) sectionRefs.current[1] = el;
        }}
        className="h-screen"
      >
        <Sectiontwo />
      </section>

      <section
        id="section3"
        ref={(el) => {
          if (el) sectionRefs.current[2] = el;
        }}
        className="h-screen"
      >
        <Sectionthree img="sectionthree1" />
      </section>

      <section
        id="section4"
        ref={(el) => {
          if (el) sectionRefs.current[3] = el;
        }}
        className="h-screen"
      >
        <SupportSection />
      </section>

      <section
        id="section5"
        ref={(el) => {
          if (el) sectionRefs.current[4] = el;
        }}
        className="h-screen"
      >
        <FranchiseSection />
      </section>

      <section
        id="section6"
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

export default PageMain;
