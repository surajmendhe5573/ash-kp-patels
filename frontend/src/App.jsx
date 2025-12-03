import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import About from "./components/AboutUs/About";
import TrustBody from "./components/TrustBody/TrustBody";
import Academics from "./components/Academics/Academics";
import Gallery from "./components/Gallery/Gallery";
import Events2 from "./components/Events/Events2";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import Alumni from "./components/Alumni/Alumni";
import Admission from "./components/Admission/Admission";
import AdmissionForm from "./components/AdmissionForm/AdmissionForm";


function App() {

  const [active, setActive] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/trust-body" element={<TrustBody />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events2 />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
        </Routes>
        <Footer active={active} setActive={setActive} />
      </BrowserRouter>
    </>
  );
}

export default App;
