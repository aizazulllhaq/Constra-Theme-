import React, { useState, useEffect } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      image: `https://demo.themefisher.com/constra-bootstrap/images/slider-main/bg1.jpg`,
      upperSmHeading: "17 Years of Experience in",
      centerLgHeading: "CONSTRUCTION INDUSTRY",
      firstBtn: "OUR SERVICES",
      secondBtn: "CONTACT NOW",
    },
    {
      id: 2,
      image: `https://demo.themefisher.com/constra-bootstrap/images/slider-main/bg2.jpg`,
      upperSmHeading: "WORLD CLASS SERVICE",
      centerMdHeading: "WHEN SERVICE MATTERS",
      downLgHeading: "YOUR CHOICE IS SIMPLE",
      btn: "OUR SERVICES",
    },
    {
      id: 3,
      image: `https://demo.themefisher.com/constra-bootstrap/images/slider-main/bg3.jpg`,
      upperSmHeading: "MEET YOUR ENGINEER",
      centerLgHeading: "WE BELIEVE SUSTAINIBILITY",
      downSmText:
        "We will deal with your failure that determines how you achieve success",
      firstBtn: "GET FREE QUOTE",
      secondBtn: "LEARN MORE",
    },
  ];

  // useEffect(() => {
  //   const autoSlide = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  //     );
  //   };

  //   const id = setInterval(autoSlide, 5000);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderSlideContent = (slide) => {
    switch (slide.id) {
      case 1:
        return (
          <div className="absolute bottom-[30%] md:left-[10%] left-[20%] max-w-[60%] md:max-w-[80%] mx-auto text-white p-4 text-center">
            <p className="md:text-5xl sm:text-3xl text-xl font-thin ">{slide.upperSmHeading}</p>
            <h2 className="md:text-6xl sm:text-3xl text-2xl font-extrabold py-[18px]">{slide.centerLgHeading}</h2>
            <div className="mt-4">
              <button className="bg-yellow-500 text-white py-3 px-4 mr-4 rounded-[5px] font-bold">
                {slide.firstBtn}
              </button>
              <button className="border-[2px] border-yellow-500 text-white py-3 px-4 rounded-[5px] font-bold">
                {slide.secondBtn}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="absolute bottom-[25%] left-[7%] max-w-[1170px] mx-auto text-white p-4">
            <p className="md:text-xl text-md bg-yellow-500 font-semibold px-[10px] py-[6px] mb-[17px] rounded-[2px] md:max-w-[245px] max-w-[200px]">{slide.upperSmHeading}</p>
            <h2 className="md:text-4xl sm:text-2xl text-xl font-thin mb-[17px]">{slide.centerMdHeading}</h2>
            <h2 className="md:text-6xl sm:text-3xl text-2xl font-extrabold mb-[27px]">{slide.downLgHeading}</h2>
            <div className="mt-4">
              <button className="border-[2px] border-yellow-500 font-bold rounded-[3px] text-white py-2 px-4">
                {slide.btn}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="absolute bottom-[20%] w-full text-white py-4 pr-[150px] text-end">
            <p className="md:text-4xl sm:text-2xl text-xl font-thin mb-[10px]">{slide.upperSmHeading}</p>
            <h2 className="md:text-6xl sm:text-4xl text-2xl font-extrabold my-[17px]">{slide.centerLgHeading}</h2>
            <p className="md:text-xl text-md my-[19px]">{slide.downSmText}</p>
            <div className="mt-4">
              <button className="bg-yellow-500 text-white py-3 px-6 m-4 rounded-[3px]">
                {slide.firstBtn}
              </button>
              <button className="border-[2px] border-yellow-500 text-white py-3 px-6 m-3 rounded-[3px]">
                {slide.secondBtn}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full relative">
      <div
        className="carousel max-w-full mx-auto relative"
        style={{
          backgroundImage: `url('${slides[currentIndex].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px", // Adjust height as needed
        }}
      >
        {/* Left Arrow */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white p-[10px] mx-[10px] bg-[rgba(0,0,0,0.5)]">
          <BiArrowFromRight size={30} onClick={prevSlide} />
        </div>

        {/* Right Arrow */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white p-[10px] mx-[10px] bg-[rgba(0,0,0,0.5)]">
          <BiArrowFromLeft size={30} onClick={nextSlide} />
        </div>

        {/* Caption */}
        {renderSlideContent(slides[currentIndex])}
      </div>
    </section>
  );
};

export default Main;
