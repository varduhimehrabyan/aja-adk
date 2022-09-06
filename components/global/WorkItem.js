import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WorkItem(props) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  console.log("work props", props)
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      // data-aos-anchor-placement="top-top"
    >
      <div className="w-auto mt-[5rem] z-20 ">
        <div className={`${props.direction ? "flex-row-reverse" : ""} flex`}>
          <div className="block z-10">
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_WORK_URL}${props.items?.images[0]?.image}`}
                width={917}
                height={515}
                alt="work-item"
                objectFit="cover"
              />
            </div>
            <div
              className={`${props.direction ? "block md:hidden" : "block"} `}
            >
              <span className="uppercase font-titleFont font-black text-textSecondary text-sm md:text-3xl">
                {props.items.title}
              </span>
              <Link href={`/work/${props.items.unique_id}`}>
                <a>
                  <div className="flex gap-[0.463rem] md:gap-4 mt-1 md:mt-4 items-center">
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
            </div>
          </div>
          <div
            className={`${
              props.class
            } w-full h-full hidden md:block max-w-[490px] max-h-[270px] ${
              props.direction
                ? "z-10 -mr-[5.25rem] mt-[8.25rem]"
                : "-ml-[2.625rem] mt-[20.375rem]"
            }`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_WORK_URL}${props.items?.images[1]?.image}`}
              width={490}
              height={270}
              alt="workItem"
            />
            <div className={`${props.direction ? "block" : "hidden"} `}>
              <span className="uppercase font-titleFont font-black text-textSecondary text-sm md:text-3xl">
                {props.items.title}
              </span>
              <Link href="/about">
                <a>
                  <div className="flex gap-[0.463rem] md:gap-4 mt-1 md:mt-4 items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
