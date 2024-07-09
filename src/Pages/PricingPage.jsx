import React from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";

const PricingPage = () => {
  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="pricing" />
      <Footer />
    </section>
  );
};

export default PricingPage;
