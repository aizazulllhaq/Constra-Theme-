import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [parentDropDown, setParentDropDown] = useState(false);
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

  const toggleParentDropDown = () => {
    setParentDropDown(!parentDropDown);
  };

  const closeDropdown = () => {
    setHomeDropdown(false);
    setCompanyDropdown(false);
    setServicesDropdown(false);
    setProjectsDropdown(false);
    setFeaturesDropdown(false);
    setNewsDropdown(false);
    setParentDropDown(false);
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
            className={`flex md:flex-row md:space-x-5 justify-end md:text-xl text-md md:static py-2 font-semibold ${
              open
                ? "block flex-col mt-5 absolute top-0 left-0 bg-gray-900 w-[750px] pl-[50px]"
                : "hidden"
            } md:block`}
          >
            <Link
            to={"/"}
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px]"
              onMouseEnter={toggleHomeDropdown}
              onMouseLeave={closeDropdown}
            >
              HOME
              {homeDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <Link className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      Home One
                    </Link>
                    <Link className="text-black hover:text-yellow-400">
                      Home Two
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px]"
              onMouseEnter={toggleCompanyDropdown}
              onMouseLeave={closeDropdown}
            >
              COMPANY
              {companyDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 pl-5">
                    <Link
                      to={"/about"}
                      className="text-black hover:text-yellow-400 border-b border-gray-400 py-1"
                    >
                      About Us
                    </Link>
                    <Link
                      to={"/team"}
                      className="text-black hover:text-yellow-400"
                    >
                      Our People
                    </Link>
                    <Link
                      to={"/testomonials"}
                      className="text-black hover:text-yellow-400"
                    >
                      Testimonials
                    </Link>
                    <Link
                      to={"/faqs"}
                      className="text-black hover:text-yellow-400"
                    >
                      FAQs
                    </Link>
                    <Link
                      to={"/pricing"}
                      className="text-black hover:text-yellow-400"
                    >
                      Pricing
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px]"
              onMouseEnter={toggleProjectsDropdown}
              onMouseLeave={closeDropdown}
            >
              PROJECTS
              {projectsDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <Link
                      to={"/projects"}
                      className="text-black hover:text-yellow-400"
                    >
                      Projects All
                    </Link>
                    <Link
                      to={"/project"}
                      className="text-black hover:text-yellow-400"
                    >
                      Single Project
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px]"
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={closeDropdown}
            >
              SERVICES
              {servicesDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <Link
                      to={"/services"}
                      className="text-black hover:text-yellow-400"
                    >
                      Services
                    </Link>
                    <Link
                      to={"/service"}
                      className="text-black hover:text-yellow-400"
                    >
                      Single Service
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px]"
              onMouseEnter={toggleFeaturesDropdown}
              onMouseLeave={closeDropdown}
            >
              FEATURES
              {featuresDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                    <Link
                      to={"/typography"}
                      className="text-black hover:text-yellow-400 border-b border-gray-400 py-1"
                    >
                      Typography
                    </Link>
                    <Link
                      to={"/pageNotFound"}
                      className="text-black hover:text-yellow-400"
                    >
                      404
                    </Link>
                    <Link
                      className="relative hover:text-yellow-400 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px] text-black"
                      onMouseEnter={toggleParentDropDown}
                      onMouseLeave={closeDropdown}
                    >
                      Parent Menu{" "}
                      {parentDropDown && (
                        <div className="absolute top-[10%] left-[70%] py-2 w-full text-white shadow-lg z-10">
                          <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center">
                            <Link
                              to={"/"}
                              className="text-black hover:text-yellow-400"
                            >
                              CHILD MENU 1
                            </Link>
                            <Link
                              to={"/"}
                              className="text-black hover:text-yellow-400"
                            >
                              CHILD MENU 2
                            </Link>
                          </ul>
                        </div>
                      )}
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link
              className="relative hover:text-yellow-500 cursor-pointer md:py-0 py-2 lg:text-[15px] text-[15px]"
              onMouseEnter={toggleNewsDropdown}
              onMouseLeave={closeDropdown}
            >
              NEWS
              {newsDropdown && (
                <div className="absolute top-full left-0 py-2 w-full text-white shadow-lg z-10">
                  <ul className="flex flex-col space-y-2 bg-white w-28 py-3 items-center px-[5px]">
                    <Link to={"/newsLeftSideBar"} className="text-black hover:text-yellow-400 border-b border-gray-400 py-1">
                      NEWS LEFT SIDEBAR
                    </Link>
                    <Link to={"/newsRightSideBar"} className="text-black hover:text-yellow-400">
                      NEWS RIGHT SIDEBAR
                    </Link>
                    <Link to={"/singleNews"} className="text-black hover:text-yellow-400">
                      NEWS SINGLE
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link  to={"/contact"} className="hover:text-yellow-400 md:py-0 py-2 lg:text-[15px] text-[15px]">
              CONTACT
            </Link>
          </ul>
        </div>

        <div className="right text-end md:pr-2 mr-[30px] lg:text-[25px] text-[15px]">
          🔍
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
