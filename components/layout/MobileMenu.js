import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenu({ MenuItems }) {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen bg-mobile-menu-bg bg-cover bg-no-repeat">
      <Link href="/">
        <a>
          <div className="pt-[7.188rem] text-center">
            <Image
              width={183}
              height={46}
              src="/images/main-logo.svg"
              alt="logo"
            />
          </div>
        </a>
      </Link>
      {/* mobile menu items */}
      <div className="text-center mt-[10rem]">
        {MenuItems.map((item) => (
          <div className="block mt-8" key={item.id}>
            <Link href={item.href}>
              <a className={`${(router.pathname = item.href ? "" : "")}`}>
                <span className="block leading-[2.563rem] text-3xl text-white font-titleFont font-black">
                  {item.title}
                </span>
                <span className="block text-brandBlue text-lg font-light font-mainFont">
                  {item.subtitle}
                </span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
