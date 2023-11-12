import React from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Comments.css';

const Comment = ({ name, role, description }) => (
  <div className="card border p-3 mb-3">
    <div className="container">
      {/* Uncomment and replace with the appropriate image URL */}
 <img src="..." alt={name} className="ceo-image img-fluid rounded-circle" />
      <div className="name-letter">
        <p className="v">{name.charAt(0)}</p>
      </div>
      <div className="name-container ml-3">
        <h5 className="ceo-name">{name}</h5>
        <p className="ceo-details">{role}</p>
      </div>
    </div>
    <p className="description">
      <BiSolidQuoteAltLeft fontSize={"18px"} color="#bfbfbf" />
      {description}
      <BiSolidQuoteAltRight fontSize={"18px"} color="#bfbfbf" />
    </p>
  </div>
);

const Comments = () => (
  <div className="bg-container container">
    <div className="card p-3 mb-3">
      <Comment
        name="Vinod"
        role="AI"
        description="Web Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that"
      />
      <Comment
        name="Harish"
        role="Power BI"
        description="Power BI Desktop by Microsoft is a powerful data visualization tool that allows you to connect to your data from hundreds of supported on-premises and cloud-based sources, such as"
      />
    </div>

    <ul className="list-comments">
      <li>
        <Comment
          name="Sudheer"
          role="React js"
          description="WebReact is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly"
        />
      </li>
      <li>
        <Comment
          name="Prakash"
          role="Node js"
          description="Node.js is an open-source, cross-platform JavaScript runtime environment facilitated by the Linux Foundation's Collaborative Projects program. The OpenJS Foundation is the premier"
        />
      </li>
      <li>
        <Comment
          name="Sai Kumar"
          role="Python"
          description="Learn Python Like a Pro. From The Basics All The Way to Creating your own Apps and Games! Join millions of learners from around the world already learning on Udemy"
        />
      </li>
      <li>
        <Comment
          name="Adi"
          role="Java"
          description="Java SE is a software platform that helps reduce costs, shorten development time, drive innovation and improve application services. It can be downloaded for free from Oracle's off..."
        />
      </li>
    </ul>
  </div>
);

export default Comments;
