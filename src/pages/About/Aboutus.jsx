import React, { useState } from 'react';
import './About.css';
import Aboutdata from './Aboutdata';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Comments from '../Comments/Comments';

const Aboutus = () => {
  const [current, setCurrent] = useState(0);
  const length = Aboutdata.length;

  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className='container-fluid'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='parentImage'>
            <img
              className='img-fluid'
              src='https://www.selectsourceintl.com/images/graphics/testimonials.svg'
              alt='Testimonials'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className='clientQuestion'>What our clients say about us?</h3>
          {Aboutdata.map((item, index) => (
            <div key={index} className={current === index ? 'active' : 'slide'}>
              <h5>{item.answer}</h5>
              <h5 className='userName'>{item.name}</h5>
            </div>
          ))}
          <div className='buttons'>
            <button className='buttonsIcon' onClick={handlePrev}>
              <img
                className='image'
                src='https://cdn-icons-png.flaticon.com/128/271/271220.png'
                alt='Previous'
              />
            </button>
            <button className='buttonsIcon' onClick={handleNext}>
              <img
                className='image'
                src='https://cdn-icons-png.flaticon.com/128/271/271228.png'
                alt='Next'
              />
            </button>
          </div>
        </div>
      </div>
      <Comments />
    </div>



    
  );
};

export default Aboutus;
