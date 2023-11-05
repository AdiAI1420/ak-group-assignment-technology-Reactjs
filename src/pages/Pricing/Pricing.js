import React from "react";
import "./Pricing.css";
import PricingSingle from "./PricingSingle";

const pricingArr = [
 
  "MERN",
  "REACTJS/ANGULAR",
  "PYTHON DJANGO",
  "TESTING",
  "JAVA",
  ".NET",
  "ML DL R",
];

const Pricing = () => {
  return (
    <>
      <div className="container text-center pricingsectionwrapper">
        <h3 className="text-center">...accadamic <strong style={{color:"#1bbd36"}}>projects</strong>...</h3>
        <div className="row align-items-start">
          {pricingArr.map((item, index) => (
            <PricingSingle key={index} item={item} index={index} />
    )  )}
        </div>
      </div>
    </>
  );
};

export default Pricing;
