import React, { useState } from "react";
import Image from "next/image";

import AllMembers from "../global/AllMembers";
import JoinTheTeam from "../global/JoinTheTeam";

export default function Spotlight(props) {
  //view more state
  const [open, setOpen] = useState(false);

  const viewMore = () => {
    setOpen(!open);
  };

  return (
    <div className="pt-[2.5rem] md:pt-[14rem] relative">
      {/* background image desktop */}
      <div className="hidden md:block w-full h-[1350px] absolute top-0 bottom-0">
        <Image
          src="/images/gif/spotlight-gif.gif"
          layout="fill"
          className="object-cover object-top"
          // width={1440}
          // height={1190}
          alt="spotlight-bg"
        />
      </div>
      <div className="block md:hidden mx-auto">
        <Image
          src="/images/spotlight-mb.svg"
          width={767}
          height={480}
          alt="spotlight-bg"
        />
      </div>
      {/* background image mobile */}

      {/* team members slider */}
      <AllMembers members={props.members} />
      {/* view more button */}

      <div
        className="block relative z-10 pb-4 md:pb-[4rem] items-center text-center cursor-pointer"
        onClick={viewMore}
      >
        <span className="text-brandBlue text-xs md:text-2xl">
          {open ? "View less" : "View more"}
        </span>
        <div
          className={`${
            open ? "rotate-180" : ""
          } relative flex w-[11px] h-[12px] md:w-[30px] md:h-[32px] md:mt-2 mx-auto`}
        >
          <Image
            width={30}
            height={32}
            src="/images/arrow-vertical.svg"
            alt="arrow"
          />
        </div>
      </div>

      {open && <JoinTheTeam />}
    </div>
  );
}
