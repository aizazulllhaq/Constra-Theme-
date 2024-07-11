import React, { useState } from "react";
import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";
import ScrollToTop from "../Components/ScrollTop";

const Typography = () => {
  const [isHide, setIsHide] = useState([false, false]);

  const hiddenElement = (index) => {
    setIsHide((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <section className="max-w-[1350px] mx-auto">
      <ScrollToTop/>
      <ContactDetail />
      <Navbar />
      <Main page="Typography" />

      <div className="upperSection grid md:grid-cols-2 grid-cols-1 px-[10px]">
        <div className="left p-[20px]">
          <h1 className="md:text-3xl text-2xl font-semibold pb-[40px]">HEADING</h1>
          <div className="h1 py-[10px]">
            <h1 className="md:text-4xl text-2xl font-bold">h1. Heading 1</h1>
            <p className="opacity-70 p-[10px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly.
            </p>
          </div>
          <div className="h2 py-[10px]">
            <h2 className="md:text-4xl text-xl font-bold">h2. Heading 2</h2>
            <p className="opacity-70 p-[10px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly.
            </p>
          </div>
          <div className="h3 py-[10px]">
            <h3 className="md:text-3xl text-2xl font-bold">h3. Heading 3</h3>
            <p className="opacity-70 p-[10px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly.
            </p>
          </div>
          <div className="h4 py-[10px]">
            <h4 className="md:text-2xl text-2xl font-bold">h4. Heading 4</h4>
            <p className="opacity-70 p-[10px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly.
            </p>
          </div>
          <div className="h5 py-[10px]">
            <h5 className="md:text-2xl text-xl font-bold">h5. Heading 5</h5>
            <p className="opacity-70 p-[10px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly.
            </p>
          </div>
          <div className="h6 py-[10px]">
            <h6 className="md:text-xl text-xl font-bold">h6. Heading 6</h6>
            <p className="opacity-70 p-[10px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly.
            </p>
          </div>
        </div>
        <div className="right p-[20px]">
          <div className="up">
            <h1 className="md:text-3xl text-2xl font-semibold pb-[40px]">PARAGRAPH</h1>
            <p className="py-[20px]">
              Lorem ipsum dolor sit amet,{" "}
              <span className="bg-pink-100 font-semibold">a mark here</span>{" "}
              adipisicing elit. Atque, iusto, minus sequi natus nesciunt rerum
              tenetur corrupti autem officiis fugiat expedita laudantium ea
              aspernatur
            </p>
            <p className="py-[10px]">
              <span className="text-green-600 font-semibold">
                Consectetur adipisicing
              </span>{" "}
              elit. Corrupti, aliquam, voluptates, nulla, blanditiis totam{" "}
              <span className="text-red-500 font-semibold">
                voluptatem voluptatum quod ipsa debitis non
              </span>{" "}
              ab odio natus.
            </p>
          </div>
          <div className="down py-[20px]">
            <h1 className="md:text-3xl text-2xl font-bold py-[30px]">
              BLACKQUOTE
            </h1>
            {/* First  */}
            <div className="first p-[10px] bg-gray-100 border-l-[4px] border-yellow-400 mt-[20px]">
              <div className="py-[10px] mb-[-30px]">
                <svg
                  className="h-8 sm:mb-3 mb-1 pl-[10px] pr-[50px] text-gray-200 "
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
              <div className="sm:px-[50px] px-[20px]">
                <p className="opacity-70 py-[5px] sm:text-md text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante quam est corrupti ut blanditiis
                  sint aperiam placeatab.
                </p>
                <h1 className="py-[10px] opacity-50 sm:text-md text-sm">__ Someone famous in </h1>
                <h3 className="px-[10px] opacity-50 sm:text-sm text-[12px]">Source Title </h3>
              </div>
            </div>
            {/* Second  */}
            <div className="second p-[10px] bg-gray-100 border-t-[4px] border-yellow-400 mt-[20px] text-center">
              <div className="py-[10px] mb-[-30px] flex justify-center ">
                <svg
                  className="h-8 sm:mb-3 mb-1 pl-[10px] pr-[50px] text-gray-200 "
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
              <div className="sm:px-[50px] px-[20px]">
                <p className="opacity-70 py-[5px] sm:text-md text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante quam est corrupti ut blanditiis
                  sint aperiam placeatab.
                </p>
                <h1 className="py-[10px] opacity-50 sm:text-md text-sm">__ Someone famous in </h1>
                <h3 className="px-[10px] opacity-50 sm:text-sm text-[12px]">Source Title </h3>
              </div>
            </div>

            {/* Third  */}
            <div className="third p-[10px] bg-gray-100 border-r-[4px] border-yellow-400 mt-[20px] text-end">
              <div className="py-[10px] mb-[-30px] flex justify-end">
                <svg
                  className="h-8 sm:mb-3 mb-1 pl-[10px] pr-[50px] text-gray-200"
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
              <div className="sm:px-[50px] px-[20px]">
                <p className="opacity-70 py-[5px] sm:text-md text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante quam est corrupti ut blanditiis
                  sint aperiam placeatab.
                </p>
                <h1 className="py-[10px] opacity-50 sm:text-md text-sm">__ Someone famous in </h1>
                <h3 className="px-[10px] opacity-50 sm:text-sm text-[12px]">Source Title </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="downSection max-w-[1100px] mx-auto  sm:px-0 px-[10px]">
        <h1 className="sm:text-3xl text-2xl font-semibold opacity-80 py-[20px]">
          ALERTS
        </h1>
        <div className="alerts">
          <div
            className={`first bg-green-300  rounded-[3px] flex justify-between overflow-hidden ${
              isHide[0] ? "max-h-0 " : "max-h-screen p-[10px] my-[20px]"
            }`}
          >
            <h2>
              <span className="font-semibold sm:text-md text-sm">Holy guacamole!</span> You should
              check in on some of those fields below.
            </h2>
            <span
              className="font-bold cursor-pointer"
              onClick={() => hiddenElement(0)}
            >
              X
            </span>
          </div>
          <div
            className={`second bg-orange-200 rounded-[3px] flex justify-between  overflow-hidden ${
              isHide[1] ? "max-h-0" : "max-h-screen p-[10px] my-[20px]"
            }`}
          >
            <h2>
              <span className="font-semibold sm:text-md text-sm">Holy guacamole!</span> You should
              check in on some of those fields below.
            </h2>
            <span
              className="font-bold cursor-pointer"
              onClick={() => hiddenElement(1)}
            >
              X
            </span>
          </div>
          <div className="third bg-red-200 p-[20px] my-[20px] rounded-[3px]">
            <h1 className="font-bold sm:text-xl text-md py-[10px]">
              A SAMPLE DANGER ALERT!
            </h1>
            <p className="py-[10px] sm:text-md text-sm">
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr className="my-[5px] border-t-[1px] border-gray-900 opacity-40" />
            <p className="py-[8px] sm:text-md text-sm">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Typography;
