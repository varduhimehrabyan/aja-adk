import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BrandStory(props) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div
      className={`${
        props.homepage ? "pt-8 md:pt-[4.5rem]" : "pt-[5.75rem] md:pt-[13.25rem]"
      } relative mx-4 md:mx-[72px] pb-[2.406rem] md:pb-[5.094rem]`}
    >
      {/* background image */}
      <div className="hidden md:block">
        <Image
          src="/images/gif/brand-gif.gif"
          width={1312}
          height={446}
          alt="brand-bg"
        />
      </div>
      <div className="block md:hidden mx-auto">
        <Image
          src="/images/brand-bg-mb.svg"
          width={344}
          height={223}
          alt="brand-bg"
        />
      </div>
      {/* description */}
      <div
        className="block relative max-w-[14.188rem] md:max-w-[40.375rem] w-full h-fit mx-auto text-center -mt-[10.938rem]"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <span className="text-xs md:text-2xl text-textPrimary">
          {props.info[0].description}
        </span>
        {props.homepage && (
          <Link href="/about">
            <a>
              <div className="flex gap-[0.463rem] md:gap-4 justify-center mt-[1.063rem] md:mt-[2rem] items-center">
                <span className="text-brandBlue text-xs md:text-2xl">
                  Learn more
                </span>
                <div className="relative w-[13px] h-[14px] md:w-[30px] md:h-[32px]">
                  <Image
                    width={30}
                    height={32}
                    src="/images/arrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
