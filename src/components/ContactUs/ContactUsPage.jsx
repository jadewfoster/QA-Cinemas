import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d8vpl9c",
        "template_0qzcbpo",
        form.current,
        "wI6BFnpKPSReyP01s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="formWord">
          <h2>How can we help?</h2>
          <span>Full Name</span>
          <br />
          <input className="input100" type="text" name="fullName" required />
          <br />
          <span>Enter Email</span>
          <br />
          <input className="input100" type="text" name="email" required />
          <br />
          <span>Subject</span>
          <br />
          <input className="input100" type="text" name="subject" required />
          <br />

          <span>Message</span>
          <br />
          <textarea name="message" required></textarea>

          <input type="submit" value="Send" />
        </div>

        <div>
          <p className="formWord" padding="1.5rem">
            If you would prefer to speak to our support team, just call the
            relevant number below: CUSTOMER SERVICE - Tel: 0123 456 789 or
            alternatively email us at qa.cinemas@qacinemas.com{" "}
          </p>
        </div>
        <br />
      </form>
    </div>
  );
};

export default ContactUsPage;
