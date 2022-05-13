import './index.scss'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import loadjs from 'loadjs';

const ContactForm = () => {
  //LoadJS
  var loadjs = require('loadjs');
  loadjs('https://www.google.com/recaptcha/api.js');

  //EmailJS 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'F9oEz7SDllMk_nd8Z')
      .then((result) => {
          console.log(result.text);
          alert("Message succesfully sent!");
          window.location.reload(false);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
      <>
        <div className="contact-form">
            <h2>Contact <span className="text-highlight">Me</span>.</h2>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="user_name" placeholder="Name" required />
                    </li>
                    <li className="half">
                        <input type="email" name="user_email" placeholder="E-mail" required />
                    </li>
                    <li>
                        <input type="text" name="subject" placeholder="Subject" required />
                    </li>
                    <li>
                        <textarea name="message" placeholder="Message" required />
                    </li>
                    <div className="form-submit">
                        <div className="g-recaptcha" data-theme="dark" data-sitekey="6LdKGekfAAAAAABXIRrlQ9P4bS8QLxnTFx-jaw_m"></div>
                        <input type="submit" className="button-send" value="Send" />
                    </div>
                </ul>
            </form>
        </div>
      </>
    
  );
};

export default ContactForm;
