import React from "react";
import "./AcademicProjects.css";
import img1 from "./images/academicProjectsImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

function AcademicProjects() {
  return (
    <div>
      <div className="background-container">
        <h6 className="top-heading">FINAL YEAR ACADEMIC PROJECTS</h6>
        <h1 className="heading">
          <span className="half-heading text-dark">About AKTech </span>Academic Projects
        </h1>
        <h8 className="top-heading mb-4 text-dark">
          The intention of Academic Projects is to enable students implement the
          theoretical concepts they learnt in classroom into real world
          applications.
        </h8>
        <hr className="heading-underline" />
        <div className="image-card-container container text-dark">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-5">
              <img src={img1} alt="img" className="img-fluid" />
            </div>
            <div className="col-sm-4 col-md-4 col-lg-5">
              <p className="info text-dark">
                The Indian economy is facing a huge demand for manpower
                resources that possess sound knowledge of basic IT skills or are
                equipped with specialized talent in areas such as finance and
                accounting, infrastructure management, web content development,
                enterprise resource planning and business intelligence.
              </p>
              <h1 className="project-heading text-dark"><span className="academic-heading text-dark">Academic </span>Project Guidance</h1>
              <p className="info text-dark">
                For students pursuing non-engineering streams such as Bachelor
                of Science (B.Sc.), Bachelor of Computer Applications (BCA),
                Master of Science (M.Sc.) and so, ElysiumPro has customized
                academic projects that could be your gateway into the IT world.
              </p>
              <p className="info text-dark">
                Academic Projects intend to enable students to implement the
                theoretical concepts they learnt in the classroom into
                real-world applications. Moreover, this practical knowledge
                might come in handy during job interviews and have a lasting
                impact on students’ careers in the corporate world.
              </p>
              <p className="info text-dark">
                What makes our project center process is that we regularly begin
                working on a project, we obtain the design files. At the same
                time we set a priority on the quality order of the project flow.
                To achieve it we provide more prominence on proper testing of
                your project.
              </p>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2 icon-container text-dark" >
              <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
              <h1>100+</h1>
              <h3>Projects</h3>
              <p className="text-dark">Projects Reached</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicProjects;
