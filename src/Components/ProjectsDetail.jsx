import React, { useEffect, useState } from "react";

const ProjectsDetail = () => {
  const [projects, setProjects] = useState(0);
  const [staff, setStaff] = useState(0);
  const [hours, setHours] = useState(0);
  const [countries, setCountries] = useState(0);

  const targetValues = {
    projects: 1789,
    staff: 647,
    hours: 4000,
    countries: 44,
  };

  useEffect(() => {
    const incrementValue = (setValue, target) => {
      let value = 0;
      const increment = Math.ceil(target / 100); // Adjust this value to control the speed of the count-up

      const interval = setInterval(() => {
        value += increment;
        if (value >= target) {
          clearInterval(interval);
          value = target;
        }
        setValue(value);
      }, 20); // Adjust this value to control the speed of the count-up
    };

    incrementValue(setProjects, targetValues.projects);
    incrementValue(setStaff, targetValues.staff);
    incrementValue(setHours, targetValues.hours);
    incrementValue(setCountries, targetValues.countries);
  }, []);

  return (
    <div className="detail max-w-[100%] mx-auto bg-[#252525]">
      <div className="max-w-[900px] mx-auto flex sm:flex-nowrap flex-wrap sm:flex-row lg:justify-between py-[50px] text-white flex-col justify-center text-center">
        <div className="total-projects pr-[10px]">
          <img
            src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact1.png"
            alt=""
            className="max-w-[120px] mx-auto"
          />
          <h1 className="text-5xl font-bold text-center py-[15px]">{projects}</h1>
          <h3 className="text-xl font-bold text-yellow-500">TOTAL PROJECTS</h3>
        </div>
        <div className="staff-members pl-[10px]">
          <img
            src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact2.png"
            alt=""
            className="max-w-[120px] mx-auto"
          />
          <h1 className="text-5xl font-bold text-center py-[15px]">{staff}</h1>
          <h3 className="text-xl font-bold text-yellow-500">STAFF MEMBERS</h3>
        </div>
        <div className="hours-of-work pl-[10px]">
          <img
            src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact3.png"
            alt=""
            className="max-w-[120px] mx-auto"
          />
          <h1 className="text-5xl font-bold text-center py-[15px]">{hours}</h1>
          <h3 className="text-xl font-bold text-yellow-500">HOURS OF WORK</h3>
        </div>
        <div className="countries-experience pl-[10px]">
          <img
            src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact4.png"
            alt=""
            className="max-w-[120px] mx-auto"
          />
          <h1 className="text-5xl font-bold text-center py-[15px]">{countries}</h1>
          <h3 className="text-xl font-bold text-yellow-500">
            Countries Experience
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
