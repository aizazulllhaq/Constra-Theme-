import React from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";

const FAQ = () => {
  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="FAQ" />
      <Footer />
    </section>
  );
};

export default FAQ;
