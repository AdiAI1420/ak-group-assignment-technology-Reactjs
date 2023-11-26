import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel } from "react-bootstrap";
import img1 from "../Developersupport/Images/img1.jpg";
import './Test.css';

const DirectorCard = ({ name, role, description }) => (
  <Card
    style={{
      width: "30rem",
      textAlign: "center",
      flex: "1",
      backgroundColor: "#00000063",
    }}
  >
    <div className="d-flex flex-column align-items-center">
      <Card.Img
        className="w-25 object-fit-cover rounded-circle"
        variant="top"
        src={img1}
        height="150px"
      />
      <Card.Body>
        <Card.Title className="text-white ">{name}</Card.Title>
        <h6>{role}</h6>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
    </div>
  </Card>
);

const Test = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Our Dedicated Team</h1>
      <p className="text-center lead">Collaborative Expertise for Seamless Solutions</p>
      <div className="mb-4">
        <h2 className="text-center">Directors</h2>
        <Carousel
          style={{
            height: "60vh",
            width: "90vw",
            margin: "auto",
          }}
          interval={null}
          nextIcon={<span className="carousel-control-next-icon" />}
          prevIcon={<span className="carousel-control-prev-icon" />}
        >
          {[1, 2].map((index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around gap-3">
                <DirectorCard
                  name="Ajay Gupta"
                  role="Marketing and sales head"
                  description="Ajay Gupta, the Marketing Head, is an adroit professional specializing in client acquisition, sales, and digital marketing. Equipped with an MBA degree, he brings a wealth of knowledge and expertise to the marketing sector, driving strategic growth and success in various marketing endeavors."
                />
                {/* Add more DirectorCard components as needed */}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Test;
