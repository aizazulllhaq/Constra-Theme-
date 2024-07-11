import React from "react";

const SideBar = () => {
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

  return (
    <div className="sideBar">
      <div className="right-sideBar max-w-[700px] mx-auto md:px-0 px-[20px]">
        <h1 className="sm:text-xl font-bold opacity-80 border-l-[2px] border-yellow-500 px-[10px] mb-[20px]">
          RECENT POSTS
        </h1>
        {faqsSideBar.map((news, index) => (
          <div key={index} className="news flex justify-between py-[15px]">
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

        {/* CATEGORIES  */}

        <div className="categories my-[20px]">
          <h1 className="text-xl font-bold opacity-80 border-l-[4px] border-yellow-400 px-[25px] py-[10px]">
            CATEGORIES
          </h1>
          <ul className="p-[25px] space-y-[15px] opacity-80">
            <li className="hover:text-yellow-500 cursor-pointer">
              Construction
            </li>
            <hr />
            <li className="hover:text-yellow-500 cursor-pointer">Commercial</li>
            <hr />

            <li className="hover:text-yellow-500 cursor-pointer">Building</li>
            <hr />

            <li className="hover:text-yellow-500 cursor-pointer">Structure</li>
            <hr />
            <li className="hover:text-yellow-500 cursor-pointer">Safety</li>
          </ul>
        </div>

        {/* ARCHIVES  */}
        <div className="archieves my-[20px]">
          <h1 className="text-xl font-bold opacity-80 border-l-[4px] border-yellow-400 px-[25px] py-[10px]">
            ARCHIVES
          </h1>
          <ul className="p-[25px] space-y-[15px] opacity-80">
            <li className="hover:text-yellow-500 cursor-pointer">
              Febuary 2018
            </li>
            <hr />
            <li className="hover:text-yellow-500 cursor-pointer">
              January 2013
            </li>
            <hr />

            <li className="hover:text-yellow-500 cursor-pointer">March 2043</li>
            <hr />

            <li className="hover:text-yellow-500 cursor-pointer">
              Octuber 2011
            </li>
            <hr />
            <li className="hover:text-yellow-500 cursor-pointer">
              November 2001
            </li>
          </ul>
        </div>

        {/* TAGS  */}
        <div className="tags">
          <h1 className="text-xl font-bold opacity-80 border-l-[4px] border-yellow-400 px-[25px] py-[10px]">TAGS</h1>
          <div className="py-[20px] grid grid-cols-3">
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Construction
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Design
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Project
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Building
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Finance
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Safety
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Contracting
            </button>
            <button className="px-[10px] py-[10px] border-[1px] border-gray-300 m-[5px] hover:bg-yellow-400 hover:text-white rounded-[2px]">
              Planning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
