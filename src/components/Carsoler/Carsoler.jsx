import React from 'react'
import Carousel from 'better-react-carousel'

const Carsoler = () => {
  return (
    <Carousel cols={1} rows={1}  loop>
      <Carousel.Item>
      <img width="100%" height="550px" src="/assets/img/slide/slide-1.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="550px" src="/assets/img/slide/slide-2.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height="550px" src="/assets/img/slide/slide-3.jpg" />
      </Carousel.Item>
   
      
 
    </Carousel>
  )
}

export default Carsoler