import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WorkSingle(props) {
  console.log("work console", props)
  return (
    <div className="block w-auto mt-2 md:mt-[1.3rem] z-20">
      {/* main image */}
      <div className="w-[420px] h-[250px] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_WORK_URL}${props.work.image.image}`}
          alt="work-item"
          objectFit="cover"
          className="z-20"
          layout="fill"
        />
      </div>
      {/* title */}
      <div className="block">
        <span className="uppercase font-titleFont font-black text-textSecondary text-lg md:text-2xl">
          {props.work.title}
        </span>
        <Link href={`/work/${props.work.unique_id}`}>
          <a>
            <div className="flex gap-[0.463rem] md:gap-4 mt-1 md:mt-4 items-center">
              <span className="text-brandBlue text-xs md:text-base">
                Learn more
              </span>
              <div className="flex relative w-[13px] h-[14px] md:w-[22px] md:h-[24px] z-20">
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
  );
}
