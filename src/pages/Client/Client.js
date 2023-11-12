import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TeamMember from "./TeamMember";
import image1 from "./images/team-1.jpg";
import image2 from "./images/team-2.jpg";
import image3 from "./images/team-3.jpg";
import image4 from "./images/team-4.jpg";
import image5 from "./images/team-5.jpg";
import image6 from "./images/team-6.jpg";

import "./Client.css" // Create a CSS file for additional styles

function ClientComponent() {
  return (
    <div className="container">
      <h3>OUR <strong style={{ color: '#1bbd64' }}>TEAM</strong></h3>
      <div className="underline"></div>
      <div className="notes">
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipi alias ea. Quia fugiat
          sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="row">
        <TeamMember name="Walter White" role="Chief Executive Officer" imageSrc={image1} />
        <TeamMember name="Sarah Johnson" role="Product Manager" imageSrc={image2} />
        <TeamMember name="William Anderson" role="CTO" imageSrc={image3} />
        <TeamMember name="Amanda Jepson" role="Accountant" imageSrc={image4} />
        <TeamMember name="Adi" role="Developer" imageSrc={image5} />
        <TeamMember name="Dada" role="Writer" imageSrc={image6} />
      </div>
    </div>
  );
}

export default ClientComponent;