import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import fb from "../images/FB-icon-black.png";
import linkedin from "../images/linkedin-icon-black.png";
import twitter from "../images/Twitter-icon-black.png";
import { useHistory } from 'react-router-dom';


function Contact() {
    const history = useHistory();
    const handleClick = () => {
        let path = `newPath`; 
        history.push(path);
  }
  return (
    <>

    <div className="form" style={{zIndex:100}}>
      <span className="btn close-btn" onClick={handleClick}>
        x
      </span>
      <br />
      <div className="heading">
        <div className="title">Contact</div>
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>
      <ContactForm />
      <br />
      <div className="footer">
      Need more info? &nbsp;
        <a href="mailto:hello@newzera.com">hello@newzera.com</a> 
        <span className="logo">
          <img src={fb} alt="facebook" /> &nbsp;
          <img src={linkedin} alt="linkedin" /> &nbsp;
          <img src={twitter} alt="twitter" />
        </span>
      </div>
    </div>
    </>
  );
}

export default Contact;
