import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
//slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider({ sliderItems }) {
  const slideRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  //slider settings
  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 500,
    nextArrow: false,
    prevArrow: false,
    pauseOnHover: false,
    lazyLoad: true,
    arrows: false,
    beforeChange: (current) => {
      if (current === 0) {
        setIsPlaying(true);
        slideRef.current.slickPause();
      } else {
        setIsPlaying(false);
      }
    },
  };

  return (
    <Slider {...settings} ref={(slider) => (slideRef.current = slider)}>
      <div className="h-[100vh] w-[100vw] max-h-[100vh] relative !flex justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            src={sliderItems?.image?.path}
            alt="banner slider"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
          <Image
            src="/images/scroll.svg"
            alt="years"
            width="40px"
            height="93px"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="min-h-screen min-w-full relative block">
        <ReactPlayer
          className="min-h-screen min-w-full"
          url={sliderItems?.video?.path}
          playing={isPlaying}
          muted={true}
          onEnded={() => slideRef.current.slickPlay()}
        />
      </div>
    </Slider>
  );
}

// https://www.youtube.com/watch?v=0c9iYZdsZMM
