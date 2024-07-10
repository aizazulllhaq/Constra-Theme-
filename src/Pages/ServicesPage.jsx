import React from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const servicesCards = [
    {
      outerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/services/service1.jpg",
      innerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon1.png",
      h1: "ZERO HARM EVERYDAY",
      paragraph:
        "You have ideas, goals, and dreams. We have a culturally diverse,forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "> Learn More",
    },
    {
      outerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/services/service2.jpg",
      innerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon2.png",
      h1: "ZERO HARM EVERYDAY",
      paragraph:
        "You have ideas, goals, and dreams. We have a culturally diverse,forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "> Learn More",
    },
    {
      outerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/services/service3.jpg",
      innerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon3.png",
      h1: "ZERO HARM EVERYDAY",
      paragraph:
        "You have ideas, goals, and dreams. We have a culturally diverse,forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "> Learn More",
    },
    {
      outerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/services/service4.jpg",
      innerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon4.png",
      h1: "ZERO HARM EVERYDAY",
      paragraph:
        "You have ideas, goals, and dreams. We have a culturally diverse,forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "> Learn More",
    },
    {
      outerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/services/service5.jpg",
      innerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon5.png",
      h1: "ZERO HARM EVERYDAY",
      paragraph:
        "You have ideas, goals, and dreams. We have a culturally diverse,forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "> Learn More",
    },
    {
      outerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/services/service6.jpg",
      innerImage:
        "https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon6.png",
      h1: "ZERO HARM EVERYDAY",
      paragraph:
        "You have ideas, goals, and dreams. We have a culturally diverse,forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "> LEARN MORE",
    },
  ];

  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="Services" />

      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center my-[40px]">
      {servicesCards.map((service, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={service.outerImage}
              alt={service.h1}
              className="w-full"
            />
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4">
              <div className="w-full sm:w-auto sm:px-0 pt-4 sm:pt-0 sm:pr-4">
                <img
                  src={service.innerImage}
                  alt={service.h1}
                  className="mx-auto"
                />
              </div>
              <div className="w-full sm:pl-4 pt-4 sm:pt-0 text-center sm:text-left">
                <h1 className="text-md font-semibold py-2 opacity-80">
                  {service.h1}
                </h1>
                <p className="text-sm opacity-70 pb-2">
                  {service.paragraph}
                </p>
                <Link
                  className="opacity-80 py-2 text-sm font-semibold cursor-pointer hover:text-yellow-500"
                  to="#"
                >
                  {service.link.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      <Footer />
    </section>
  );
};

export default ServicesPage;
