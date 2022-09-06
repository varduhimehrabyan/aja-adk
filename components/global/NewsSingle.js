import React from "react";
import Image from "next/image";

export default function NewsSingle() {
  return (
    <div className="relative w-full h-full max-w-[185px] max-h-[185px] md:max-w-[304px] md:max-h-[304px]">
      <Image
        src="/images/news-single.jpg"
        width={304}
        height={304}
        className="object-cover"
        alt="news"
      />
    </div>
  );
}
