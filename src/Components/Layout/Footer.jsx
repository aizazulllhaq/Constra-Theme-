import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[100%] mx-auto ">
        <div className="up bg-black grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-[50px] text-white sm:text-left text-center">
          <div className="left py-[40px] sm:pl-[100px] sm:max-w-[500px] max-w-[200px] mx-auto">
            <h2 className="md:text-2xl text-xl py-[10px] font-bold">
              ABOUT US
            </h2>
            <img
              src="https://demo.themefisher.com/constra-bootstrap/images/footer-logo.png"
              alt=""
              className="w-[200px] py-[10px]"
            />
            <p className="opacity-60 py-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-8 text-[7px] py-[10px] justify-center">
              <button
                onClick={() => handleExternalLink("https://facebook.com")}
                className="text-blue-600"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="text-white"
                />
              </button>
              <button
                onClick={() => handleExternalLink("https://instagram.com")}
                className="text-white"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="text-white"
                />
              </button>
              <button
                onClick={() => handleExternalLink("https://github.com")}
                className="text-white"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-white"
                />
              </button>
              <button
                onClick={() => handleExternalLink("https://twitter.com")}
                className="text-white"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="text-white"
                />
              </button>
            </div>
          </div>
          <div className="center py-[40px] sm:pl-[100px] sm:max-w-[500px] max-w-[250px] mx-auto">
            <h2 className="md:text-2xl text-xl py-[10px] font-bold">
              WORKING HOURS
            </h2>
            <p className="opacity-60 py-[10px]">
              We work 7 days a week, every day excluding major holidays. Contact
              us if you have an emergency, with our Hotline and Contact form.{" "}
            </p>
            <div className="grid grid-cols-2 opacity-60 py-[10px]">
              <div className="left">
                <ul>
                  <li>Monday - Friday :</li>
                  <li>Saturday :</li>
                  <li>Sunday and holidays : </li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>10:00 - 16:00</li>
                  <li>12:00 - 15:00</li>
                  <li>09:00 - 12:00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right py-[40px] sm:pl-[100px] sm:max-w-[500px] max-w-[250px] mx-auto">
            <h1 className="md:text-2xl text-xl py-[10px] font-bold">
              SERVICES
            </h1>
            <ul className="flex flex-col opacity-50 py-[10px">
              <li className="py-[10px] hover:text-yellow-500">
                Pre-Construction
              </li>
              <li className="pb-[5px] hover:text-yellow-500">
                General Contrating
              </li>
              <li className="pb-[5px] hover:text-yellow-500">
                Construction Management
              </li>
              <li className="pb-[5px]  hover:text-yellow-500">
                Design and Build
              </li>
              <li className="pb-[5px] hover:text-yellow-500">
                Self-Perform Construction
              </li>
            </ul>
          </div>
        </div>

        <div className="down sm:flex sm:justify-between sm:flex-wrap grid grid-cols-1  gap-[10px] bg-yellow-500 py-[30px] px-[60px]">
          <div className="left">
            <h2 className="sm:text-sm text-[11px] font-semibold">
              Copyright © 2024, Designed & Developed by Themefisher
            </h2>
          </div>
          <div className="right">
            <ul className="flex sm:gap-[10px] gap-[5px] text-sm font-semibold text-[11px]">
              <li className="hover:text-gray-300">About</li>
              <li className="hover:text-gray-300">Our people</li>
              <li className="hover:text-gray-300">Faq</li>
              <li className="hover:text-gray-300">Blog</li>
              <li className="hover:text-gray-300">Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
