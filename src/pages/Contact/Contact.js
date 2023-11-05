import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendMessage = () => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      setErrorMessage('Send Message');
      setIsTrue(false);
    } else if (name === '' || email === '' || subject === '' || message === '') {
      setErrorMessage('Name, Email, Subject, or Message is invalid');
      setIsTrue(true);
    } else {
      setErrorMessage('Message is invalid');
      setIsTrue(true);
    }
  };

  return (
    <div className="contact-container container-fluid">
      <div className="localtion-container p-3 shadow-sm rounded">
        <h3 className="text-center">
          Get in <strong style={{ color: '#1bbd64' }}>Contact</strong> with us
        </h3>
        <iframe
          className="localtion-container"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.951242805594!2d78.43877417341437!3d17.55750789788549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8febae684725%3A0xf68829bbd4741552!2sMahesh%20Arcade.!5e0!3m2!1sen!2sin!4v1699165214486!5m2!1sen!2sin"
          frameBorder="0"
          title="map"
          allowFullScreen
        />
      </div>
      <div className="contact-details-container   container-fluid row">
        <div className="col-12 col-md-4 d-flex flex-column mb-3">
          <div className="contact-sub-container">
            <IoLocationOutline />
          </div>
          <div>
            <h1 className="item-heading">Location:</h1>
            <p className="address">Bhaduraplli</p>
            <p className="address">Hyderabad</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column mb-3">
          <div className="contact-sub-container">
            <GoMail />
          </div>
          <div>
            <h1 className="item-heading">Email:</h1>
            <p className="address">accadamic.info@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column">
          <div className="contact-sub-container">
            <BsPhone />
          </div>
          <div>
            <h1 className="item-heading">Cell:</h1>
            <p className="address">+1 9398895448</p>
            <p className="address">+1 9182888482</p>
          </div>
        </div>
      </div>
      <div className="button-container p-3 shadow-sm rounded">
        <div className="input-container mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            onChange={(e) => {
              setName(e.target.value);
              setIsTrue(false);
              setErrorMessage('');
            }}
            value={name}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
              setIsTrue(false);
              setErrorMessage('');
            }}
            value={email}
          />
        </div>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Subject"
          onChange={(e) => {
            setSubject(e.target.value);
            setIsTrue(false);
            setErrorMessage('');
          }}
          value={subject}
        />
        <textarea
          rows="7"
          className="form-control mb-3"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button
          className={isTrue ? 'btn btn-danger' : 'btn btn-success button'}
          onClick={sendMessage}
        >
          Send Message
        </button>
        <p className="mt-3">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
