import React, { useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
  };
  return (
    <section className="w-[100%]">
      <div
        className={`carousal max-w-[100%] mx-auto relative`}
        style={{
          backgroundImage: `url('https://demo.themefisher.com/constra-bootstrap/images/slider-main/bg${currentIndex}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px", // Adjust height as needed
        }}
      >
        {/* Left Arrow */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white">
          <BiArrowFromRight size={30} onClick={prevSlide} />
        </div>

        {/* Right Arrow */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white">
          <BiArrowFromLeft size={30} onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default Main;
