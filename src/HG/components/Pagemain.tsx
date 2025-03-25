"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

import Sectiononeswiper from "@/HG/sections/Sectiononeswiper";
import Sectionthree from "@/HG/sections/Sectionthree";
import Sectiontwo from "@/HG/sections/Sectiontwo";
import SupportSection from "@/ES/Main/MainSectionSupport/page";
import FranchiseSection from "@/ES/Main/MainSectionFranchise/page";
import NewsSection from "@/ES/Main/MainSectionNews/page";

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

export default PageMain;
