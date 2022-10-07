import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'





function ContactUs() {
  const [result, showResult] = useState(false);

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    
    const Result =() => {
  return(
    <p>Your message has been successfully sent. We will contact you</p>
  )
    }

    emailjs.sendForm('service_d8vpl9c', 'template_0qzcbpo', form.current, 'wI6BFnpKPSReyP01s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);
  };

  return (
    <div className="container">
    <form action="" onSubmit={sendEmail}>
      <div className="formWord">
        <h2>How can we help?</h2>
        <span>Full Name*</span>
        <br />
        <input className='input100' type="text" name="fullName" required />
        <br />
        <span>Enter Email*</span>
        <br />
        <input className="input100" type="text" name="email" required />
        <br />
        <span>Subject*</span>
        <br />
        <input className="input100" type="text" name="subject" required />
        <br />


      </div>

      <div className='formWord'>
        <span>Message*</span>
        <br/>
        <textarea name="message" required></textarea>

        <input type="submit" value="Submit"/>

        <div className="row">{result ? <Result /> : null}</div>

        <div>
          <p>If you would prefer to speak to our support team, just call the relevant number below:
            
            
            CUSTOMER SERVICE - Tel: 0123 456 789 or alternatively email us at qa.cinemas@qacinemas.com  </p>
        </div>
        <br />

        <div>


        </div>

            

        
        
        


      </div>


</form> </div> )
};


export default ContactUs;