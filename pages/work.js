import React from "react";
import axios from "axios";

import Clients from "../components/page/Clients";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/layout/ContactForm";
import Locations from "../components/layout/Locations";
import SecondFooter from "../components/layout/SecondFooter";
import Works from "../components/page/Works";
import Navbar from "../components/layout/Navbar";

export default function work({ workCategories, workItems, clients }) {
  return (
    <>
      <Navbar />
      <div className="relative pt-[4rem] md:pt-[11.875rem]">
        <Works workCategories={workCategories} workItems={workItems} />
        <Clients clients={clients} />
      </div>
      <div className="hidden md:block">
        <Footer />
        <ContactForm />
      </div>
      <div className="block md:hidden ">
        <Locations />
        <SecondFooter />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await Promise.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_WORK_CATEGORIES}`
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_WORK_WORK}`
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_CLIENTS_SHOW}`
      ),
    ]);

    const data = res.map((res) => res.data);
    const workCategories = data[0].items.data;
    const workItems = data[1].items.data;
    const clients = data[2].items;

    return {
      props: {
        workCategories,
        workItems,
        clients,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
  }
}
