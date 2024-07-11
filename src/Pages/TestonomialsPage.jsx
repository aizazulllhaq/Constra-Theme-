import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";
import ScrollToTop from "../Components/ScrollTop";

const TestonomialsPage = () => {
  return (
    <section className="w-[100%]">
      <ScrollToTop/>
      <ContactDetail />
      <Navbar />
      <Main page="Testonomials" />
      <Footer />
    </section>
  );
};

export default TestonomialsPage;
