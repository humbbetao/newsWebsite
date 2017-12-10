import React from 'react';
import thankYou from './img/thankYou.jpg';
import '../css/contactUs.css';


const ContactUs = () =>
    <div className="newsBody contactUs" >
        <h1>Thank you!</h1>
        <p>Thanks for your message.</p>
        <img src={thankYou} alt="Thanks your message" title="Thanks your message" />
    </div>

export default ContactUs;