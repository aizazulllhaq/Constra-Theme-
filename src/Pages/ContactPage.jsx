import React from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";
import loc from "../assets/b.jpg";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import locationMap from "../assets/map.png";
import ScrollToTop from "../Components/ScrollTop";

const ContactPage = () => {
  return (
    <section className="w-[100%]">
      <ScrollToTop/>
      <ContactDetail />
      <Navbar />
      <Main page="contactPage"/>

      <div className="max-w-[1370px] mx-auto">
        {/* UPPER SECTION  */}
        <div className="up my-[20px]">
          <div className="text-center py-[20px]">
            <h3 className="md:text-2xl text-xl font-thin">
              REACTING OUR OFFICE
            </h3>
            <h1 className="md:text-3xl text-2xl font-bold">
              FIND OUR LOCATION
            </h1>
          </div>
          <div className="flex justify-center flex-wrap">
            <div className="border-[2px] border-gray-300 px-[20px] py-[10px] text-center m-[15px] rounded-[4px]">
              <img src={loc} alt="" className="max-w-[100px] mx-auto" />
              <h1 className="font-bold py-[5px]">VISIT OUR OFFICE</h1>
              <h3>9051 Constra Incorporate, USA</h3>
            </div>
            <div className="border-[2px] border-gray-300 px-[20px] py-[10px] text-center m-[15px] rounded-[4px]">
              <img src={email} alt="" className="max-w-[100px] mx-auto" />
              <h1 className="font-bold py-[5px]">EMAIL US</h1>
              <h3>something@organization.com</h3>
            </div>
            <div className="border-[2px] border-gray-300 px-[20px] py-[10px] text-center m-[15px] rounded-[4px]">
              <img src={phone} alt="" className="max-w-[100px] mx-auto" />
              <h1 className="font-bold py-[5px]">CALL US NOW</h1>
              <h3>+9128947387 9128947387</h3>
            </div>
          </div>
        </div>

        {/* MAP SECTION  */}
          <div className="flex justify-center my-[20px] md:mx-0 mx-[15px]">
            <img src={locationMap} alt="" className="md:max-w-[850px] max-w-[500px] mx-auto" />
          </div>

        {/* CONTACT SECTION  */}

        <div className="contactSection max-w-[850px] mx-auto my-[50px]">
          <div className="">
            <h1 className="md:text-2xl text-xl font-bold opacity-80 md:px-0 px-[15px]">WE LOVE TO HEAR</h1>
            <form action="">
              <div className="flex md:justify-between flex-wrap justify-start">
                <div className="px-[10px] py-[10px]">
                  <label htmlFor="name" className="block opacity-70">
                    Name
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 px-[15px] py-[10px] focus:border-yellow-500 focus:outline-none" />
                </div>
                <div className="px-[10px] py-[10px]">
                  <label htmlFor="email" className="block opacity-70">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-[1px] border-gray-500 px-[15px] py-[10px] opacity-70 focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                <div className="px-[10px] py-[10px]">
                  <label htmlFor="subject" className="block opacity-70">
                    Subject
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 px-[15px] py-[10px] focus:border-yellow-500 focus:outline-none" />
                </div>
              </div>
              <div className="px-[10px] py-[10px]">
                <label htmlFor="msg" className="block opacity-70">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  rows={10}
                  cols={89}
                  className="border-[1px] border-gray-500 px-[15px] py-[10px] max-w-[100%] focus:border-yellow-500 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex md:justify-end justify-center px-[10px]">
                <button className="px-[15px] py-[10px] text-white bg-yellow-500 rounded-[4px] my-[10px] hover:bg-blue-500 cursor-pointer">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactPage;
