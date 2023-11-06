import React, { useState } from "react";


import "./Navbar.css"

import { Link } from "react-router-dom";
const Navbar = () => {

  const [res, setRes] = useState(false); // Change to false initially

  const handlerClick = () => {
    setRes(!true); // Toggle the 'res' state between true and false
  };
  return (
    <>
      <header id="header" className="fixed-top" style={{backgroundColor:"white",color:"black"}}>
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="#">
              <span>AK</span> Group
            </a>
          </h1>
          <nav
            id="navbar"
            className="navbar   navbar-expand-lg order-last order-lg-0"
          >
          

          <button
          onClick={handlerClick}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav" // Make sure this matches your navbar's ID
          aria-controls="navbarNav"
          aria-expanded={res} // Use the 'res' state here
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link 
                  to='/about'
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a href="#" className="dropdown-item">
                      About Us
                    </a>
                    <a href="#" className="dropdown-item">
                      Team
                    </a>
                    <a href="#" className="dropdown-item">
                      Testimonials
                    </a>
                    <div className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle">
                        Projects
                      </a>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
                          Deep Drop Down 1
                        </a>
                        <a href="#" className="dropdown-item">
                          Deep Drop Down 2
                        </a>
                        <a href="#" className="dropdown-item">
                          Deep Drop Down 3
                        </a>
                        <a href="#" className="dropdown-item">
                          Deep Drop Down 4
                        </a>
                        <a href="#" className="dropdown-item">
                          Deep Drop Down 5
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to='/Coursepage' className="nav-link">
                  Coursepage
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Accadamic
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Support It Works
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>


                <li className="nav-item">
                  <Link to="/Services" className="nav-link">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-social-links d-flex">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </header>

   <br />
   <br />  <br />
   <br />
   <br />
   <br />


   

    </>
  );
};

export default Navbar;
