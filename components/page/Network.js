import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Network() {
        useEffect(() => {
    AOS.init({
      // once: true,
    });
  }, []);
  return (
    <div className="px-4 md:px-[4rem] pt-[1.5rem] md:pt-[4.063rem] pb-[1.5rem] md:pb-[5.125rem]" data-aos="fade-up" data-aos-duration="2500" data-aos-anchor-placement="top-top">
      <Image
        src="/images/network.png"
        alt="network"
        width={1312}
        height={390}
      />
    </div>
  );
}
