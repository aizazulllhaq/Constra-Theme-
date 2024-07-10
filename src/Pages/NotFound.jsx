import React from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="max-w-[1350px]">
      <ContactDetail />
      <Navbar />
      <Main page="404" />

      <div className="max-w-[1050px] mx-auto text-center py-[30px] flex flex-col justify-center">
        <h1 className="font-extrabold text-8xl sm:text-9xl opacity-80">
          404
        </h1>
        <h2 className="text-2xl font-semibold py-[20px]">
          Oops... Page Not Found!
        </h2>
        <p className="text-md sm:px-0 px-[10px]">
          Try using the button below to go to main page of the site{" "}
        </p>
        <div className="">
          <button className="py-[10px] cursor-pointer px-[15px] my-[15px] text-white bg-yellow-500 hover:bg-black duration-300 font-semibold rounded-[5px]">
            <Link to={"/"}>BACK TO HOME PAGE</Link>
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default NotFound;
