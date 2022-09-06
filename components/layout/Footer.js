import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const footerInfo = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_HOME_INFO}`
      );
      const footerInfoRes = footerInfo.data.items.footer_text;
      setData(footerInfoRes);
    };
    //Animation
    AOS.init({
      once: true,
    });
    fetchData();
  }, []);

  return (
    <div className="block w-full h-fit bg-brandBlue text-white pt-[1.875rem] md:pt-[2rem] px-[1rem] md:px-[4.188rem] pb-[1.5rem] md:pb-[2.25rem]" >
      {/* logo */}
      <Image width={124} height={25} src="/images/logo-mb.svg" alt="logo" />
      <div className="block lg:flex lg:justify-between">
        <div className="block md:flex md:justify-between lg:gap-[9.375rem]">
          {/* locations */}
          <ul className="text-white pt-[1.5rem]">
            <li className="flex gap-[0.563rem]">
              <Image
                src="/images/location.svg"
                width={16}
                height={16}
                alt="location"
              />
              <a className="text-base">Beirut, Dubai, Jeddah</a>
            </li>
            <li className="flex gap-[0.563rem] pt-2 md:pt-4">
              <Image
                src="/images/phone.svg"
                width={16}
                height={16}
                alt="location"
              />
              <a className="text-base">1-234-567-890</a>
            </li>
            <li className="flex gap-[0.563rem] pt-2 md:pt-4">
              <Image
                src="/images/mail.svg"
                width={16}
                height={16}
                alt="location"
              />
              <Link href="mailto:info@aga-adk.com" className="text-base">
                info@aga-adk.com
              </Link>
            </li>
          </ul>
          {/* main menu links */}
          <div className="flex gap-[4.188rem]">
            <ul className="block pt-[1.5rem] md:pt-0">
              <li className="text-lg font-bold">Main Menu</li>
              <li className="text-base opacity-70 pt-2 md:pt-4">
                <Link href="/">Home</Link>
              </li>
              <li className="text-base opacity-70 pt-2">
                <Link href="/about">About</Link>
              </li>
              <li className="text-base opacity-70 pt-2">
                <Link href="/work">Work</Link>
              </li>
            </ul>
            {/* social links mobile*/}
            <ul className="block lg:hidden pt-[1.5rem] md:pt-0">
              <li className="text-lg font-bold">Social Media</li>
              <div className="flex gap-[1.25rem]">
                <li className="text-base h-fit pt-[0.688rem]">
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/facebook.svg"
                        width={24}
                        height={24}
                        alt="facebook"
                      />
                    </a>
                  </Link>
                </li>
                <li className="text-base pt-[0.688rem]">
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/instagram.svg"
                        width={24}
                        height={24}
                        alt="instagram"
                      />
                    </a>
                  </Link>
                </li>
              </div>
              <li className="text-base pt-[0.688rem]">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/linkedin.svg"
                      width={24}
                      height={24}
                      alt="linkedin"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* footer text */}
        <ul className="block pt-[1.5rem] lg:pt-0 lg:w-[22%]">
          <li className="text-lg font-bold">License</li>
          <li className="text-sm md:text-base opacity-70 pt-2 md:pt-4">
            {data}
          </li>
        </ul>
        <div className="block md:w-[15%]">
          {/* social links desktop */}
          <ul className="hidden lg:block pt-[1.5rem] md:pt-0">
            <li className="text-lg font-bold">Social Media</li>
            <div className="flex gap-[1.25rem]">
              <li className="text-base h-fit pt-[0.688rem]">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/facebook.svg"
                      width={24}
                      height={24}
                      alt="facebook"
                    />
                  </a>
                </Link>
              </li>
              <li className="text-base pt-[0.688rem]">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/instagram.svg"
                      width={24}
                      height={24}
                      alt="instagram"
                    />
                  </a>
                </Link>
              </li>
              <li className="text-base pt-[0.688rem]">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/linkedin.svg"
                      width={24}
                      height={24}
                      alt="linkedin"
                    />
                  </a>
                </Link>
              </li>
            </div>
          </ul>
          {/* copyright */}
          <div className="mt-8 pt-4 border-t-[0.5px] opacity-70 text-sm md:text-base border-t-white border-opacity-30 text-center md:text-left">
            <Image
              src="/images/copyright.svg"
              width={16}
              height={16}
              alt="copyright"
            />
            <span> 2010 - </span>
            <span>{new Date().getFullYear()}</span>
            <span className="block">All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
