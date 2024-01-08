import React from 'react'
import './trusted.css'
import ItSupport from '../itVideos/itSupport';


const testimonialsData = [
  {
    content: `AK Group provide timely, effective, and honest IT support. ... From day-to-day support to managing our website , these guys are the best! They're friendly, competent, and always ahead of the game with tech.`,
    name: 'SS PLANNERS',
    years: 'Client for 2 years',
  },
  {
    content: `AK Group helped  ZETAMINE  from a small five-person team to a successful startup. Thanks to Ak Group, issuing credit and debit cards  has been made easy. These guys were prompt and helpful in  every step of the way. Thank you!`,
    name: 'ZETAMINE',
    years: 'Client for 1.5 years',
  },
  {
    content: `AK Group took over our outdated website and redesigned it from the ground up. Indispensable!`,
    name: 'RAOS RESTAURANT',
    years: 'Client for 1 years',
  },
  {
    content: ` AK Group has been a  breath of fresh air since we started working together. Their help desk is available 24X7 to reslove any queries..!​`,
    name: 'CONSULTING FIRM',
    years: 'Confidential | Client for 2.5 years',
  },
];


const Trusted = () => {
  return (
<>

    <ItSupport />
    <div className='trusted-container mt-5'>
      <div className='trusted-card'>
        <h2 className='card-name'>
          AK Tech to resolve 2+ million support tickets since 2020
        </h2>
      </div>
      <div className='back'>
        <div className='card-descripton'>
          <div className="testimonials">
            {
              testimonialsData.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                  <p>{testimonial.content}</p>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.years}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='sub-card'>
          <div className='card-title'>
            <h2>Your one-stop shop for IT solutions</h2>
            <p>Experience a seamless tech journey with a single destination for all your IT needs.
              From consulting to implementation, support, and growth strategies, we've got you covered.
              Simplify complexity, optimize resources, and fuel your success with our comprehensive suite of IT solutions.
              Make technology work for you with Your One-Stop Shop for IT Solutions.</p>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Trusted