import React from "react";

const Services = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[1170px] mx-auto">
        <div className="heading text-center py-[60px]">
          <h3 className="text-xl font-light pt-[20px]">WE ARE SPECIALIST IN</h3>
          <h1 className="text-4xl font-extrabold opacity-80">WHAT WE DO</h1>
        </div>

        <div className="banner grid md:grid-cols-3 grid-cols-1">
          <div className="left py-[30px] pl-[20px]">
            <div className="flex mb-[40px]">
              <img alt="" src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon1.png" className="h-[60px]"/>
              <div className="px-[30px]">
                <h1 className="font-bold text-[15px] opacity-80 pb-[10px]">HOME CONSTRUCTION</h1>
                <p className="text-md opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
            <div className="flex mb-[40px]">
              <img alt="" src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon2.png" className="h-[60px]"/>
              <div className="px-[30px]">
                <h1 className="font-bold text-[15px] opacity-80 pb-[10px]">BUILDING REMODELS</h1>
                <p className="text-md opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
            <div className="flex mb-[40px]">
              <img alt="" src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon1.png" className="h-[60px]"/>
              <div className="px-[30px]">
                <h1 className="font-bold text-[15px] opacity-80 pb-[10px]">INTERIOR DESIGN</h1>
                <p className="text-md opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>
          <div className="center">
            <img src="https://demo.themefisher.com/constra-bootstrap/images/services/service-center.jpg" alt="" />
          </div>
          <div className="right py-[30px] pr-[20px]">
            <div className="flex mb-[40px]">
              <img alt="" src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon4.png" className="h-[60px]"/>
              <div className="px-[30px]">
                <h1 className="font-bold text-[15px] opacity-80 pb-[10px]">EXTERIOR DESIGN</h1>
                <p className="text-md opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
            <div className="flex mb-[40px]">
              <img alt="" src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon5.png" className="h-[60px]"/>
              <div className="px-[30px]">
                <h1 className="font-bold text-[15px] opacity-80 pb-[10px]">RENOVATION</h1>
                <p className="text-md opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
            <div className="flex mb-[40px]">
              <img alt="" src="https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon6.png" className="h-[60px]"/>
              <div className="px-[30px]">
                <h1 className="font-bold text-[15px] opacity-80 pb-[10px]">SAFETY MANAGEMENT</h1>
                <p className="text-md opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
