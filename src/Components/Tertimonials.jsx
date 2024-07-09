import React, { useState } from "react";

const Tertimonials = () => {
  const [tNumber, setTNumber] = useState(1);

  const handleTertomonials = (index) => {
    setTNumber(index);
  };
  return (
    <section className="w-[100%]">
      <div className="up max-w-[1170px] mx-auto grid md:grid-cols-2 grid-cols-1 my-[60px]">
        {/* Left Section  */}
        <div className="left md:px-[50px] px-[20px] flex flex-col">
          <div className="">
            <h1 className="md:text-2xl font-bold">TERTIMONIALS</h1>
          </div>
          <div className="flex py-[20px] sm:flex-row flex-col">
            <div className="sm:pt-[30px] pt-[10px]">
              <svg
                className="h-8 sm:mb-3 mb-1 pl-[10px] pr-[50px] text-yellow-500 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <figure>
              <blockquote>
                <p className="sm:text-[18px] text-[14px] font-medium text-left text-gray-900 opacity-60 max-w-[400px] pt-[30px]">
                  Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application.
                </p>
              </blockquote>
              <figcaption className="flex mt-6 space-x-3">
                <img
                  className="w-[80px] rounded-sm"
                  src={`https://demo.themefisher.com/constra-bootstrap/images/clients/testimonial${tNumber}.png`}
                  alt="profile picture"
                />
                <div className="flex flex-col">
                  <h1 className="text-yellow-500 font-bold">WELDONE CASH</h1>
                  <h1 className="opacity-70">CEO First Choice</h1>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="text-center flex justify-center">
            <h1
              className="text-[10px] px-[5px] hover:text-yellow-500 cursor-pointer"
              onClick={() => handleTertomonials(1)}
            >
              O
            </h1>
            <h1
              className="text-[10px]  px-[5px] hover:text-yellow-500 cursor-pointer"
              onClick={() => handleTertomonials(2)}
            >
              O
            </h1>
            <h1
              className="text-[10px] px-[5px] hover:text-yellow-500 cursor-pointer"
              onClick={() => handleTertomonials(3)}
            >
              O
            </h1>
          </div>
        </div>

        {/* Right Section  */}
        <div className="right sm:pt-0 pt-[50px]">
          <div className="heading items-center text-center">
            <h1 className="md:text-3xl text-xl font-bold opacity-70 pb-[40px]">
              HAPPY CLIENTS
            </h1>
            <div className="flex flex-col justify-center sm:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-y-[10px] items-center text-center">
              <div className="border-[1px] border-gray-500 p-[20px] max-w-[150px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/clients/client1.png"
                  className="text-gray-500 w-[150px]"
                  alt=""
                />
              </div>
              <div className="border-[1px] border-gray-500 p-[20px] max-w-[150px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/clients/client2.png"
                  className="text-gray-500 w-[150px]"
                  alt=""
                />
              </div>
              <div className="border-[1px] border-gray-500 p-[20px] max-w-[150px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/clients/client3.png"
                  className="text-gray-500 w-[150px]"
                  alt=""
                />
              </div>
              <div className="border-[1px] border-gray-500 p-[20px] max-w-[150px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/clients/client4.png"
                  className="text-gray-500 w-[150px]"
                  alt=""
                />
              </div>
              <div className="border-[1px] border-gray-500 p-[20px] max-w-[150px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/clients/client5.png"
                  className="text-gray-500 w-[150px]"
                  alt=""
                />
              </div>
              <div className="border-[1px] border-gray-500 p-[20px] max-w-[150px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/clients/client6.png"
                  className="text-gray-500 w-[150px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[100%] mx-auto items-center grid md:grid-cols-[40%_60%] grid-cols-1 mb-[60px]">
        <div className="left bg-yellow-500 py-[30px] text-center max-w-[100%]">
          <h1 className="text-black text-xl font-bold">CAN WE HELP?</h1>
          <h1 className="text-white text-2xl font-bold">(+9) 847-291-4353</h1>
        </div>

        <div className="right flex md:flex-nowrap flex-wrap justify-around bg-gray-900 py-[35px] items-center max-w-[100%]">
          <div className="left">
            <h1 className="text-white font-bold text-xl">NEWSLETTER SIGN-UP</h1>
            <h3 className="text-white">Latest updates and news</h3>
          </div>
          <div className="right">
            <form action="" className="md:py-0 py-[20px]">
              <input
                type="search"
                className="sm:w-[300px] w-[200px] border-[1px] border-gray-400 bg-transparent px-[25px] py-[7px]"
                placeholder="your email and hit enter"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tertimonials;
