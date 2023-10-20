import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>AK TECHNOLOGY</h3>
              <p>
              Accadamic Projects  <br />
           Job Support 
                <br />
               It Works <br />
                <br />
                <strong>Phone:</strong> +91 8341553216
                <br />
                <strong>Email:</strong> accadamic.info2023@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Instagram</h4>
              <p>
                Online / Offline
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Company</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits" >
          
            Designed by <a  href="" >AK GROUP</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
