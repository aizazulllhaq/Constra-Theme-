import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";

const OurLeadersPage = () => {
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
      <Main page="OurLeaders" />
      <Footer />
    </section>
  );
};

export default OurLeadersPage;
