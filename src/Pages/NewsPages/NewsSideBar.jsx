import React from "react";
import ContactDetail from "../../Components/ContactDetail";
import Navbar from "../../Components/Layout/Navbar";
import Main from "../../Components/Main";
import Footer from "../../Components/Layout/Footer";
import SideBar from "../../Components/SideBar";
import ScrollToTop from "../../Components/ScrollTop";

const NewsSideBar = ({ side = "left" }) => {
  return (
    <section className="max-w-[1350px] mx-auto">
      <ScrollToTop/>
      <ContactDetail />
      <Navbar />
      <Main page="News" />

      {/* Left Side sideBar  */}
      {side === "left" && (
        <div className="max-w-[1250px] mx-auto grid md:grid-cols-[30%_auto] grid-cols-1 py-[70px]">
          <div className="md:order-1 order-2">
            <SideBar />
          </div>

          <div className="mainSection md:order-2 order-1">
            {/* First Section  */}
            <div className="first flex flex-col px-[10px] mb-[20px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/news1.jpg"
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
                <p className="opacity-80 sm:text-md text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur ...
                </p>
                <div className="py-[20px] mb-[30px]">
                  <button className="px-[15px] py-[10px] text-white rounded-[4px] bg-yellow-400 hover:bg-blue-500 sm:text-md text-sm">
                    CONTINUE READING
                  </button>
                </div>
                <hr />
              </div>
            </div>

            {/* Second Section  */}
            <div className="second flex flex-col px-[10px] my-[40px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/news3.jpg"
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
                <p className="sm:text-md text-sm opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur ...
                </p>
                <div className="py-[20px] mb-[30px]">
                  <button className="px-[15px] py-[10px] text-white rounded-[4px] bg-yellow-400 hover:bg-blue-500 sm:text-md text-sm">
                    CONTINUE READING
                  </button>
                </div>
                <hr />
              </div>
            </div>

            {/* Third Section  */}
            <div className="Third flex flex-col px-[10px] my-[40px]">
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
                <p className="sm:text-md text-sm opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur ...
                </p>
                <div className="py-[20px] mb-[30px]">
                  <button className="px-[15px] py-[10px] text-white rounded-[4px] bg-yellow-400 hover:bg-blue-500 sm:text-md text-sm">
                    CONTINUE READING
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Right Side sideBar  */}
      {side === "right" && (
        <div className="max-w-[1250px] mx-auto grid md:grid-cols-[auto_30%] grid-cols-1 py-[70px]">

          {/* Main-Section  */}
          <div className="mainSection">
            {/* First Section  */}
            <div className="first flex flex-col px-[10px] mb-[20px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/news1.jpg"
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
                <p className="opacity-80 sm:text-md text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur ...
                </p>
                <div className="py-[20px] mb-[30px]">
                  <button className="px-[15px] py-[10px] text-white rounded-[4px] bg-yellow-400 hover:bg-blue-500 sm:text-md text-sm">
                    CONTINUE READING
                  </button>
                </div>
                <hr />
              </div>
            </div>

            {/* Second Section  */}
            <div className="second flex flex-col px-[10px] my-[40px]">
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/news/news3.jpg"
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
                <p className="sm:text-md text-sm opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur ...
                </p>
                <div className="py-[20px] mb-[30px]">
                  <button className="px-[15px] py-[10px] text-white rounded-[4px] bg-yellow-400 hover:bg-blue-500 sm:text-md text-sm">
                    CONTINUE READING
                  </button>
                </div>
                <hr />
              </div>
            </div>

            {/* Third Section  */}
            <div className="Third flex flex-col px-[10px] my-[40px]">
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
                <p className="sm:text-md text-sm opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur ...
                </p>
                <div className="py-[20px] mb-[30px]">
                  <button className="px-[15px] py-[10px] text-white rounded-[4px] bg-yellow-400 hover:bg-blue-500 sm:text-md text-sm">
                    CONTINUE READING
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>

          {/* Right SideBar  */}
          <div className="pl-[20px]">
            <SideBar />
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default NewsSideBar;
