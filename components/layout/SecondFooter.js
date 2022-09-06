import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function SecondFooter() {
  // contact from state
  const [isOpen, setIsOpen] = useState(false);

  //contact form handler
  const openForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-sectionBg w-full text-white">
      {/* page links */}
      <div className="py-8 text-center border-b-[0.5px] border-white">
        <Link href="/about">
          <span className="text-xs font-titleFont font-black">
            About AGA ADK
          </span>
        </Link>
      </div>
      <div className="py-8 text-center border-b-[0.5px] border-white">
        <span
          className="text-xs font-titleFont font-black cursor-pointer"
          onClick={openForm}
        >
          Connect with Us
        </span>
        {isOpen && <ContactForm />}
      </div>
      <div className="py-8 text-center border-b-[0.5px] border-white">
        <Link href="/work">
          <span className="text-xs font-titleFont font-black">Work</span>
        </Link>
      </div>
      <div className="py-8 text-center border-b-[0.5px] border-white">
        {/* social links */}
        <div className="flex justify-center gap-[32px]">
          <a
            href="https://m.facebook.com/AGAADK"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative w-full h-full max-w-[24px] max-h-[24px]">
              <Image
                src="/images/facebook-white.svg"
                width={24}
                height={24}
                alt="icon"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/agaadkmena"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative w-full h-full max-w-[24px] max-h-[24px]">
              <Image
                src="/images/instagram-white.svg"
                width={24}
                height={24}
                alt="icon"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/aga-adk-advertising-&-marketing/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative w-full h-full max-w-[24px] max-h-[24px]">
              <Image
                src="/images/linkedin-white.svg"
                width={24}
                height={24}
                alt="icon"
              />
            </div>
          </a>
        </div>
        {/* copyright */}
        <div className="pt-6 text-center justify-center flex items-center">
          <Image
            src="/images/copyright.svg"
            width={12}
            height={12}
            alt="copyright"
          />
          <span className="text-xs font-titleFont font-black px-1 pt-[2px]">
            {new Date().getFullYear()}
          </span>
          <span className="text-xs font-titleFont font-black pt-[2px]">
            AGA ADK
          </span>
        </div>
      </div>
    </div>
  );
}
