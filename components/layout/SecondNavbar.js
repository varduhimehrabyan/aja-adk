import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MenuItems } from "../../data/MenuItems";
import MobileMenu from "./MobileMenu";

export default function SecondNavbar() {
  //mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  //toggle mobile menu
  const menuToggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  return (
    <>
      <div
        className={` ${
          isOpen ? "" : "py-[1.25rem] md:py-[3.125rem]"
        } fixed w-full max-w-[1440px] z-30 flex px-4 md:px-[4rem] bg-navbar-bg bg-no-repeat bg-cover justify-between items-center`}
      >
        {!isOpen && (
          <Link href="/">
            <div className="w-full h-full max-w-[105px] max-h-[21px] md:max-w-[183px] md:max-h-[46px] cursor-pointer">
              <Image
                src="/images/logo-main.svg"
                width={183}
                height={46}
                alt="logo"
              />
            </div>
          </Link>
        )}
        <div
          className="flex absolute top-[16px] right-[16px] z-10 md:hidden justify-end"
          onClick={menuToggleHandler}
        >
          <Image
            width={24}
            height={24}
            src={isOpen ? "/images/close.svg" : "/images/burger-menu.svg"}
            alt="burger-menu"
          />
        </div>
        <div className="hidden md:flex justify-end">
          {MenuItems.map((item) => (
            <div className="inline-block relative" key={item.id}>
              <Link href={item.href}>
                <a
                  className={`${
                    router.pathname == item.href
                      ? "bg-active-bg bg-no-repeat bg-contain"
                      : ""
                  } w-[6.125rem] h-[2.75rem] justify-center items-center inline-flex`}
                >
                  <span className="text-lg text-white font-titleFont font-black">
                    {item.title}
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <MobileMenu MenuItems={MenuItems} />}
    </>
  );
}
