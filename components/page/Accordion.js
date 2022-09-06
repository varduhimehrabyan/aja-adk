import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { List, ListHeader, ListItem } from "react-scrollable-accordion";

export default function Accordion(props) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [open, setOpen] = useState(0);

  const historyRef = useRef();
  const missionRef = useRef();
  const visionRef = useRef();
  const awardsRef = useRef();
  const yearsRef = useRef();

  const [isHistoryVisible, setHistoryIsVisible] = useState();
  const [isMissionVisible, setMissionIsVisible] = useState();
  const [isVisionVisible, setVisionIsVisible] = useState();
  const [isAwardsVisible, setAwardsIsVisible] = useState();
  const [isYearsVisible, setYearsIsVisible] = useState();

  console.log(isHistoryVisible);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       setHistoryIsVisible(entry.isIntersecting);
  //     },
  //     { rootMargin: "0px 0px -40% 0px" }
  //   );
  //   observer.observe(historyRef.current);
  //   // observer.unobserve(historyRef.current);
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       setMissionIsVisible(entry.isIntersecting);
  //       setHistoryIsVisible(false);
  //       setVisionIsVisible(false);
  //       setAwardsIsVisible(false);
  //       setYearsIsVisible(false);
  //     },
  //     { rootMargin: "0px 0px -60% 0px" }
  //   );
  //   observer.observe(missionRef.current);
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       setVisionIsVisible(entry.isIntersecting);
  //       setHistoryIsVisible(false);
  //       setMissionIsVisible(false);
  //       setAwardsIsVisible(false);
  //       setYearsIsVisible(false);
  //     },
  //     { rootMargin: "0px 0px -60% 0px" }
  //   );
  //   observer.observe(visionRef.current);
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       setAwardsIsVisible(entry.isIntersecting);
  //       setHistoryIsVisible(false);
  //       setMissionIsVisible(false);
  //       setVisionIsVisible(false);
  //       setYearsIsVisible(false);
  //     },
  //     { rootMargin: "0px 0px -60% 0px" }
  //   );
  //   observer.observe(awardsRef.current);
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       setYearsIsVisible(entry.isIntersecting);
  //       setHistoryIsVisible(false);
  //       setMissionIsVisible(false);
  //       setAwardsIsVisible(false);
  //       setVisionIsVisible(false);
  //     },
  //     { rootMargin: "0px 0px -60% 0px" }
  //   );
  //   observer.observe(yearsRef.current);
  // }, []);

  return (
    <>
      ,{/*  */}
      <div className="bg-about-bg bg-no-repeat bg-cover h-[800px] px-4 py-[1.25rem] md:py-[3rem] text-center justify-center mt-4 md:mt-[5.75rem]">
        <List stickyHeaders scrollBehavior="smooth">
          {/* {props.info.slice(1).map((item, key) => ( */}

          <ListHeader>{props.info[1].title} </ListHeader>

          {/* {isHistoryVisible && ( */}
          <ListItem
            id="collapseOne"
            className="accordion-collapse collapse show w-[100%] h-[100%]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <ListItem className="block w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4">
              {props.info[1].description}
            </ListItem>
            <ListItem className="accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
              <Image
                src={props.info[1].image}
                width={980}
                height={403}
                className="object-cover"
                alt={props.info[1].title}
              />
            </ListItem>
          </ListItem>

          {/* )} */}

          {/* ))} */}
          {/* 
          <div className="accordion" id="accordionExample">
            <div
              className="accordion-item"
              // onClick={() => handleOpen(key)}
              // key={key}
              ref={missionRef}
            >
              <span
                className={`${
                  isMissionVisible ? "opacity-100" : "opacity-25 sticky top-0"
                } uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-[4.5rem] cursor-pointer`}
                id="headingOne"
              >
                {props.info[2].title}
              </span>

              {isMissionVisible && (
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  ="fade-up"
                  data-aos-duration="1500"
                >
                  <span className="block w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4">
                    {props.info[2].description}
                  </span>
                  <div className="accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
                    <Image
                      src={props.info[2].image}
                      width={980}
                      height={403}
                      className="object-cover"
                      alt={props.info[2].title}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" ref={visionRef}>
              <span
                className={`${
                  isVisionVisible ? "opacity-100" : "opacity-25"
                } uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-[4.5rem] cursor-pointer`}
                id="headingOne"
              >
                {props.info[3].title}
              </span>

              {isVisionVisible && (
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <span className="block w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4">
                    {props.info[3].description}
                  </span>
                  <div className="accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
                    <Image
                      src={props.info[3].image}
                      width={980}
                      height={403}
                      className="object-cover"
                      alt={props.info[3].title}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" ref={awardsRef}>
              <span
                className={`${
                  isAwardsVisible ? "opacity-100" : "opacity-25"
                } uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-[4.5rem] cursor-pointer`}
                id="headingOne"
              >
                {props.info[4].title}
              </span>

              {isAwardsVisible && (
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <span className="block w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4">
                    {props.info[4].description}
                  </span>
                  <div className="accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
                    <Image
                      src={props.info[4].image}
                      width={980}
                      height={403}
                      className="object-cover"
                      alt={props.info[4].title}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" ref={yearsRef}>
              <span
                className={`${
                  isYearsVisible ? "opacity-100" : "opacity-25"
                } uppercase accordion-header block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188rem] md:pt-[4.5rem] cursor-pointer`}
                id="headingOne"
              >
                {props.info[5].title}
              </span>

              {isYearsVisible && (
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <span className="block w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4">
                    {props.info[5].description}
                  </span>
                  <div className="accordion-body mx-auto mt-1 md:mt-4 w-full max-w-[980px] h-full max-h-[403px] pb-4 md:pb-[0.875rem]">
                    <Image
                      src={props.info[5].image}
                      width={980}
                      height={403}
                      className="object-cover"
                      alt={props.info[5].title}
                    />
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </List>
      </div>
    </>
  );
}
