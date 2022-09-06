import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

export default function GlobalLayout(props) {
  return (
    <div className="font-mainFont font-normal max-w-[1920px] mx-auto">
      {/* <Header /> */}
      <main>{props.children}</main>
      {/* <Footer />
      <ContactForm /> */}
    </div>
  );
}
