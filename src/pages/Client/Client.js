import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TeamMember from "./TeamMember";
import image1 from "./images/team-1.jpg";
import image2 from "./images/team-2.jpg";
import image3 from "./images/team-3.jpg";
import image4 from "./images/team-4.jpg";
import image5 from "./images/team-5.jpg";
import image6 from "./images/team-6.jpg";

import "./Client.css"; // Create a CSS file for additional styles

function ClientComponent() {
  return (
    <div className="container mt-4">
      <h3 className="text-center">
        OUR <strong style={{ color: "#1bbd64" }}>TEAM</strong>
      </h3>

      <div className="notes mt-3">
        <p>
          "Our team specializes in providing comprehensive solutions during
          on-site visits to your location. With over 4 years of hands-on
          experience, our dedicated real-time developers ensure 100% on-time
          delivery, surpassing deadlines and meeting cost expectations. We{" "}
          <strong>excel</strong> in providing doorstep service support, handling
          IT projects 24/7. From academic projects to core IT works, we guarantee
          optimal results. Our team is adept at managing tasks cost-effectively,
          with a commitment to <strong>excellence</strong>. Explore the best{" "}
          <strong>places</strong> during your visit to our location, including{" "}
          <u>Tadipatri</u>, <u>Anathapuram</u>, <u>Guntur</u>, <u>Nellore</u>,{" "}
          <u>Vijayawada</u>, <u>Pulivendula</u>, and <u>Kadapa</u>. It's great
          that you offer a wide range of expertise in different domains such as{" "}
          <u>Reactjs</u>, <u>Python Django</u>, <u>Java Full stack</u>, <u>.NET</u>,{" "}
          <u>Angular</u>, <u>testing</u>, <u>MySQL</u>, <u>SQL</u>, <u>ML</u>,{" "}
          <u>DL</u>, and <u>R</u>. Offering 24/7 support is also a valuable aspect
          for clients who may need assistance at any time."
        </p>
      </div>
      <div className="row mt-4">
        <TeamMember
          name="Walter White"
          role="Chief Executive Officer"
          imageSrc={image1}
        />
        <TeamMember
          name="Sarah Johnson"
          role="Product Manager"
          imageSrc={image2}
        />
        <TeamMember name="William Anderson" role="CTO" imageSrc={image3} />
        <TeamMember name="Amanda Jepson" role="Accountant" imageSrc={image4} />
        <TeamMember name="Adi" role="Developer" imageSrc={image5} />
        <TeamMember name="Dada" role="Writer" imageSrc={image6} />
      </div>
    </div>
  );
}

export default ClientComponent;
