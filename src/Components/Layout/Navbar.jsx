import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHomeDropdown = () => {
    setHomeDropdown(!homeDropdown);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdown(!companyDropdown);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdown(!projectsDropdown);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdown(!featuresDropdown);
  };

  const toggleNewsDropdown = () => {
    setNewsDropdown(!newsDropdown);
  };

  const closeDropdown = () => {
    setHomeDropdown(false);
    setCompanyDropdown(false);
    setServicesDropdown(false);
    setProjectsDropdown(false);
    setFeaturesDropdown(false);
    setNewsDropdown(false);
  };

  return (
    <nav
      className={`w-full py-2 bg-gray-900 text-white ${
        isScrolled ? "fixed top-0 left-0 z-50 shadow-lg" : "relative"
      }`}
    >
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-[70%_auto] grid-cols-[50%_50%] items-center">
        <div className="left relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-xl sm:text-white bg-yellow-500 md:px-0 px-1 md:py-0 py-1 absolute left-[8%] top-1/2 transform -translate-y-1/2 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
          <ul
            className={`md:flex md:space-x-5 justify-end md:text-xl text-md md:static py-2 font-semibold ${
              open ? "block mt-5 absolute top-0 left-0 bg-gray-900 w-[750px] pl-[50px]" : "hidden"
            } md:block`}
          >
            <li
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[20px] text-[15px]"
              onMouseEnter={toggleHomeDropdown}
              onMouseLeave={closeDropdown}
            >
              HOME
              {homeDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <li className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      Home One
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Home Two
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[20px] text-[15px]"
              onMouseEnter={toggleCompanyDropdown}
              onMouseLeave={closeDropdown}
            >
              COMPANY
              {companyDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 pl-5">
                    <li className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testimonials
                    </li>
                    <li className="text-black hover:text-yellow-400">FAQs</li>
                    <li className="text-black hover:text-yellow-400">
                      Pricing
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[20px] text-[15px]"
              onMouseEnter={toggleProjectsDropdown}
              onMouseLeave={closeDropdown}
            >
              PROJECTS
              {projectsDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <li className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testimonials
                    </li>
                    <li className="text-black hover:text-yellow-400">FAQs</li>
                    <li className="text-black hover:text-yellow-400">
                      Pricing
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[20px] text-[15px]"
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={closeDropdown}
            >
              SERVICES
              {servicesDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <li className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testimonials
                    </li>
                    <li className="text-black hover:text-yellow-400">FAQs</li>
                    <li className="text-black hover:text-yellow-400">
                      Pricing
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[20px] text-[15px]"
              onMouseEnter={toggleFeaturesDropdown}
              onMouseLeave={closeDropdown}
            >
              FEATURES
              {featuresDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <li className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testimonials
                    </li>
                    <li className="text-black hover:text-yellow-400">FAQs</li>
                    <li className="text-black hover:text-yellow-400">
                      Pricing
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[20px] text-[15px]"
              onMouseEnter={toggleNewsDropdown}
              onMouseLeave={closeDropdown}
            >
              NEWS
              {newsDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <li className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testimonials
                    </li>
                    <li className="text-black hover:text-yellow-400">FAQs</li>
                    <li className="text-black hover:text-yellow-400">
                      Pricing
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-yellow-400 md:py-0 py-2 lg:text-[20px] text-[15px]">CONTACT</li>
          </ul>
        </div>

        <div className="right text-end md:pr-2 mr-[30px] lg:text-[25px] text-[20px]">🔍</div>
      </div>
    </nav>
  );
};

export default Navbar;
