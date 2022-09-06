import React from "react";
import Image from "next/image";

import Navbar from "./Navbar";
import BannerSlider from "./BannerSlider";
import SecondNavbar from "./SecondNavbar";

export default function Header({ sliderItems }) {
  return (
    <div className="w-full block">
      {/* <SecondNavbar /> */}
      <Navbar transparent={true} />

      <div className="w-auto bg-main-mobile bg-no-repeat bg-cover justify-center text-center h-full mx-[1.563rem] md:mx-auto ">

        <BannerSlider sliderItems={sliderItems} />
      </div>
      {/* <div className="w-auto h-full md:mx-auto">
        <HomeBanner />
      </div> */}
    </div>
  );
}
