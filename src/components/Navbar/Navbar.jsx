import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [res, setRes] = useState(false);

  const handlerClick = () => {
    setRes(!res);
  };

  return (
    <>
      <header
        id="header"
        className="fixed-top"
        style={{ backgroundColor: "white", color: "black" }}
      >
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
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={res}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/about"  className="nav-link">About</Link>
                 </li> 
          
                <li className="nav-item">
                  <Link to='/Accadamic'  className="nav-link">
                    Academic Mca
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Support It Works
                  </a>
                </li>

                <li className="nav-item">
                <a href="#" className="nav-link">
                IT JOB WORKS
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
                    Technology
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Navbar;
