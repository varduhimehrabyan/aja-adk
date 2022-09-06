import React from "react";
import axios from "axios";

import ContactForm from "../components/layout/ContactForm";
import Footer from "../components/layout/Footer";
import SecondNavbar from "../components/layout/SecondNavbar";
import BrandStory from "../components/page/BrandStory";
import History from "../components/page/History";
import Locations from "../components/layout/Locations";
import SecondFooter from "../components/layout/SecondFooter";
import Accordion from "../components/page/Accordion";
import ScrollAccordion from "../components/page/ScrollAccordion";
import Navbar from "../components/layout/Navbar";

export default function about({ aboutInfoRes }) {
  return (
    <>
      {/* <SecondNavbar /> */}
      <Navbar />
      <div>
        <BrandStory info={aboutInfoRes} />
        {/* <History info={aboutInfoRes} /> */}
        {/* <Accordion info={aboutInfoRes} /> */}
        <ScrollAccordion info={aboutInfoRes} />
      </div>
      <div className="hidden md:block">
        <Footer />
        <ContactForm />
      </div>
      <div className="block md:hidden">
        <Locations />
        <SecondFooter />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const aboutInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_ABOUT_INFO}`
    );
    const aboutInfoRes = aboutInfo.data.items;

    return {
      props: {
        aboutInfoRes,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
  }
}
