import React from "react";
import ContactDetail from "../../Components/ContactDetail";
import Navbar from "../../Components/Layout/Navbar";
import Main from "../../Components/Main";
import Footer from "../../Components/Layout/Footer";
import SideBar from "../../Components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../../Components/ScrollTop";

const SingleNews = () => {
  return (
    <section className="max-w-[1350px] mx-auto">
      <ScrollToTop/>
      <ContactDetail />
      <Navbar />
      <Main page="News" />

      <div className="max-w-[1250px] mx-auto grid md:grid-cols-[auto_30%] grid-cols-1">
        <div className="mainSection">
          {/* SINGLE NEWS START */}
          <div className="flex flex-col px-[10px] my-[40px]">
            <img
              src="https://demo.themefisher.com/constra-bootstrap/images/news/news2.jpg"
              alt=""
            />
            <div className="flex py-[10px] space-x-[10px] justify-start opacity-70">
              <div className="sm:text-md text-sm">👤 Admin </div>
              <div className="sm:text-md text-sm">|</div>
              <div className="sm:text-md text-sm">📁 News </div>
              <div className="sm:text-md text-sm">|</div>
              <div className="sm:text-md text-sm">📅 June 14, 2016</div>
              <div className="sm:text-md text-sm">|</div>
              <div className="sm:text-md text-sm">💬 03 Comments</div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl font-bold py-[10px] opacity-90">
                We Just Completes $17.6 million Medical Clinic in Mid-Missouri
              </h1>
              <p className="sm:text-[16px] text-sm opacity-80 p-[10px]">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos quira tione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ue magnam aliquam quaerat
                voluptatem.
              </p>
              <p className="sm:text-[16px] text-sm opacity-80 p-[10px]">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos quira tione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ue magnam aliquam quaerat
                voluptatem.
              </p>
              <div className="bg-gray-100 p-[40px] border-l-[4px] border-yellow-400 m-[20px]">
                <p className="sm:text-[16px] text-sm opacity-60 ">
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
                <h3 className="pt-[20px] opacity-60">- Anger Mathe</h3>
              </div>
              <p className="sm:text-[16px] text-sm opacity-80 p-[10px]">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos quira tione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ue magnam aliquam quaerat
                voluptatem.
              </p>
              <div className="p-[10px] mb-[30px] flex justify-between">
                <div className="">
                  <button className="px-[15px] py-[10px] text-black rounded-[2px] sm:text-md text-sm border-[1px] border-gray-400 opacity-60 m-[2px]">
                    Construction
                  </button>
                  <button className="px-[15px] py-[10px] text-black rounded-[2px] sm:text-md text-sm border-[1px] border-gray-400 opacity-60 m-[2px]">
                    Safety
                  </button>
                  <button className="px-[15px] py-[10px] text-black rounded-[2px] sm:text-md text-sm border-[1px] border-gray-400 opacity-60 m-[2px]">
                    Planning
                  </button>
                </div>
                <div className="flex space-x-[14px] opacity-70">
                  <h3>Share : </h3>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
              </div>
              <div className="md:px-[20px] px-[10px] flex mx-[10px] mt-[50px]">
                <img
                  src="https://demo.themefisher.com/constra-bootstrap/images/news/avator1.png"
                  alt=""
                  className="md:max-w-[200px]"
                />
                <div className="md:px-[15px] px-[10px]">
                  <h1 className="md:text-xl text-md font-bold opacity-70">
                    Elton Themen{" "}
                    <span className="text-sm opacity-70 font-lightbold">
                      {" "}
                      | SITE ENGINEER
                    </span>
                  </h1>
                  <p className="opacity-70 py-[10px] md:text-md text-sm">
                    Lisicing elit, sed do eiusmod tempor ut labore et dolore
                    magna aliqua. Ut enim ad vene minim veniam, quis nostrud
                    exercitation nisi ex ea commodo.
                  </p>
                  <h3 className="md:text-md text-sm opacity-90 font-semibold hover:text-yellow-500 cursor-pointer">
                    Website: http://www.example.com
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* SINGLE NEWS END  */}

          {/* COMMENTS SECTOIN START  */}
          <div className="comments-section">
            <h1 className="md:text-3xl text-xl font-bold px-[20px]">07 COMMENTS</h1>
            <div className="md:px-[20px] px-[10px] flex mx-[10px] mt-[50px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/avator1.png"
                alt=""
                className="md:max-w-[200px]"
              />
              <div className="md:px-[15px] px-[10px]">
                <h1 className="md:text-xl text-md font-bold opacity-70">Elton Themen</h1>
                <p className="opacity-70 py-[10px] md:text-md text-sm">
                  Lisicing elit, sed do eiusmod tempor ut labore et dolore magna
                  aliqua. Ut enim ad vene minim veniam, quis nostrud
                  exercitation nisi ex ea commodo.
                </p>
                <h3 className="md:text-md text-sm opacity-90 font-semibold hover:text-yellow-500 cursor-pointer">
                  Reply
                </h3>
              </div>
            </div>
            <hr className="my-[50px]" />
            <div className="md:px-[20px] px-[10px] flex mx-[10px] my-[50px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/avator2.png"
                alt=""
                className="md:max-w-[200px]"
              />
              <div className="md:px-[15px] px-[10px]">
                <h1 className="md:text-xl text-md font-bold opacity-70">Elton Themen</h1>
                <p className="opacity-70 py-[10px] md:text-md text-sm">
                  Lisicing elit, sed do eiusmod tempor ut labore et dolore magna
                  aliqua. Ut enim ad vene minim veniam, quis nostrud
                  exercitation nisi ex ea commodo.
                </p>
                <h3 className="md:text-md text-sm opacity-90 font-semibold hover:text-yellow-500 cursor-pointer">
                  Reply
                </h3>
              </div>
            </div>
            <hr className="mx-[70px]" />

            <div className="md:px-[20px] px-[10px] flex mx-[10px] mt-[50px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/avator3.png"
                alt=""
                className="md:max-w-[200px]"
              />
              <div className="md:px-[15px] px-[10px]">
                <h1 className="md:text-xl text-md font-bold opacity-70">Elton Themen</h1>
                <p className="opacity-70 py-[10px] md:text-md text-sm">
                  Lisicing elit, sed do eiusmod tempor ut labore et dolore magna
                  aliqua. Ut enim ad vene minim veniam, quis nostrud
                  exercitation nisi ex ea commodo.
                </p>
                <h3 className="md:text-md text-sm opacity-90 font-semibold hover:text-yellow-500 cursor-pointer">
                  Reply
                </h3>
              </div>
            </div>
          </div>
          {/* COMMENTS SECTION END  */}

          {/* ADDING COMMENT SECTION START  */}

          <div className="addComment-section ">
            <h1 className="text-2xl font-semibold py-[20px] px-[10px]">
              ADD A COMMENT
            </h1>
            <div className="flex flex-col justify-center">
              <form action="">
                <div className="mx-[10px]">
                  <textarea
                    name=""
                    id=""
                    rows={10}
                    cols={71}
                    className="border-[1px]  focus:border-yellow-500 focus:outline-none p-[10px]"
                    placeholder="Your Comment"
                    style={{maxWidth:"100%"}}
                  ></textarea>
                </div>
                <input
                  type="text"
                  className="border-[1px] focus:border-yellow-500 p-[10px] m-[10px] focus:outline-none"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="border-[1px] focus:border-yellow-500 p-[10px] m-[10px] focus:outline-none"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="border-[1px] focus:border-yellow-500 p-[10px] m-[10px] focus:outline-none"
                  placeholder="Your Website"
                />
              </form>
            </div>
            <div className="px-[10px]">
              <button className="px-[15px] py-[10px] bg-yellow-500 text-white rounded-[4px] my-[30px]">
                POST COMMENT
              </button>
            </div>
          </div>

          {/* ADDING COMMENT SECTION END  */}
        </div>

        <div className="right-sideBar my-[40px]">
          <SideBar />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default SingleNews;
