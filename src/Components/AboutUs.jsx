import React, { useState } from "react";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    setIsOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <section className="w-[100%] relative">
      <div className="max-w-[1350px] mx-auto bg-white ">
        {/* Section Between Main and About us  */}
        <div className="btw-section flex md:flex-nowrap flex-wrap justify-around max-w-[80%] mx-auto bg-yellow-500  md:py-[30px] py-[15px] absolute top-[-5%] left-[12%] items-center">
          <div className="md:text-xl text-[18px] font-bold text-white lg:pr-[40px] md:pr-[30px] pr-[20px] md:pl-[100px] pl-[50px]">
            WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
          </div>
          <div className="px-[50px]">
            <button className="bg-gray-900 rounded-[3px] text-white md:font-bold text-center lg:px-[20px] md:px-[10px] px-[10px]  md:py-[10px] py-[5px]">
              REQUEST QUOTE
            </button>
          </div>
        </div>

        {/* About Us Section Start  */}

        {/* About Us two major section  */}
        <div className="grid md:grid-cols-2 grid-cols-1 pt-[120px]">
          <div className="left md:pl-[130px] max-w-[500px] mx-auto px-[20px]">
            <h4 className="text-xl font-thin pb-[10px]">ABOUT US</h4>
            <h1 className="font-extrabold md:text-3xl text-2xl pb-[20px] opacity-80">
              WE DELIVER LANDMARK PROJECTS
            </h1>
            <p className="text-md opacity-85 pb-[20px]">
              We are rethoric question ran over her cheek When she reached the
              first <br /> hills of the Italic Mountains, she had a last view
              back on the skyline of her hometown Bookmarksgrove, the headline
              of Alphabet Village and the subline of her own road, the Line
              Lane.
            </p>
            <div className="services grid grid-cols-2">
              <div className="py-[20px]">
                <div className="pb-[50px] flex">
                  <h1 className="lg:text-4xl text-2xl opacity-80 pr-[10px]">🏆</h1>
                  <h1 className="lg:text-[18px] text-[12px] font-bold opacity-80">
                    WE'VE REPUTION FOR EXELLENCE
                  </h1>
                </div>
                <div className="pb-[50px] flex">
                <h1 className="lg:text-4xl text-2xl opacity-80 pr-[10px]">🏆</h1>
                <h1 className="lg:text-[18px] text-[12px] font-bold opacity-80">
                    GUIDED BY COMMITMENT
                  </h1>
                </div>
              </div>
              <div className="py-[20px]">
                <div className="pb-[50px] flex">
                <h1 className="lg:text-4xl text-2xl opacity-80 pr-[10px]">🏆</h1>
                <h1 className="lg:text-[18px] text-[12px] font-bold opacity-80">
                    WE BUILD PARTNERSHIPS
                  </h1>
                </div>
                <div className="pb-[50px] flex">
                <h1 className="lg:text-4xl text-2xl opacity-80 pr-[10px]">🏆</h1>
                <h1 className="lg:text-[18px] text-[12px] font-bold opacity-80">
                    A TEAM OF PROFESSIONALS
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="right max-w-[500px] mx-auto px-[20px]">
            <h4 className="font-extrabold md:text-3xl text-2xl pb-[20px] opacity-80 ">
              OUR VALUES
            </h4>
            <p className="text-md opacity-85 pb-[20px] pl-[5px]">
              Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur
              bitters. Pop-up occaecat taxidermy street art, tattooed beard
              literally.
            </p>
            <div className="dropdown pr-[20px] pl-[5px]">
              <div className="safety">
                <div
                  className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                  onClick={() => toggleDropdown(0)}
                >
                  <h1 className="font-bold text-[15px]">SAFETY</h1>
                  <p className="text-white px-[5px] py-[2px] rounded-[3px] bg-black group-hover:bg-yellow-500">
                    {isOpen[0] ? "−" : "+"}
                  </p>
                </div>
                <div
                  className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                    isOpen[0]
                      ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                      : "max-h-0"
                  }`}
                >
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata
                  </p>
                </div>
              </div>
              <div className="customer-service">
                <div
                  className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                  onClick={() => toggleDropdown(1)}
                >
                  <h1 className="font-bold text-[15px]">Customer Service</h1>
                  <p className="text-white px-[5px] py-[2px] rounded-[3px] bg-black group-hover:bg-yellow-500">
                    {isOpen[0] ? "−" : "+"}
                  </p>
                </div>
                <div
                  className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                    isOpen[1]
                      ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                      : "max-h-0"
                  }`}
                >
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata
                  </p>
                </div>
              </div>
              <div className="Integrity">
                <div
                  className="flex justify-between border-[1px] border-gray-400 px-[10px] py-[15px] mb-[2px] hover:text-yellow-500 group"
                  onClick={() => toggleDropdown(2)}
                >
                  <h1 className="font-bold text-[15px]">Integrity</h1>
                  <p className="text-white px-[5px] py-[2px] rounded-[3px] bg-black group-hover:bg-yellow-500">
                    {isOpen[2] ? "−" : "+"}
                  </p>
                </div>
                <div
                  className={`anwser px-[10px]  mb-[12px] answer overflow-hidden transition-all duration-500  sm:text-[16px] text-sm mt-[1px] opacity-80 ${
                    isOpen[2]
                      ? "max-h-screen pl-[10px] sm:py-[20px] py-[10px] border-[1px] border-gray-400"
                      : "max-h-0"
                  }`}
                >
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About us last Detail section  */}
        <div className="detail max-w-[100%] mx-auto bg-[#252525]">
          <div className="max-w-[900px] mx-auto flex sm:flex-nowrap flex-wrap sm:flex-row lg:justify-between py-[50px] text-white flex-col justify-center text-center">
            <div className="total-projects pr-[10px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact1.png"
                alt=""
                className="max-w-[120px] mx-auto"
              />
              <h1 className="text-5xl font-bold text-center py-[15px]">1789</h1>
              <h3 className="text-xl font-bold text-yellow-500">TOTAL PROJECTS</h3>
            </div>
            <div className="staff-members pl-[10px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact2.png"
                alt=""
                className="max-w-[120px] mx-auto"
              />
              <h1 className="text-5xl font-bold text-center py-[15px]">647</h1>
              <h3 className="text-xl font-bold text-yellow-500">STAFF MEMBERS</h3>
            </div>
            <div className="hours-of-work pl-[10px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact3.png"
                alt=""
                className="max-w-[120px] mx-auto"
              />
              <h1 className="text-5xl font-bold text-center py-[15px]">4000</h1>
              <h3 className="text-xl font-bold text-yellow-500">HOURS OF WORK</h3>
            </div>
            <div className="countries-experience pl-[10px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact4.png"
                alt=""
                className="max-w-[120px] mx-auto"
              />
              <h1 className="text-5xl font-bold text-center py-[15px]">44</h1>
              <h3 className="text-xl font-bold text-yellow-500">Countries Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
