import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Technology from "./pages/Technology/Technology";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";


import ServiceTest from "./pages/Services/Services/Service";
import Designservices from "./pages/design-services-home/Designservices";

import Aboutus from "./pages/About/Aboutus";
import Projects from "./pages/Projects/Projects";
import Accadamic from "./pages/Accadamic/Accadamic";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />

          <Route path="/Technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
     
          <Route path="/Services" element={<ServiceTest />} />

          // accadamic mca 
          <Route path="/Accadamic" element={<Accadamic />} />
         
        

          <Route path="/designservices" element={<Designservices />} />

          // projects 
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
