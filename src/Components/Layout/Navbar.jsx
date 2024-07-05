import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

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
      className={`w-[100%] py-[20px] md:px-0 px-[10px] bg-gray-900 text-white ${
        isScrolled ? "fixed top-0 left-0 z-50 shadow-lg" : "relative"
      }`}
    >
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-[70%_auto] grid-cols-1">
        <div className="left relative">
          <ul className="flex md:space-x-[30px] space-x-[15px] font-semibold">
            <li
              className="relative hover:text-yellow-500 cursor-pointer"
              onMouseEnter={toggleHomeDropdown}
              onMouseLeave={closeDropdown}
            >
              HOME
              {homeDropdown && (
                <div className="absolute top-full left-0  py-2 w-full text-white shadow-lg z-[10]">
                  <ul className="flex flex-col space-y-2 bg-white w-[120px] py-[15px] items-center ">
                    <li className="text-black hover:text-yellow-400 border-b-[1px] border-b-gray-400 py-[5px]">
                      Home One
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Home Two
                    </li>
                    {/* Add more sublinks as needed */}
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-yellow-500 cursor-pointer"
              onMouseEnter={toggleCompanyDropdown}
              onMouseLeave={closeDropdown}
            >
              Company
              {companyDropdown && (
                <div className="absolute top-full left-0  py-2 w-full text-white shadow-lg z-[10]">
                  <ul className="flex flex-col space-y-2 bg-white w-[120px] py-[15px] pl-[20px] ">
                    <li className="text-black hover:text-yellow-400 border-b-[1px] border-b-gray-400 py-[5px]">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testominols
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
              className="relative hover:text-yellow-500 cursor-pointer"
              onMouseEnter={toggleProjectsDropdown}
              onMouseLeave={closeDropdown}
            >
              PROJECTS
              {projectsDropdown && (
                <div className="absolute top-full left-0  py-2 w-full text-white shadow-lg z-[10]">
                  <ul className="flex flex-col space-y-2 bg-white w-[120px] py-[15px] items-center ">
                    <li className="text-black hover:text-yellow-400 border-b-[1px] border-b-gray-400 py-[5px]">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testominols
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
              className="relative hover:text-yellow-500 cursor-pointer"
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={closeDropdown}
            >
              SERVICES
              {servicesDropdown && (
                <div className="absolute top-full left-0  py-2 w-full text-white shadow-lg z-[10]">
                  <ul className="flex flex-col space-y-2 bg-white w-[120px] py-[15px] items-center ">
                    <li className="text-black hover:text-yellow-400 border-b-[1px] border-b-gray-400 py-[5px]">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testominols
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
              className="relative hover:text-yellow-500 cursor-pointer"
              onMouseEnter={toggleFeaturesDropdown}
              onMouseLeave={closeDropdown}
            >
              FEATURES
              {featuresDropdown && (
                <div className="absolute top-full left-0  py-2 w-full text-white shadow-lg z-[10]">
                  <ul className="flex flex-col space-y-2 bg-white w-[120px] py-[15px] items-center ">
                    <li className="text-black hover:text-yellow-400 border-b-[1px] border-b-gray-400 py-[5px]">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testominols
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
              className="relative hover:text-yellow-500 cursor-pointer"
              onMouseEnter={toggleNewsDropdown}
              onMouseLeave={closeDropdown}
            >
              NEWS
              {newsDropdown && (
                <div className="absolute top-full left-0  py-2 w-full text-white shadow-lg z-[10]">
                  <ul className="flex flex-col space-y-2 bg-white w-[120px] py-[15px] items-center ">
                    <li className="text-black hover:text-yellow-400 border-b-[1px] border-b-gray-400 py-[5px]">
                      About Us
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Our People
                    </li>
                    <li className="text-black hover:text-yellow-400">
                      Testominols
                    </li>
                    <li className="text-black hover:text-yellow-400">FAQs</li>
                    <li className="text-black hover:text-yellow-400">
                      Pricing
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-yellow-400">CONTACT</li>
          </ul>
        </div>

        <div className="right text-end text-[22px]">🔍</div>
      </div>
    </nav>
  );
};

export default Navbar;
