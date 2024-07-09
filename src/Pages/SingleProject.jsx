import React from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";

const SingleProject = () => {
  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="Project" />
      <Footer />
    </section>
  );
};

export default SingleProject;
