import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { MenuItems } from "../../data/MenuItems";
import MobileMenu from "./MobileMenu";
// import mobileLogo from "../../public/images/logo-mb"

export default function Navbar(props) {
  //mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);
  const [pageTop, setPageTop] = useState(true);
  const router = useRouter();
  const [y, setY] = useState();


  //toggle mobile menu
  const menuToggleHandler = () => {
    setIsOpen(!isOpen);
  };
   const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setShow(true)
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        setShow(false)
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  const handleScroll = () => {
    setPageTop(window.pageYOffset < 90);
  };
  // console.log(show)
  return (
    <>
      {/* <div className={`${props.transparent && show  ? "before:bg-none" : !show ? "before:bg-main-mobile before:opacity-[90%]  backdrop-blur-sm" : "before:bg-main-mobile "} before:bg-no-repeat before:absolute before:bg-cover before:w-[100%] before:h-[90px]  before:top-0 before:left-0 fixed w-full z-30 flex px-[1.563rem] lg:px-[4rem] md:py-[1.375rem] items-center justify-between top-0 ${show || pageTop ? 'top-0': '-top-[90px]'}`}> ${props.transparent && show  ? "before:bg-none" : !show ? "before:bg-main-mobile before:opacity-[90%]  backdrop-blur-sm" : "before:bg-main-mobile "} */}
      
          <div className={`before:bg-no-repeat before:absolute before:bg-cover before:w-[100%] before:h-[90px]  before:top-0 before:left-0 fixed w-full z-30 flex px-[1.563rem] lg:px-[4rem] md:py-[1.375rem] items-center justify-between  ${props.transparent && pageTop ? 'top-0 before:bg-none':( show || pageTop) ? 'top-0 before:bg-main-mobile before:opacity-[90%] backdrop-blur-sm' :'-top-[90px]  before:bg-none'}`}>
        {!isOpen && (
          <Link href="/">
            <a>
              <div className="pt-4 md:pt-0 w-full h-full max-w-[105px] max-h-[21px] lg:max-w-[183px] lg:max-h-[46px]">
                <Image
                  width={183}
                  height={46}
                  src="/images/main-logo.svg"
                  alt="logo"
                />
              </div>
            </a>
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
        <div className="hidden md:flex justify-end gap-[1.875rem]">
          {MenuItems.map((item) => (
            <div className="inline-block group relative" key={item.id}>
              <Link href={item.href}>
                  <a
                  className={`${
                    router.pathname == item.href
                      ? "bg-active-bg bg-no-repeat bg-contain"
                      : ""
                  } w-[6.125rem] h-[2.75rem] justify-center items-center inline-flex`}
                >
                  <span className="text-lg text-white font-titleFont font-black uppercase">
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
