import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Locations() {
  return (
    <div className="text-center text-white justify-center bg-brandBlue pt-[1.563rem] pb-[1.375rem]">
      {/* mobile logo */}
      <Link href="/">
        <div className="mx-auto w-full h-full max-w-[105px] max-h-[21px] md:max-w-[183px] md:max-h-[46px]">
          <Image
            src="/images/logo-main.svg"
            width={183}
            height={46}
            alt="logo"
          />
        </div>
      </Link>
      {/* locations */}
      <div className="flex justify-center mt-[1.688rem]">
        <div className="pr-3 border-r border-white">
          <span className="font-titleFont font-black text-base">Beirut</span>
        </div>
        <div className="px-3 border-r border-white">
          <span className="font-titleFont font-black text-base">Dubai</span>
        </div>
        <div className="pl-3">
          <span className="font-titleFont font-black text-base">Jeddah</span>
        </div>
      </div>
      {/* mailto */}
      <div className="text-center mt-[1.688rem]">
        <a href="mailto:info@aga-adk.com">
          <span className="font-titleFont font-black text-sm">
            info@aga-adk.com
          </span>
        </a>
      </div>
    </div>
  );
}
