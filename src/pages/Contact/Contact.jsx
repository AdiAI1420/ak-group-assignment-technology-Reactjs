import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import "./Contact.css"; // Your custom CSS file

function Contact() {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3803.948877778666!2d78.43831717516882!3d17.55762048335887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMzJzI3LjQiTiA3OMKwMjYnMjcuMiJF!5e0!3m2!1sen!2sin!4v1698474152573!5m2!1sen!2sin"
              width="100%"
              height="400px"
              style={{ border: "2px solid #000" }} // Correct border style
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      



      <div className="contact-details-container">
        <div className="d-flex flex-col justify-content-start">
          <div className="contact-sub-container">
            <IoLocationOutline />
          </div>
          <div>
            <h1 className="item-heading">Location:</h1>
            <p className="address">A108 Adam Street</p>
            <p className="address">New York NY 535022</p>
          </div>
        </div>
        <div className="d-flex flex-col">
          <div className="contact-sub-container">
            <GoMail />
          </div>
          <div>
            <h1 className="item-heading">Email:</h1>
            <p className="address">info@expmple.com</p>
            <p className="address">contact@exmple.com</p>
          </div>
        </div>
        <div className="d-flex flex-col">
          <div className="contact-sub-container">
            <BsPhone />
          </div>
          <div>
            <h1 className="item-heading">Cell:</h1>
            <p className="address">+1 08338459440</p>
            <p className="address">+1 49499900030</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="input-container">
          <input type="text" className="form-control" placeholder="Your Name" />
          <input type="text" className="form-control" placeholder="Your Email" />
        </div>
        <input type="text" className="form-control" placeholder="Subject" />
        <textarea rows="7" className="form-control" placeholder="Message"></textarea>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}

export default Contact;
