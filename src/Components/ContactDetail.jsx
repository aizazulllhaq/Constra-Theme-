import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ContactDetail = () => {
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="w-[100%] overflow-hidden">
      <div className="">
        {/* Upper Section  */}
        <div className="upper w-[100%] bg-gray-200 py-[7px]">
          <div className="max-w-[1070px] mx-auto flex sm:justify-between justify-center items-center sm:flex-nowrap flex-wrap sm:px-[10px] md:px-0 px-[20px] space-y-3">
            <div className="left sm:pr-0 pr-[20px] flex">
             <p className="pr-[10px]">📍</p>
              <p>9051 Constra Incorporate, USA</p>
            </div>
            <div className="right">
              <div className="flex space-x-8 text-[7px]">
                <button
                  onClick={() => handleExternalLink("https://facebook.com")}
                  className="text-blue-600"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="text-black"
                  />
                </button>
                <button
                  onClick={() => handleExternalLink("https://instagram.com")}
                  className="text-pink-500"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="text-black"
                  />
                </button>
                <button
                  onClick={() => handleExternalLink("https://github.com")}
                  className="text-gray-800"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="text-black"
                  />
                </button>
                <button
                  onClick={() => handleExternalLink("https://twitter.com")}
                  className="text-blue-400"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="text-black"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Down Section  */}

        <div className="w-[100%] bg-white">
          <div className="down max-w-[1170px] mx-auto grid lg:grid-cols-[30%_auto] py-[30px] grid-cols-1">
            <div className="left sm:pl-[20px] md:text-left text-center">
              <Link to={"/"}>
              <img
                src="https://demo.themefisher.com/constra-bootstrap/images/logo.png"
                className="max-w-[200px] mx-auto md:pb-0 pb-[20px]"
                alt=""
              />
              </Link>
            </div>
            <div className="right grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:pl-[100px] text-center">
              <div className="sm:py-0 py-[10px] md:mb-0 mb-[10px]">
                <h3 className="text-sm ">Call Us</h3>
                <p className="font-bold">(+9) 847-291-4353</p>
              </div>
              <div className="sm:py-0 py-[10px] md:mb-0 mb-[10px]">
                <h3 className="text-sm">Email Us</h3>
                <p className="font-bold">office@Constra.com</p>
              </div>
              <div className="sm:py-0 py-[10px]">
                <h3 className="text-sm">Global Certificate</h3>
                <p className="font-bold">ISO 9001:2017</p>
              </div>
              <div className="sm:py-0 py-[10px]">
                <button className="font-bold text-white bg-[#ffb600] py-[10px] px-[15px] rounded-[3px]">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
