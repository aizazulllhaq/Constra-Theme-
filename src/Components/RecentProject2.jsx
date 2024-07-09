import React from "react";

const RecentProject2 = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[1170px] mx-auto">
        {/* Heading  */}
        <div className="heading items-center text-center pb-[30px]">
          <h3 className="text-2xl font-thin py-[5px]">WORK OF EXPERIENCE</h3>
          <h1 className="md:text-4xl text-xl font-extrabold opacity-80">RECENT PROJECTS</h1>
        </div>

        <div className="Projects grid md:grid-cols-3 grid-cols-1 gap-[30px]">
          <div className="cursor-pointer sm:px-0 px-[10px]">
            <img
              src="https://demo.themefisher.com/constra-bootstrap/images/news/news1.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold py-[5px] opacity-80 hover:text-yellow-500">
              We Just Completes $17.6 million Medical Clinic in Mid-Missouri
            </h1>
            <p className="font-thin"> July 20, 2017 </p>
          </div>
          <div className="cursor-pointer sm:px-0 px-[10px]">
            <img
              src="https://demo.themefisher.com/constra-bootstrap/images/news/news2.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold py-[5px] opacity-80  hover:text-yellow-500">
              Thandler Airport Water Reclamation Facility Expansion Project
              Named
            </h1>
            <p className="font-thin"> JUN 20, 2017 </p>
          </div>
          <div className="cursor-pointer sm:px-0 px-[10px]">
            <img
              src="https://demo.themefisher.com/constra-bootstrap/images/news/news3.jpg"
              alt=""
            />
            <h1 className="text-xl py-[5px] font-semibold opacity-80 hover:text-yellow-500">
              Silicon Bench and Cornike Begin Construction Solar Facilities
            </h1>
            <p className="font-thin"> AUG 20, 2017 </p>
          </div>
        </div>
        <div className="btn text-center py-[40px]">
          <button className="px-[15px] py-[10px] text-white bg-yellow-500 rounded-[3px] font-bold hover:bg-yellow-600">SEE ALL POSTS</button>
        </div>
      </div>
    </section>
  );
};

export default RecentProject2;
