import ContactDetail from "../Components/ContactDetail";
import Navbar from "../Components/Layout/Navbar";
import Main from "../Components/Main";
import Footer from "../Components/Layout/Footer";

const TestonomialsPage = () => {
  return (
    <section className="w-[100%]">
      <ContactDetail />
      <Navbar />
      <Main page="Testonomials" />
      <Footer />
    </section>
  );
};

export default TestonomialsPage;
