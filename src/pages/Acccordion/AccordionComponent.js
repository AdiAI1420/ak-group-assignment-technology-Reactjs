import './Accordion.css'


const AccordionComponent = () => {
  return (
    <div className="container mt-5">
    <h2 className='heading'><strong style={{color:"#1bbd64"}}>FREQUENTLY</strong> ASKED QUESTIONS</h2><hr/>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What do we bring to the table?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              Years of experience providing software testing services for
              companies of all shapes and sizes. Whether you&rsquo;re looking for QA
              testing for iOS/Android mobile apps, desktop software, or SaaS
              (software as a service), we have you covered.
            </p>
          </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What is on demand Testing?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                On-demand reliability. We&rsquo;re available on-demand, even if you
                just need 20 hours of testing here and there. Since our testers
                are located all over the nation, they&rsquo;re more likely to be in
                sync with your business hours.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Are you flexible at software testing services?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                We specialize in everything from manual and automated QA
                services to API and performance testing. We have straightforward
                hourly prices and no long-term contracts required. Our testing
                experts can do anything from writing manual test cases to
                setting up or maintaining full automation using Appium. We can
                also set up or boost your current QA process with our software
                QA consulting services!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Real people! Real results!
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse "
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                If you &rsquo; d like to hand off builds and get bug reports back
                without any back-and-forth, no problem. But if you want a
                dedicated tester to participate in your Agile process and
                communicate with daily, we&rsquo;ve got you covered there too. Our
                testers can even join your standups, Jira, and Slack.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Do you have experience across a vast range of sectors?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                No matter what industry your software is in, chances are we&rsquo;ve
                been there. Some of the biggest companies in America have
                outsourced their software testing services to us. Our enterprise
                QA portfolio includes everyone from Google to Microsoft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
