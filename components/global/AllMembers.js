import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

import TeamMember from "./TeamMember";

export default function AllMembers(props) {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  useEffect(() => {
    AOS.init({
      // once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="relative z-10 px-4 md:px-[3rem]  mb-[0.531rem] md:mb-[4rem]">
        <Slider {...settings}>
          {props.members.map((member) => (
            <TeamMember member={member} key={member.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
