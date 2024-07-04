import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`w-full py-[20px] bg-gray-900 text-white  ${
        isScrolled ? "fixed top-0 left-0 z-50 shadow-lg" : "relative"
      }`}
    >
      <div className="max-w-[1170px] mx-auto grid grid-cols-[70%_auto]">
        <div className="left">
          <ul className="flex space-x-[30px] font-semibold pl-[20px]">
            <li>HOME</li>
            <li>COMPANY</li>
            <li>PROJECTS</li>
            <li>SERVICES</li>
            <li>FEATURES</li>
            <li>NEWS</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div className="right text-end text-[22px]">🔍</div>
      </div>
    </nav>
  );
};

export default Navbar;
