// @flow

import React from "react";
import ContactForm from "./ContactForm";
import "../styles/Contact.css";
import fb from "../images/FB-icon-black.png";
import linkedin from "../images/linkedin-icon-black.png";
import twitter from "../images/Twitter-icon-black.png";
import { useHistory } from "react-router-dom";
import close from "../images/Close.svg";

const Contact=(): React$Node => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <>
      <div className="con">
        <div className="form">
          <div className="heading">
            <span className="close-btn" onClick={handleClick}>
            <img src={close} alt="close-btn" styles={{background:'transparent'}} />
          </span>
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
      </div>
    </>
  );
}

export default Contact;
