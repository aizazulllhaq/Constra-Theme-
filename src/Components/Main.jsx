import React, { useState, useEffect } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import RecentProjects from "./RecentProjects";

const Main = ({ page = "Home" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    setIsOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

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

  useEffect(() => {
    const autoSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    const id = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(id);
    };
  }, [currentIndex]);

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
          <div className="absolute bottom-[30%] md:left-[20%] left-[20%] max-w-[60%] md:max-w-[80%] mx-auto text-white p-4 text-center">
            <p className="md:text-5xl sm:text-3xl text-xl font-thin ">
              {slide.upperSmHeading}
            </p>
            <h2 className="md:text-6xl sm:text-3xl text-2xl font-extrabold py-[18px]">
              {slide.centerLgHeading}
            </h2>
            <div className="mt-4">
              <button className="bg-yellow-500 text-white py-3 px-4 mr-4 rounded-[5px] font-bold md:mb-[3px] mb-[10px]">
                {slide.firstBtn}
              </button>
              <button className="border-[2px] border-yellow-500 text-white py-3 px-3 rounded-[5px] font-bold">
                {slide.secondBtn}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="absolute bottom-[25%] left-[7%] max-w-[1170px] mx-auto text-white p-4">
            <p className="md:text-xl text-md bg-yellow-500 font-semibold px-[10px] py-[6px] mb-[17px] rounded-[2px] md:max-w-[245px] max-w-[200px]">
              {slide.upperSmHeading}
            </p>
            <h2 className="md:text-4xl sm:text-2xl text-xl font-thin mb-[17px]">
              {slide.centerMdHeading}
            </h2>
            <h2 className="md:text-6xl sm:text-3xl text-2xl font-extrabold mb-[27px]">
              {slide.downLgHeading}
            </h2>
            <div className="mt-4">
              <button className="border-[2px] border-yellow-500 font-bold rounded-[3px] text-white py-2 px-4">
                {slide.btn}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="absolute bottom-[20%] sm:right-0 right-[-30%] w-full text-white py-4 pr-[150px] text-end">
            <p className="md:text-4xl sm:text-2xl text-xl font-thin mb-[10px]">
              {slide.upperSmHeading}
            </p>
            <h2 className="md:text-6xl sm:text-4xl text-2xl font-extrabold my-[17px]">
              {slide.centerLgHeading}
            </h2>
            <p className="md:text-xl text-md my-[19px]">{slide.downSmText}</p>
            <div className="mt-4 flex sm:flex-row flex-col justify-end">
              <button className="bg-yellow-500 text-white sm:py-[5px] md:px-6 py-[10px] rounded-[3px] sm:mr-[15px] sm:mb-0 mb-[10px]">
                {slide.firstBtn}
              </button>
              <button className="border-[2px] border-yellow-500 text-white sm:py-[15px] py-[10px] sm:px-[30px] rounded-[3px]">
                {slide.secondBtn}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const aboutusPageContent = [
    {
      id: 1,
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/slider-pages/slide-page1.jpg",
      text: "PERFORMANCE",
    },
    {
      id: 2,
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/slider-pages/slide-page2.jpg",
      text: "LEADERSHIP",
    },
    {
      id: 3,
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/slider-pages/slide-page3.jpg",
      text: "RELATIONSHIPS",
    },
  ];

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? aboutusPageContent.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === aboutusPageContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const twoLeadersTestonomials = [
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team1.jpg",
      h1: "NATS STEMAN",
      h2: "Chief Executive Officer",
      paragraph:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team2.jpg",
      h1: "NATS STEMAN",
      h2: "Chief Executive Officer",
      paragraph:
        "Nats Stenman began his career in construction with boots on the ground",
    },
  ];

  const fourLeadersTestonomials = [
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team3.jpg",
      h1: "NATS STEMAN",
      h2: "Chief Executive Officer",
      paragraph:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team4.jpg",
      h1: "NATS STEMAN",
      h2: "Chief Executive Officer",
      paragraph:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team6.jpg",
      h1: "NATS STEMAN",
      h2: "Chief Executive Officer",
      paragraph:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team5.jpg",
      h1: "NATS STEMAN",
      h2: "Chief Executive Officer",
      paragraph:
        "Nats Stenman began his career in construction with boots on the ground",
    },
  ];

  const testonomials = [
    {
      paragraph:
        " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ",
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/clients/testimonial1.png",
      h1: "GABRIEL DENIS",
      h2: "Chairman Okt Industries",
    },
    {
      paragraph:
        " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ",
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/clients/testimonial2.png",
      h1: "GABRIEL DENIS",
      h2: "Chairman Okt Industries",
    },
    {
      paragraph:
        " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ",
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/clients/testimonial3.png",
      h1: "GABRIEL DENIS",
      h2: "Chairman Okt Industries",
    },
  ];

  const faqsSideBar = [
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/news/news1.jpg",
      h1: "WE JUST COMPLETED $17.6 MILLION MEDICAL CLINIC IN MIDMISSOURI",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/news/news2.jpg",
      h1: "Thandler Airport Water Reclamation Facility Expansion Project Named",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/news/news3.jpg",
      h1: "Silicon Bench And Cornike Begin Construction Solar Facilities",
    },
  ];

  const pricingCards = [
    {
      firstHeading: "Basic Plan",
      secondHeading: "$9.99/month",
      paragraph: "Great for individuals just getting started.",
    },
    {
      firstHeading: "Pro Plan",
      secondHeading: "$19.99/month",
      paragraph: "Ideal for professionals who need more features.",
    },
    {
      firstHeading: "Enterprise Plan",
      secondHeading: "$49.99/month",
      paragraph: "Perfect for large teams and organizations.",
    },
  ];

  const commonFeatures = [
    "Project Management for Owners",
    "Pre-construction feasibility",
    "On-site representation",
    "Quality control inspections",
    "Schedule claim preparation/defense",
    "Project phasing development",
  ];

  return (
    <section className="w-full relative">
      {page == "Home" && (
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
      )}

      {page == "About" && (
        <div className="aboutSection w-full overflow-hidden">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[20%] top-[10%] sm:left-[40%] left-[25%] text-white">
              <h1 className="text-4xl font-extrabold text-center py-[10px]">
                ABOUT
              </h1>
              <p className="font-semibold sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 bg-[f8f9fa]">
            <div className="left sm:pl-[50px] pl-[10px] py-[40px]">
              <h1 className="sm:text-3xl text-2xl font-bold opacity-80 py-[10px]">
                WHO WE ARE
              </h1>
              <p className="sm:text-md text-sm opacity-70 sm:pt-[30px] pt-[10px]">
                when Gregor Samsa woke from troubled dreams, he found himself
                transformed in his bed into a horrible vermin.
              </p>
              <p className="my-[20px] p-[20px] border-l-[3px] border-yellow-500 bg-gray-50 opacity-60 sm:text-md text-sm">
                Semporibus autem quibusdam et aut officiis debitis aut rerum est
                aut optio cumque nihil necessitatibus autemn ec tincidunt nunc
                posuere ut
              </p>
              <p className="sm:text-md text-sm opacity-70">
                He lay on his armour-like back, and if he lifted. ultrices
                ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn’t
                anything embarrassing.
              </p>
            </div>
            <div className="right">
              <div className="relative sm:p-[50px] p-[10px] max-w-[100%]">
                <img
                  src={aboutusPageContent[imageIndex].image}
                  alt=""
                  className=""
                />
                {/* <h1 className="absolute top-1/2 right-1/3 text-white text-3xl font-bold bg-[rgba(0,0,0,0.6)] px-[10px] py-[8px]">
                  {aboutusPageContent[imageIndex].text}
                </h1> */}

                <div className="absolute sm:left-[8%] left-0 top-[50%] transform -translate-y-1/2 text-white sm:py-[10px] py-[4px] bg-[rgba(0,0,0,0.5)] hover:bg-yellow-500">
                  <BiArrowFromRight size={30} onClick={handlePrevImage} />
                </div>
                <div className="absolute top-[45%] left-[30%]">
                  <h1 className="sm:text-3xl px-[10px] py-[5px] text-white bg-[rgba(0,0,0,0.8)]">
                    {aboutusPageContent[imageIndex].text}
                  </h1>
                </div>
                <div className="absolute top-[50%] sm:right-[11%] right-0 px-2 ">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white sm:py-[10px] py-[4px] bg-[rgba(0,0,0,0.5)] hover:bg-yellow-500">
                    <BiArrowFromLeft size={30} onClick={handleNextImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {page == "OurLeaders" && (
        <div className="testonomialsSection w-full overflow-hidden">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[10%] top-[10%] sm:left-[40%] left-[25%] text-white">
              <h1 className="text-4xl font-extrabold text-center py-[10px]">
                OUT TEAM
              </h1>
              <p className="font-semibold sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <div className="bg-[f8f9fa] py-[80px]">
            <h1 className="sm:text-3xl text-xl font-bold opacity-80 text-center pb-[40px]">
              OUR LEADERSHIPS
            </h1>
            <div className="max-w-[550px] mx-auto md:flex justify-center grid sm:grid-cols-2 grid-cols-1 md:space-x-[40px]">
              {twoLeadersTestonomials.map((leader, index) => (
                <div
                  key={index}
                  className="card flex sm:flex-row flex-col flex-wrap justify-center items-center p-[10px]"
                >
                  <img src={leader.image} alt={leader.h2} />
                  <h1 className="text-xl font-semibold py-[5px]">
                    {leader.h1}
                  </h1>
                  <h2 className="text-md opacity-70">{leader.h2}</h2>
                  <p className="opacity-80 sm:max-w-[250px] text-center">
                    {leader.paragraph}
                  </p>
                </div>
              ))}
            </div>
            <div className="down"></div>
            <div className="max-w-[1200px] mx-auto up sm:flex justify-center grid grid-cols-1 space-x-[25px] my-[20px]">
              {fourLeadersTestonomials.map((leader, index) => (
                <div
                  key={index}
                  className="card flex sm:flex-row flex-col flex-wrap justify-center text-center p-[10px]"
                >
                  <img src={leader.image} alt={leader.h2} />
                  <h1 className="text-xl font-semibold py-[5px]">
                    {leader.h1}
                  </h1>
                  <h2 className="text-md opacity-70">{leader.h2}</h2>
                  <p className="opacity-80 sm:max-w-[250px]">
                    {leader.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page == "Testonomials" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[10%] top-[10%] sm:left-[40%] left-[25%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                TESTOMONIALS
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] mx-auto">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-center text-black font-extrabold opacity-70 py-[50px]">
              WHAT PEOPLE SAID
            </h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-[30px]">
              {testonomials.map((item, index) => (
                <div
                  key={index}
                  className="items-center flex flex-col justify-center sm:mx-[10px] mx-[20px] sm:my-0 my-[20px]"
                >
                  <p className="text-[15px] text-center opacity-70 p-[15px] border-[2px] border-yellow-500">
                    {item.paragraph}
                  </p>
                  <img
                    src={item.image}
                    alt={item.h1}
                    className="mt-[20px] rounded-[5px]"
                  />
                  <h1 className="pt-[10px] text-yellow-500 font-bold ">
                    {item.h1}
                  </h1>
                  <h2 className="opacity-70">{item.h2}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page == "FAQ" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[10%] top-[10%] sm:left-[40%] left-[25%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                FAQ
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] mx-auto grid sm:grid-cols-[70%_auto] grid-cols-1 py-[50px]">
            <div className="">
              <div className="lg:px-0 lg:pr-[70px] px-[20px] pb-[20px]">
                <h4 className="font-bold md:text-2xl text-2xl pb-[20px] opacity-80 ">
                  Construction general
                </h4>
                <div className="dropdown pr-[20px] pl-[5px]">
                  <div className="safety">
                    <div
                      className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                      onClick={() => toggleDropdown(0)}
                    >
                      <h1 className="font-bold text-[15px]">
                        DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION
                        SITES ?
                      </h1>
                    </div>
                    <div
                      className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                        isOpen[0]
                          ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                          : "max-h-0"
                      }`}
                    >
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                  <div className="customer-service">
                    <div
                      className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                      onClick={() => toggleDropdown(1)}
                    >
                      <h1 className="font-bold text-[15px]">
                        WHAT ARE THE FIRST AID REQUIREMENT FOR SITES ?
                      </h1>
                    </div>
                    <div
                      className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                        isOpen[1]
                          ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                          : "max-h-0"
                      }`}
                    >
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                  <div className="Integrity">
                    <div
                      className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                      onClick={() => toggleDropdown(2)}
                    >
                      <h1 className="font-bold text-[15px]">
                        WHAT IS AN APPOINTED PERSON ?
                      </h1>
                    </div>
                    <div
                      className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                        isOpen[2]
                          ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                          : "max-h-0"
                      }`}
                    >
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:px-0 lg:pr-[70px] px-[20px] py-[20px]">
                <h4 className="font-bold md:text-2xl text-2xl pb-[20px] opacity-80">
                  SAFETY
                </h4>
                <div className="dropdown pr-[20px] pl-[5px]">
                  <div className="safety">
                    <div
                      className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                      onClick={() => toggleDropdown(0)}
                    >
                      <h1 className="font-bold text-[15px]">
                        MARURIS RHONCUS PRETUIM PORTITTOR CRAS SCELERISQUE
                        COMMODO ?
                      </h1>
                    </div>
                    <div
                      className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                        isOpen[0]
                          ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                          : "max-h-0"
                      }`}
                    >
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                  <div className="customer-service">
                    <div
                      className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                      onClick={() => toggleDropdown(1)}
                    >
                      <h1 className="font-bold text-[15px]">
                        WHAT ARE THE FIRST AID REQUIREMENTS FOR SITES ?
                      </h1>
                    </div>
                    <div
                      className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                        isOpen[1]
                          ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                          : "max-h-0"
                      }`}
                    >
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                  <div className="Integrity">
                    <div
                      className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                      onClick={() => toggleDropdown(2)}
                    >
                      <h1 className="font-bold text-[15px]">
                        WHAT IS AN APPONTED PERSON ?
                      </h1>
                    </div>
                    <div
                      className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                        isOpen[2]
                          ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                          : "max-h-0"
                      }`}
                    >
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidata
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-sideBar max-w-[700px] mx-auto sm:px-0 px-[20px]">
              <h1 className="sm:text-2xl font-bold opacity-80 border-l-[2px] border-yellow-500 px-[10px] mb-[20px]">
                RECENT POSTS
              </h1>
              {faqsSideBar.map((news, index) => (
                <div
                  key={index}
                  className="news flex justify-between py-[15px]"
                >
                  <img
                    src={news.image}
                    alt={news.h1}
                    className="sm:max-w-[100px] max-w-[60px]"
                  />
                  <h3 className="sm:text-sm text-[12px] font-bold pl-[5px] opacity-80">
                    {news.h1}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page == "Pricing" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[10%] top-[10%] sm:left-[40%] left-[25%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                PRICING
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <div className="">
            <div className="heading text-center my-[40px]">
              <h2 className="text-2xl font-thin ">GRAP THE PACKAGES</h2>
              <h1 className="md:text-4xl sm:text-2xl text-xl text-black font-extrabold opacity-70">
                PRICING
              </h1>
            </div>
            <div className="max-w-[1050px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {pricingCards.map((card, index) => (
                <div key={index} className="w-full p-4">
                  <div
                    className={`${
                      index == 1 ? "bg-yellow-500" : "bg-gray-800"
                    } text-white  rounded-t-[7px] px-[20px] py-[10px]`}
                  >
                    <h1 className="text-2xl font-bold mb-2">
                      {card.firstHeading}
                    </h1>
                    <h2 className="text-xl mb-4">{card.secondHeading}</h2>
                    <p className="mb-6">{card.paragraph}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    {commonFeatures.map((feature, i) => (
                      <p
                        key={i}
                        className="mb-2 text-center py-[10px] opacity-70"
                      >
                        {feature}
                      </p>
                    ))}
                    <div className="btn text-center pt-[10px]">
                      <button
                        className={`text-white px-[15px] py-[10px] rounded-[3px] ${
                          index == 1 ? "bg-yellow-500" : "bg-black"
                        }`}
                      >
                        ORDER NOW
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            s
          </div>
        </div>
      )}

      {page == "Projects" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[3%] md:top-[10%] top-[5%] sm:left-[40%] left-[25%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                PROJECTS
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <RecentProjects page="ProjectsPage" />
        </div>
      )}

      {page == "Project" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[3%] md:top-[10%] top-[10%] sm:left-[40%] left-[20%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                PROJECT
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>

          <div className="w-[100%]">
            <div className="max-w-[1100px] mx-auto grid md:grid-cols-[60%_auto] grid-cols-1 sm:gap-[50px] sm:p-0 p-[10px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/projects/project5.jpg"
                alt=""
                className="sm:m-[20px]"
              />
              <div className="m-[20px]">
                <div className="heading">
                  <h1 className="md:text-3xl font-bold opacity-80 py-[10px]">
                    CAPITAL TELTWAY BUILDING
                  </h1>
                  <p className="opacity-70 py-[10px]">
                    Morbi turpis nisl, auctor ut nisl vel, pellentesque euismod
                    nunc nunc accumsan imperdiet.
                  </p>
                </div>
                <div className="details flex flex-col">
                  <div className="px-[20px] py-[10px]">
                    <h1 className="text-md opacity-80 font-semibold py-[5px]">
                      Client
                    </h1>
                    <p className="opacity-70">Pransbay Powers Authority</p>
                  </div>
                  <div className="px-[20px] pb-[10px]">
                    <h1 className="text-md opacity-80 font-semibold py-[5px]">
                      Architect
                    </h1>
                    <p className="opacity-70">Dlarke Pelli Incorp</p>
                  </div>
                  <div className="px-[20px] pb-[10px]">
                    <h1 className="text-md opacity-80 font-semibold py-[5px]">
                      Location
                    </h1>
                    <p className="opacity-70">McLean, VA</p>
                  </div>
                  <div className="px-[20px] pb-[10px]">
                    <h1 className="text-md opacity-80 font-semibold py-[5px]">
                      Size
                    </h1>
                    <p className="opacity-70"></p>
                  </div>
                  <div className="px-[20px] pb-[10px]">
                    <h1 className="text-md opacity-80 font-semibold py-[5px]">
                      Year Completed
                    </h1>
                    <p className="opacity-70">2015</p>
                  </div>
                  <div className="px-[20px] pb-[10px]">
                    <h1 className="text-md opacity-80 font-semibold py-[5px]">
                      Categories
                    </h1>
                    <p className="opacity-70">Commercial , Interrior</p>
                  </div>
                  <div className="btn px-[20px] pb-[10px] py-[20px]">
                    <button className="px-[15px] py-[10px] text-white bg-yellow-500 hover:bg-blue-500">
                      VIEW PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {page == "Services" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[3%] md:top-[30%] top-[35%] sm:left-[40%] left-[30%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                SERVICES
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>
        </div>
      )}

      {page == "Typography" && (
        <div className="w-full">
          <img
            className="relative inset-0 w-full h-[300px] object-cover"
            src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
          />
          <div className="content absolute top-[30%] sm:left-[40%] left-[25%] text-white">
            <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
              TYPOGRAPHY
            </h1>
            <p className="font-semibold text-center sm:text-sm text-[12px]">
              HOME / COMPANY / ABOUT US
            </p>
          </div>
        </div>
      )}

      {page == "Service" && (
        <div className="">
          <div className="w-full">
            <img
              className="relative inset-0 w-full h-[300px] object-cover"
              src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
            />
            <div className="content absolute sm:top-[3%] md:top-[30%] top-[35%] sm:left-[40%] left-[30%] text-white">
              <h1 className="sm:text-4xl text-xl font-extrabold text-center py-[10px]">
                SERVICE
              </h1>
              <p className="font-semibold text-center sm:text-sm text-[12px]">
                HOME / COMPANY / ABOUT US
              </p>
            </div>
          </div>
        </div>
      )}

      {page == "404" && (
        <div className="w-full">
          <img
            className="relative inset-0 w-full h-[300px] object-cover"
            src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
          />
          <div className="content absolute top-[40%] sm:left-[40%] left-[20%] text-white">
            <h1 className="sm:text-4xl text-2xl font-extrabold text-center py-[10px]">
              PAGE NOT FOUND
            </h1>
            <p className="font-semibold text-center sm:text-sm text-[12px]">
              HOME / COMPANY / ABOUT US
            </p>
          </div>
        </div>
      )}

      {page == "News" && (
        <div className="w-full">
          <img
            className="relative inset-0 w-full h-[300px] object-cover"
            src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
          />
          <div className="content absolute top-[40%] sm:left-[40%] left-[20%] text-white">
            <h1 className="sm:text-4xl text-2xl font-extrabold text-center py-[10px]">
              NEWS
            </h1>
            <p className="font-semibold text-center sm:text-sm text-[12px]">
              HOME / COMPANY / ABOUT US
            </p>
          </div>
        </div>
      )}

      {page == "contactPage" && (
        <div className="w-full">
          <img
            className="relative inset-0 w-full h-[300px] object-cover"
            src="https://demo.themefisher.com/constra-bootstrap/images/banner/banner1.jpg"
          />
          <div className="content absolute top-[40%] sm:left-[40%] left-[20%] text-white">
            <h1 className="sm:text-4xl text-2xl font-extrabold text-center py-[10px]">
              CONTACT
            </h1>
            <p className="font-semibold text-center sm:text-sm text-[12px]">
              HOME / COMPANY / ABOUT US
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
