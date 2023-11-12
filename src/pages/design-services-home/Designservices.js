import React from "react";
import "./design-services-home.css"
const Designservices = (props) => {
  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <img
          src="./assets/web-design-background-2.jpg"
          className="card-img-top websiteImage"
          alt="websiteDesigningImage"
        />
        <div className="card-body">
          <h5 className="card-title mainHeading">
            <span className="boldSentences">Web Designing</span> Services at
            Your Door Step
          </h5>
          <h6 className="card-subtitle mb-2 miniHeading">
          The design of a website holds the power to transform a mere visitor into a potential customer, paving the way for meaningful connections and conversions.
          </h6>
          <p className="card-text websiteTextContent">
            Create a splendid first impression with spectacular web designing
            services. ITinfo Digital{" "}
            <span className="boldSentences">
              Web Designing services at your Door step
            </span>
            Absolutely! Making that first impression count is like opening a
            door to endless possibilities, and ITinfo Digital is the keymaster.
            The versatility to create websites for various niches is like having
            a diverse palette for an artist—endless creativity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Designservices;
