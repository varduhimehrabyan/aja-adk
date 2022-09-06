import React, { useState, useRef } from "react";
import Image from "next/image";
//slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider(props) {
  //slider navigations
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  //slider settings
  const settings = {
    focusOnSelect: true,
    slidesToShow: 3,
    useTransform: false,
    fade: true,
    slidesToScroll: 1,
  };

  //sliders connected with ref
  const customSlider = useRef();

  const renderArrows = () => {
    return (
      <div className="flex justify-between">
        <div
          className="flex w-full max-w-[20px] max-h-[40] md:max-w-[61px] md:max-h-[122]"
          onClick={() => customSlider.current.slickPrev()}
        >
          <Image
            src="/images/previous.svg"
            width={61}
            height={122}
            alt="arrow"
          />
        </div>
        <div
          className="flex w-full max-w-[20px] max-h-[40] md:max-w-[61px] md:max-h-[122]"
          onClick={() => customSlider.current.slickNext()}
        >
          <Image src="/images/next.svg" width={61} height={122} alt="arrow" />
        </div>
      </div>
    );
  };

  return (
    <div className="mb-2">
      <div className="w-full relative items-center">
        <div className="w-full max-w-[21.4rem] md:max-w-[82rem] absolute z-10 top-[4rem] md:top-[15rem] right-[1.031rem] md:right-[4.031rem]">
          {renderArrows()}
        </div>
        <div className="px-12 md:px-[15rem] ">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => [
              setNav1(slider1),
              (customSlider.current = slider1),
            ]}
          >
            {props.data.map((item, key) => (
              <Image
                src={`${process.env.NEXT_PUBLIC_WORK_URL}${item.image}`}
                width={1096}
                height={600}
                key={key}
                alt="slider-image"
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="hidden md:block w-full pl-[10.5rem] pr-[9rem] px-[5.75rem] imageSlide ml-[75px] max-w-[84rem]">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={2}
          focusOnSelect={true}
        >
          {props.data.map((item, key) => (
            <div key={key} className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_WORK_URL}${item.image}`}
                width={350}
                height={192}
                alt="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
