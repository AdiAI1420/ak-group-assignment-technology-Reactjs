import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import './Contact.css';


function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-details-container">
                <div className='d-flex flex-col justift-contain-start'>
                    <div className="contact-sub-container">
                        <IoLocationOutline />
                    </div>
                    <div>
                        <h1 className='item-heading'>Location:</h1>
                        <p className='address'>A108 Adam Street</p>
                        <p className='address'>New York NY 535022</p>
                    </div>
                </div>
                <div className='d-flex flex-col'>
                    <div className="contact-sub-container">
                        <GoMail />
                    </div>
                    <div>
                        <h1 className='item-heading'>Email:</h1>
                        <p className='address'>info@expmple.com</p>
                        <p className='address'>contact@exmple.com</p>
                    </div>
                </div>
                <div className='d-flex flex-col'>
                    <div className="contact-sub-container">
                        <BsPhone />
                    </div>
                    <div>
                        <h1 className='item-heading'>Cell:</h1>
                        <p className='address'>+1 08338459440</p>
                        <p className='address'>+1 49499900030</p>
                    </div>
                </div>
            </div>
            <div className="botton-container">
                <div className="input-container">
                    <input type="text" className="name-input" placeholder='Your Name' />
                    <input type="text" className="name-input" placeholder='Your Email' />
                </div>
                <input type="text" className="name-subject" placeholder='Subject' />
                <textarea rows="7" cols="120" className='message'>Message</textarea>
                <button className='btn btn-primary'>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Contact;
