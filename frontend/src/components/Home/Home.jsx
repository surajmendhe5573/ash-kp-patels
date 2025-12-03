import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Purpose from "./Purpose";
import Achievement from "./Achievement";
import Calendar from "./Calendar";
import Events from "./Events";
import FAQs from "./FAQs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      
      <Hero />

      <div className="py-30 ">
        <AboutUs />
      </div>

      <div className="">
        <Purpose />
      </div>
      <div className="xl:mt-0 mt-30 ">
        <Achievement />
      </div>

      <div className="my-20 ">
        <Calendar />
      </div>

      <div className="my-20 ">
        <Events />
      </div>

      <div className="my-40 ">
        <FAQs />
      </div>

      <div className="mt-40 mb-10 ">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
