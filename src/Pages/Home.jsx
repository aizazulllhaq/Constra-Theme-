import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import RecentProjects from "../Components/RecentProjects";
import RecentProject2 from "../Components/RecentProject2";
import Footer from "../Components/Layout/Footer";
import Testimonials from "../Components/Tertimonials";
import ScrollToTop from "../Components/ScrollTop";

const Home = () => {
  return (
    <main className="w-[100%]">
      <ScrollToTop />
      <ContactDetail />
      <Navbar />
      <Main />
      <AboutUs />
      <Services />
      <RecentProjects />
      <Testimonials />
      <RecentProject2 />
      <Footer />
    </main>
  );
};

export default Home;
