import React, { useState } from 'react';
import './About.css';
import Aboutdata from './Aboutdata';

import Comments from '../Comments/Comments';
import HelpServices from '../HelpSerivces/HelpServices';
import OurProcess from '../Our Process/Ourprocess';

import Aboutmain from "../Aboutmainpage/Aboutmain"



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


<>
    <Aboutmain />
    <div className='container-fluid mt-5 text-white'>




      <div className='row mt-5'>
        <div className='col-md-6'>
          <div className='parentImage'>
          <img
          className='img-img-thumbnail'
          src='https://document-export.canva.com/icPPQ/DAFxuWicPPQ/12/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231130T003236Z&X-Amz-Expires=45439&X-Amz-Signature=b84279b87d949b1352842a6db90ce89cd3a2dc5ee4ab98509da0f44e9f666220&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2030%20Nov%202023%2013%3A09%3A55%20GMT'
          alt='Testimonials'
        />
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className='clientQuestion'>What our clients say about us?</h3>
          {Aboutdata.map((item, index) => (
            <div key={index} className={current === index ? 'active' : 'slide'}>
              <h5 className='text-white'>{item.answer}</h5>
              <h5 className='userName'>{item.name}</h5>
            </div>
          ))}
          
        </div>
      </div>
      <Comments />


        <HelpServices />

        <OurProcess />
    </div>



    </>  
  );

};

export default Aboutus;
