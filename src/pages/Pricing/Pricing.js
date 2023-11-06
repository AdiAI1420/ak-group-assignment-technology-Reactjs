import React from "react";
import "./Pricing.css";
import PricingSingle from "./PricingSingle";

const pricingArr = [
  "ACADEMIC PROJECT",
  "REACTJS/ANGULAR",
  "PYTHON DJANGO",
  "MERN",
  "JAVA",
  "TESTING",
  ".NET",
  "ML DL R",
  "UI",
];

const Pricing = () => {
  return (
    <div className="container text-center mt-5">
      <p className="lead shadow fw-bold font-italic p-3 mb-5 bg-white rounded border border-primary animated fadeIn">
        Implement various academic projects related to web technologies and services using the technologies you've mentioned, including Python with Django, Java, React, Angular, .NET, R, Machine Learning (ML), Deep Learning (DL), Data Science (DS), and User Interface (UI) development. Here are some project ideas:
      </p>
      <h3 className="mb-4">
        Academic{" "}
        <a href="#" className="text-success">
          <strong>projects</strong>
        </a>
      </h3>
      <div className="row">
        {pricingArr.map((item, index) => (
          <PricingSingle key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
