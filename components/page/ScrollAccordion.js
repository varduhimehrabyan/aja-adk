import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollAccordion({ info }) {
  gsap.registerPlugin(ScrollTrigger);

  const [region, setRegion] = useState();

  useEffect(() => {
    setRegion(document.getElementsByClassName("region"));
  }, []);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".container",
        scrub: 0.3,
        start: "top 17% center",
        // end: "top -10%",
        // markers: true,
        pin: true,
      },
    })
    .to(region, {
      display: "block",
      duration: 1,
      ease: "none",
      stagger: {
        each: 2,
        yoyo: true,
        repeat: 1,
      },
    });

  return (
    <div className=" min-h-[1000px] container bg-about-bg overflow-hidden scroll-hide bg-no-repeat bg-cover h-fit px-4 py-[1.25rem] md:py-[3rem] text-center justify-center mt-4 md:mt-[5.75rem]">
      <div className="container_text">
        <div className="accordion ">
          <h1 className="opacity-100 w-full z-10 uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-2 cursor-pointer">
            {info[1].title}
          </h1>
          <div role="region" className="region ">
            <div className="block fade-up w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] min-h-fit text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4 transition ease-in duration-150">
              {info[1].description}
            </div>
            <div className="fade-upaccordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] min-h-fit h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
              <Image
                src={info[1].image}
                width={980}
                height={403}
                className="object-cover"
                alt={info[1].title}
              />
            </div>
          </div>
        </div>
        <div className="accordion ">
          <h1 className="opacity-100 w-full z-10 uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-2 cursor-pointer">
            {info[2].title}
          </h1>
          <div role="region" className="region">
            <div className="block fade-up w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] min-h-fit text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4 transition ease-in duration-150">
              {info[2].description}
            </div>
            <div className="fade-up accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] min-h-fit h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
              <Image
                src={info[2].image}
                width={980}
                height={403}
                className="object-cover"
                alt={info[2].title}
              />
            </div>
          </div>
        </div>
        <div className="accordion ">
          <h1 className="opacity-100 w-full z-10 uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-2 cursor-pointer">
            {info[3].title}
          </h1>
          <div role="region" className="region">
            <div className="block fade-up w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] min-h-fit text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4 transition ease-in duration-150">
              {info[3].description}
            </div>
            <div className="fade-up accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] min-h-fit h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
              <Image
                src={info[3].image}
                width={980}
                height={403}
                className="object-cover"
                alt={info[3].title}
              />
            </div>
          </div>
        </div>
        <div className="accordion ">
          <h1 className="opacity-100 w-full z-10 uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-2 cursor-pointer">
            {info[4].title}
          </h1>
          <div role="region" className="region">
            <div className="block fade-up w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] min-h-fit text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4 transition ease-in duration-150">
              {info[4].description}
            </div>
            <div className="fade-up accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] min-h-fit h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
              <Image
                src={info[4].image}
                width={980}
                height={403}
                className="object-cover"
                alt={info[4].title}
              />
            </div>
          </div>
        </div>
        <div className="accordion  ">
          <h1 className="opacity-100 w-full z-10 uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-2 cursor-pointer">
            {info[5].title}
          </h1>
          <div role="region" className="region">
            <div className="block fade-up w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] min-h-fit text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4 transition ease-in duration-150">
              {info[5].description}
            </div>
            <div className="fade-up accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] min-h-fit h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
              <Image
                src={info[5].image}
                width={980}
                height={403}
                className="object-cover"
                alt={info[5].title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
