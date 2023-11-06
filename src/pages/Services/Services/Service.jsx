import React from "react";
import "./Service.css";
import Features from '../../Features/Features/Features/Features';

export default function ServiceTest() {
  return (
    <>
      <div>
        <section id="services" className="services section-bg">
          <div className="container-fluid">
          <h3 className="text-center fw-medium">Our <strong style={{color:"#1bbd36"}}>Services</strong></h3>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1055/1055329.png?track=ais"
                      className="icon-size"
                      alt="App Development Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">App Development</a>
                  </h4>
                  <p>
                    Build a secure, future-proof application through the latest technologies and enhance your user experience.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-orange">
                  <div className="icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/702/702814.png?track=ais"
                      className="icon-size"
                      alt="Technology Consulting Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">Technology Consulting</a>
                  </h4>
                  <p>
                    Explore new opportunities, get insights and overcome your barriers by consulting with our experts.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img
                      className="icon-size"
                      src="https://cdn-icons-png.flaticon.com/128/3757/3757176.png?track=ais"
                      alt="Research and Development Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">Research and Development</a>
                  </h4>
                  <p>
                    Analyze, solve complex challenges and develop solutions that create a revolution.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-yellow">
                  <div className="icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1260/1260111.png?track=ais"
                      className="icon-size"
                      alt="UI/UX Design Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">UI/UX Design</a>
                  </h4>
                  <p>
                    We are experts in providing efficient UI and UX design that ensures a smooth user journey and plays a significant part in increasing customer engagement and retention.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3254/3254935.png?track=ais"
                      className="icon-size"
                      alt="Mobile App Development Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">Mobile App Development</a>
                  </h4>
                  <p>
                    Our expert developers assist you at every stage from planning to deployment, which is a comprehensive process.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/7414/7414609.png?track=ais"
                      className="icon-size"
                      alt="Cross Platform Development Icon"
                    />
                  </div>
                  <h4 style={{ color: "#1bbd36" }}>
                    <a href="#">Cross Platform Development</a>
                  </h4>
                  <p>
                    Developing quality apps is the paramount goal the AK tech solution team has. We are a team of strategists, designers, and developers committed to creating memorable Cross-Platform Apps.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img
                      className="icon-size"
                      src="https://cdn-icons-png.flaticon.com/128/1693/1693746.png"
                      alt="AI/ML Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">AI/ML</a>
                  </h4>
                  <p>
                    Custom AI-based solutions like machine and deep learning will help you automate any operation.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img
                      className="icon-size"
                      src="https://cdn-icons-png.flaticon.com/128/8602/8602167.png"
                      alt="Mobile Application Testing Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">Mobile Application Testing</a>
                  </h4>
                  <p>
                    With the number of mobile devices surpassing the number of human beings on earth, the key to keeping today's digital consumers happy is by making your application mobile-ready.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img
                      className="icon-size"
                      src="https://cdn-icons-png.flaticon.com/128/12567/12567670.png"
                      alt="Digital Marketing Services Icon"
                    />
                  </div>
                  <h4>
                    <a href="#">Digital Marketing Services</a>
                  </h4>
                  <p>
                    We provide a dynamic, versatile, and full-service digital marketing agency that doesn't rely on smoke and mirrors to attract new clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Features/>
    </>
  );
}
