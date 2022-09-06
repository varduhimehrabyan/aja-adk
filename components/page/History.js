import React from "react";
import Image from "next/image";

export default function History(props) {
  return (
    <div className="bg-about-bg bg-no-repeat bg-cover px-4 py-[1.25rem] md:py-[3rem] text-center justify-center mt-[5.75rem]">
      <span className="text-2xl md:text-5xl text-white opacity-25 font-black md:leading-[5.125rem] font-titleFont">
        HISTORY
      </span>
      <span className="block text-2xl md:text-5xl text-white font-black md:leading-[5.125rem] font-titleFont pt-[0.188] md:pt-2">
        MISSION
      </span>
      <span className="block w-full mx-auto max-w-[18.75rem] md:max-w-[40.188rem] text-xs md:text-2xl text-white pt-[0.438rem] md:pt-4">
        {props.info.history_desc}
      </span>
      <div className="mx-auto mt-1 md:mt-4 w-full max-w-[980px] h-full max-h-[403px]">
        <Image
          src={props.info.history_image}
          width={980}
          height={403}
          className="object-cover"
          alt="mission"
        />
      </div>
      <span className="block pt-[0.851rem] md:pt-[2rem] text-2xl md:text-5xl text-white opacity-25 font-black md:leading-[5.125rem] font-titleFont">
        VISION
      </span>
      <span className="block pt-[0.188] md:pt-2 text-2xl md:text-5xl text-white opacity-25 font-black md:leading-[5.125rem] font-titleFont">
        AWARDS
      </span>
      <span className="block pt-[0.188] md:pt-2 text-2xl md:text-5xl text-white opacity-25 font-black md:leading-[5.125rem] font-titleFont">
        25 YEARS
      </span>
    </div>
  );
}
