import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  const [barColor, setBarColor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [projects, setProjects] = useState([]);

  const allProjects = [
    {
      Heading: "CAPITAL TELTWAY BUILDING",
      Image:
        "https://demo.themefisher.com/constra-bootstrap/images/projects/project1.jpg",
      Button: "COMMERCIAL",
    },
    {
      Heading: "GHUM TOUCH HOSPITAL",
      Image:
        "https://demo.themefisher.com/constra-bootstrap/images/projects/project2.jpg",
      Button: "HEALTHCARE",
    },
    {
      Heading: "TNT EAST FACILITY",
      Image:
        "https://demo.themefisher.com/constra-bootstrap/images/projects/project3.jpg",
      Button: "GOVERNMENT",
    },
    {
      Heading: "NARRIOT HEADQUARTERS",
      Image:
        "https://demo.themefisher.com/constra-bootstrap/images/projects/project4.jpg",
      Button: "EDUCATION",
    },
    {
      Heading: "KALAS METRORAIL",
      Image:
        "https://demo.themefisher.com/constra-bootstrap/images/projects/project5.jpg",
      Button: "INFRASTRUCTURE",
    },
    {
      Heading: "ANCRAFT AVENUE HOUSE",
      Image:
        "https://demo.themefisher.com/constra-bootstrap/images/projects/project6.jpg",
      Button: "RESEDENTIAL",
    },
  ];

  const handleBarColor = (index) => {
    setBarColor((prevState) =>
      prevState.map((item, i) => (i === index ? !item : false))
    );
  };

  const filteredProjects = (category, limit) => {
    if (category === "SHOW ALL") {
      setProjects(allProjects);
    } else {
      const filteredProjects = [];
      allProjects.forEach((project) => {
        if (project.Button === category) {
          filteredProjects.push(allProjects);
        }
      });
      const fprojects = filteredProjects[0].slice(0, limit);
      console.log(fprojects);
      setProjects(fprojects);
    }
  };

  const handleShowAll = () => {
    handleBarColor(0);
    filteredProjects("SHOW ALL");
  };

  const handleCommertialProjects = () => {
    handleBarColor(1);
    filteredProjects("COMMERCIAL", 2);
  };

  const handleEducationProjects = () => {
    handleBarColor(2);
    filteredProjects("EDUCATION", 4);
  };

  const handleGovernmentProjects = () => {
    handleBarColor(3);
    filteredProjects("GOVERNMENT", 3);
  };

  const handleInfrastructureProjects = () => {
    handleBarColor(4);
    filteredProjects("INFRASTRUCTURE", 5);
  };

  const handleResedentialProjects = () => {
    handleBarColor(5);
    filteredProjects("RESEDENTIAL", 2);
  };

  const handleHealthCareProjects = () => {
    handleBarColor(6);
    filteredProjects("HEALTHCARE", 4);
  };

  useEffect(() => {
    handleShowAll();
  }, []);

  return (
    <section className="w-[100%] pt-[70px] bg-gray-100">
      <div className="max-w-[1170px] mx-auto">
        <div className="heading text-center">
          <h3 className="md:text-2xl text-xl font-thin pt-[10px]">
            WORK OF EXPERIENCE
          </h3>
          <h1 className="md:text-4xl text-2xl font-extrabold py-[5px] opacity-85">
            RECENT PROJECTS
          </h1>
        </div>

        <div className="projects-bar pt-[70px] ">
          {/* Projects Header Bar */}
          <div className="bar">
            <ul className="md:flex grid sm:grid-cols-3 grid-cols-2 gap-[10px] border-b-[4px] font-bold border-yellow-400 justify-between">
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[0] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleShowAll}
                  className="md:text-md text-sm"
                >
                  SHOW ALL
                </Link>
              </li>
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[1] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleCommertialProjects}
                  className="md:text-md text-sm"
                >
                  COMMERCIAL
                </Link>
              </li>
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[2] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleEducationProjects}
                  className="md:text-md text-sm"
                >
                  EDUCATION
                </Link>
              </li>
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[3] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleGovernmentProjects}
                  className="md:text-md text-sm"
                >
                  GOVERNMENT
                </Link>
              </li>
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[4] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleInfrastructureProjects}
                  className="md:text-md text-sm"
                >
                  INFRASTRUCTURE
                </Link>
              </li>
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[5] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleResedentialProjects}
                  className="md:text-md text-sm"
                >
                  RESEDENTIAL
                </Link>
              </li>
              <li
                className={`px-[20px] py-[10px] ${
                  barColor[6] && "bg-yellow-400"
                }`}
              >
                <Link
                  to={"/"}
                  onClick={handleHealthCareProjects}
                  className="md:text-md text-sm"
                >
                  HEALTHCARE
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects List  */}
          <div className="projects grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[50px]">
            {/* Example project item */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-lg"
              >
                <img
                  src={project.Image}
                  alt=""
                  className="object-cover w-full h-auto transform transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center  gap-2 opacity-0 group-hover:opacity-100 group-hover:bg-[rgba(0,0,0,0.7)] px-[20px] pb-[10px]">
                  <p className="text-white text-xl font-bold">
                    {project.Heading}
                  </p>
                  <button className="px-[5px] py-[5px] text-black text-[10px] font-bold text-start bg-yellow-500 hover:bg-yellow-400">
                    {project.Button}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="btn md:max-w-[280px] max-w-[180px] mx-auto md:my-[50px] my-[30px]">
            <button className="md:px-[40px] px-[20px] bg-yellow-500 mb-[50px] md:py-[10px] py-[5px] text-white rounded-sm font-bold text-sm md:text-md">
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
