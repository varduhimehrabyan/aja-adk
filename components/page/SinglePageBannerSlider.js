import React, { useEffect, useState } from "react";
//slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SinglePageBannerSlider(props) {
  const [imageUrl,setImageUrl] = useState()
  console.log("desck", props)
  //slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: false,
    prevArrow: false,
    pauseOnHover: false,
    lazyLoad: true,
    arrows: false,
    autoplay:true
  };

  
  // console.log(props.data.slider)
  return (
    <Slider {...settings}>
        {props.data.slider.map((item, key) => (
      <div key={key}  className="bannerSlide relative w-full h-[100vh]">
        <Image src={`${process.env.NEXT_PUBLIC_CLIENTS_URL}${props.data.slider[key]?.image}`}
         alt="slider image" layout="fill"  className="object-cover w-full h-full"/>
          <div 
            className="w-full pt-[3.75rem] pb-[7.125rem] px-4 md:px-[10.75rem] text-white absolute "
          >
            <span className="text-xl md:text-[3.5rem] md:leading-[4.473rem] font-black">
              {props.data.title}
            </span>
            <span className="block text-xs md:text-[1.75rem] leading-[1.75rem] md:leading-[2.236rem] font-black mt-4 md:mt-8">
             {item.title_1}
            </span>
            <span className="block font-mainFont text-xxs leading-4 md:text-2xl md:leading-9 mt-[1.125rem]">
              {item.description_1}
            </span>
            <span className="block text-xs md:text-[1.75rem] leading-[1.75rem] md:leading-[2.236rem] font-black mt-[2rem] md:mt-[4rem]">
             {item.title_2}
            </span>
            <span className="block font-mainFont text-xxs leading-4 md:text-2xl md:leading-9 mt-[1.125rem]">
              {item.description_2}
            </span>
          </div>
        </div>
        ))}
      </Slider>
  );
}
