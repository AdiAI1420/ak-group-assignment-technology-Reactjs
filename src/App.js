import React from "react";
import "./App.css"
import ScrollToTop from "react-scroll-to-top";


import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Technology from "./pages/Technology/Technology";

import { BrowserRouter, Routes, Route } from "react-router-dom";




import Designservices from "./pages/design-services-home/Designservices";

import Aboutus from "./pages/About/Aboutus";
import Projects from "./pages/Projects/Projects";
import Accadamic from "./pages/Accadamic/Accadamic";
import Particle from "./Particle";

import Contact from "./pages/Contact/Contact";
import ServiceTest from "./pages/Services/Services/Service";



const App = () => {
  return (
    <>
   <div className="container-fluid">
   
   <BrowserRouter>
   <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<Aboutus />} />

     <Route path="/Technology" element={<Technology />} />
     <Route path="/contact" element={<Contact />} />

     <Route path="/Services" element={<Designservices />} />

     // accadamic mca 
     <Route path="/Accadamic" element={<Accadamic />} />
    
   

     <Route path="/designservices" element={<ServiceTest />} />

     // projects 
     <Route path="/Projects" element={<Projects/>} />
   </Routes>
   <Footer />
   <ScrollToTop smooth />
 </BrowserRouter>

 <Particle />
   </div>
    </>
  );
};

export default App;


