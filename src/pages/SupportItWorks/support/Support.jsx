import './support.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import video from './support.mp4';
import ReactPlayer from 'react-player';

const Support = () => (
  <div className='bg-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h2>Aktech is an award-winning business IT support company.</h2>
              <p>
                Our Managed IT support provides fast and efficient technical
                support for your business platforms to increase productivity
                while reducing costs.
              </p>
              <h4>Our customers can benefit from support that includes:</h4>
              <ul>
                <li>Rapid response times</li>
                <li>24/7/365 IT Support</li>
                <li>Conducted Zoom Meeting</li>
              </ul>
              <div>
                <button type="button" className='btn btn-primary'>
                  <a href='https://akweb-3n4f.onrender.com/about'>
                    WHO WE ARE //
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <ReactPlayer
            url={video}
            controls
            height={'350px'}
            width={'450px'}
            playing={false}
            loop={true}
            style={{ borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Support;
