import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import ProjectsDetail from "../Components/ProjectsDetail";
import Main from "../Components/Main";
import RecentProjects from "../Components/RecentProjects";
import Footer from "../Components/Layout/Footer";

const AboutUsPage = () => {
  const professionalTeam = [
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team1.jpg",
      h1: "NATS STEMEN",
      h2: "Innovation Officer",
      paragraph:
        "Nats Stemen began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team2.jpg",
      h1: "NATS STEMEN",
      h2: "Innovation Officer",
      paragraph:
        "Nats Stemen began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team3.jpg",
      h1: "NATS STEMEN",
      h2: "Innovation Officer",
      paragraph:
        "Nats Stemen began his career in construction with boots on the ground",
    },
    {
      image:
        "https://demo.themefisher.com/constra-bootstrap/images/team/team4.jpg",
      h1: "NATS STEMEN",
      h2: "Innovation Officer",
      paragraph:
        "Nats Stemen began his career in construction with boots on the ground",
    },
  ];

  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="About" />
      <ProjectsDetail />

      {/* Professional Team  */}
      <div className="max-w-[1170px] mx-auto">
        {/* Heading  */}
        <div className="heading items-center text-center pb-[30px]">
          <h3 className="text-2xl font-thin py-[5px]">QUALITY SERVICE</h3>
          <h1 className="md:text-4xl text-xl font-extrabold opacity-80">
            PROFESSIONAL TEAM
          </h1>
        </div>

        <div className="Projects grid md:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-[30px]">
          {professionalTeam.map((officer, index) => (
            <div
              key={index}
              className="relative group cursor-pointer sm:px-0 px-[10px]"
            >
              <img
                src={officer.image}
                alt={officer.h1}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 transition-all duration-300 ease-in-out group-hover:bg-opacity-70 group-hover:h-full h-1/2">
                <div className="absolute bottom-0 left-0 w-full p-4 text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <h1 className="text-2xl font-bold text-yellow-500">{officer.h1}</h1>
                  <h2 className="text-xl">{officer.h2}</h2>
                  <p className="text-sm">{officer.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn text-center py-[40px]">
          <button className="px-[15px] py-[10px] text-white bg-yellow-500 rounded-[3px] font-bold hover:bg-yellow-600">
            SEE ALL POSTS
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AboutUsPage;
