import React from "react";
import "./Pricing.css"

const PricingSingle = ({ item, index }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div
            className={
              index === 2
                ? "pricingheader fw-bold greenbg"
                : "pricingheader fw-bold"
            }
          >
            {item}
          </div>
          <div className="p-4">
            <h3 className="grey">
              <span className="green ">
            
              </span>
           
              <span className="month grey"></span>
            </h3>
            <ul className="my-3">
              <li> WEB APPLICATION </li>
              <li>PYTHON DJANGO </li>
              <li >
               JAVA FULL STACK 
              </li>
              <li >
               MERN STACK 
              </li>

              <li >
            TESTING 
             </li>
            </ul>
          </div>
          <div className="pricingheader">
            <button className="btn btn-success fw-bold">Book Now</button>
          </div>
          {index === 3 ? (
            <>
              <div className="advance greenbg fw-bold">Advance</div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PricingSingle;
