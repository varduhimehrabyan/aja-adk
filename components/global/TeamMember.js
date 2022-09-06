import React from "react";
import Image from "next/image";

export default function TeamMember(props) {
  return (
    <div className="max-w-[10.188rem] lg:max-w-[19.25rem] z-10">
      <div className="object-cover">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLIENTS_URL}${props.member.image}`}
          width={308}
          height={322}
          alt="member"
        />
      </div>
      <span className="uppercase pt-[0.531rem] md:pt-4 text-sm md:text-[1.75rem] leading-[1.188rem] md:leading-[2.236rem] font-titleFont font-black text-textSecondary">
        {props.member.name}
      </span>
      <span className="uppercase block pt-[0.242rem] md:pt-[0.438rem] text-xs md:text-2xl leading-[0.938rem] md:leading-[1.8rem] font-mainFont text-textPrimary">
        {props.member.position}
      </span>
    </div>
  );
}
