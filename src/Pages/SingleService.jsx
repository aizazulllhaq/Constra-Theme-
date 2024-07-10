import React, { useState } from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const handleDropDown = (index) => {
    setIsOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="Service" />

      {/* <div className="max-w-[1350px] mx-auto flex md:flex-nowrap flex-wrap justify-center my-[40px]">
        <div className="left-sideBar">
          <div className="first">
            <h1 className="text-xl font-bold">SOLUTIONS</h1>
            <ul className="space-y-[5px]">
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Home Construction
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Building Remodels
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Interior Design
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Exterior Design
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Renovation
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Safety Management
              </li>
            </ul>
          </div>
          <div className="second w-[700px]">
            <div className="">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
              </p>
            </div>
            <div className="">
              <h1>NATS STEMAN</h1>
              <h2>Chief Executive Officer</h2>
            </div>
          </div>
        </div>

      <div className="mainSection">
        <h1>BULDING MODELS</h1>
        <img src="https://demo.themefisher.com/constra-bootstrap/images/projects/project2.jpg" alt="" />
      </div>
      </div> */}

      <div className="max-w-[1350px] mx-auto flex flex-wrap justify-center my-[40px]">
        <div className="left-sideBar flex-shrink-0 w-full md:w-1/4 px-[20px]">
          <div className="first">
            <h1 className="text-xl font-bold">SOLUTIONS</h1>
            <ul className="space-y-[5px]">
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Home Construction
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Building Remodels
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Interior Design
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Exterior Design
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Renovation
              </li>
              <li className="text-xl px-[20px] py-[10px] text-white hover:bg-yellow-400 bg-gray-300 rounded-[3px]">
                Safety Management
              </li>
            </ul>
          </div>
          <div className="second py-[100px]">
            <div className="text-center p-[20px] border-[2px] border-yellow-500">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/clients/testimonial1.png"
                alt=""
                className="py-[10px]"
              />
              <h1 className="font-bold text-yellow-500">NATS STEMAN</h1>
              <h2>Chief Executive Officer</h2>
            </div>
          </div>
        </div>

        <div className="mainSection flex-grow w-full md:w-3/4 px-[50px]">
          <div className="">
            <h1 className="text-2xl font-bold pb-[20px]">BULDING MODELS</h1>
            <p className="py-[10px] opacity-70 pr-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien.
            </p>
            <p className="py-[10px] opacity-70 pr-[60px] pb-[20px]">
              Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
              uada mi elementum elementum. , nec tincidunt nunc posuere ut.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac
              hendrerit sem, et tempus sem{" "}
            </p>
            <img
              src="https://demo.themefisher.com/constra-bootstrap/images/projects/project2.jpg"
              alt=""
            />
          </div>

          <div className="max-w-[800px] grid md:grid-cols-2 ">
            <div className="left px-[10px]">
              <h1 className="text-2xl font-bold py-[20px]">WHAT MAKES US DIFFERENT</h1>
              <p className="opacity-70 ">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Consectetur adipiscing elit. Integer
                adipiscing erat eget risus sollicitudin pellentesque et non erat
                tincidunt nunc posuere.
              </p>
              <ul className="opacity-70 px-[15px] space-y-[5px] py-[20px]">
                <li>Partnership Strategy tristique eleifend.</li>
                <li>Partnership Strategy tristique eleifend.</li>
                <li>Partnership Strategy tristique eleifend.</li>
                <li>Partnership Strategy tristique eleifend.</li>
                <li>Partnership Strategy tristique eleifend.</li>
                <li>Partnership Strategy tristique eleifend.</li>
              </ul>
            </div>

            <div className="right mr-[40px] py-[20px] px-[10px]">
              <h1 className="text-2xl font-bold">YOU SHOULD KNOW</h1>
              <div className="dropdown py-[50px]">
                <div className="1qa">
                  <div className="q hover:text-yellow-500 border-[2px] border-gray-400 px-[10px] py-[5px]" onClick={() => handleDropDown(0)}>
                    <h2 className="font-bold">
                      DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION SITES
                      ?
                    </h2>
                  </div>
                  <div className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${isOpen[0] ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400" :"max-h-0"}`}>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata.
                    </p>
                  </div>
                </div>
                <div className="1qa">
                  <div className="q hover:text-yellow-500 border-[2px] border-gray-400 px-[10px] py-[5px]" onClick={() => handleDropDown(1)}>
                    <h2 className="font-bold">
                      DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION SITES
                      ?
                    </h2>
                  </div>
                  <div className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${isOpen[1] ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400" :"max-h-0"}`}>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata.
                    </p>
                  </div>
                </div>
                <div className="1qa">
                  <div className="q hover:text-yellow-500 border-[2px] border-gray-400 px-[10px] py-[5px]" onClick={() => handleDropDown(2)}>
                    <h2 className="font-bold">
                      DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION SITES
                      ?
                    </h2>
                  </div>
                  <div className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${isOpen[2] ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400" :"max-h-0"}`}>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="downCenter bg-gray-700 px-[20px] max-w-[700px] ml-[20px] py-[30px] rounded-[4px]">
                <div className="flex md:flex-row flex-col justify-around ">
                        <h1 className="text-2xl text-white font-bold">INTERESTED WITH THIS SERVICE</h1>
                        <button className="px-[15px] md:mt-0 mt-[15px] py-[10px] text-white bg-yellow-500 rounded-[4px]">GET A QUOTE</button>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ServicesPage;
