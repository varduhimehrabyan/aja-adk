import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

import WorkCategories from "./WorkCategories";
import WorkSingle from "../global/WorkSingle";
import LoadButton from "../global/LoadButton";

export default function Works(props) {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="bg-[url('/images/bottom-work-bg.png'),_url('/images/top-work-bg.png')] bg-[position:bottom_left,_top_left] bg-no-repeat z-20 block px-4 md:px-[4rem] pb-[3.015rem] md:pb-[6.375rem] md:pt-[6rem]">
    <div className="bg-[url('/images/top-work-bg.png')] bg-[position:top_left] bg-no-repeat z-20 block px-4 md:px-[4rem] pb-[3.015rem] md:pb-[6.375rem] md:pt-[8rem]">
      {/* map every category */}
      {props.workCategories.map((categories) =>
        console.log("categories", props.workItems)
      )}
      {props.workCategories.map((categories) => (
        <div key={categories.id} className="z-20">
          <WorkCategories categories={categories} />
          <Slider {...settings}>
            {/* map items of every category */}
            {props.workItems
              .filter((items) => items.category.includes(categories.slug))
              .map((filteredItems) => (
                <div className="z-20 cursor-grabbing" key={filteredItems.id}>
                  <WorkSingle work={filteredItems} />
                </div>
              ))}
          </Slider>
        </div>
      ))}
      <div className="absolute z-10 bottom-[70px] -left-[90px] sm:left-0 md:-left-[280px] lg:-left-[160px]  xl:-left-[80px] md:bottom-[160px] 1xl:left-0 2xl:bottom-[165px] 2xl:left-[0px] 3xl:bottom-[145px] 3xl:left-[200px]">
        <div className="w-[450px] h-[300px] md:w-[960px] md:h-[590px] relative">
          <Image
            layout="fill"
            src="/images/bottom-work-bg.png"
            alt="bottom-vector"
          />
        </div>
      </div>
    </div>
  );
}
