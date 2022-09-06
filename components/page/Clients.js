import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function Clients(props) {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:1800,
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
    <div className="px-4 md:px-[4rem] bg-sectionBg py-4 md:py-[4rem] !z-10">
      <div className="mt-2 md:mt-8 pt-[90px] !z-10">
        <Slider {...settings}>
          {props.clients.map((item) => (
            <div
              className="relative w-[70px] h-[32px] md:w-[161px] md:h-[62px] z-10 cursor-grabbing"
              key={item.id}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_CLIENTS_URL}${item.image}`}
                className="object-contain w-full h-full"
                layout="fill"
                alt="logo"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
}
