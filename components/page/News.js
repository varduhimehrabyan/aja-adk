import React, { useEffect } from "react";
import Image from "next/image";
import NewsSingle from "../global/NewsSingle";
import AOS from "aos";
import "aos/dist/aos.css";

export default function News() {
      useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="relative bg-sectionBg md:pr-[2.625rem] md:pl-[3.875rem]">
      <div className="hidden md:flex justify-end">
        <Image
          src="/images/news-bg.png"
          width={1124}
          height={725}
          alt="work-bg"
        />
      </div>
      <div className="flex justify-end md:hidden mx-auto">
        <Image
          src="/images/news-bg-mb.png"
          width={325}
          height={238}
          alt="work-bg"
        />
      </div>
      <div className="flex justify-center md:justify-between -mt-[10.875rem] pb-[1.688rem] md:-mt-[23.875rem] md:pb-[5rem]" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-top">
        {[...Array(1)].map((item, key) => (
          <NewsSingle key={key} />
        ))}
      </div>
    </div>
  );
}
