//@flow

import React, { useState } from "react";
import "../styles/Contact.css";
import { gql, useMutation } from "@apollo/client";

const ADD_TO_TABLE = gql`
  mutation addToTable($email: String!, $message: String!) {
    sendMessage(email: $email, message: $message) {
      message
    }
  }
`;

const ContactForm = (): React$Node  => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [createRow] = useMutation(ADD_TO_TABLE, {
    variables: {
      email: formState.email,
      message: formState.message,
    },
  });

  return (
    <div className="Contact">
      <form
        id="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          createRow();
          alert("Message successfully submitted. Thank you for your time!");
        }}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name here"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
          />
          <pre></pre>
        </div>
        <pre></pre>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your e-mail here"
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
          />
          <pre></pre>
        </div>
        <pre></pre>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="1"
            placeholder="Wanna share something with us?"
            value={formState.message}
            onChange={(e) =>
              setFormState({
                ...formState,
                message: e.target.value,
              })
            }
          />
          <pre></pre>
        </div>
        <pre></pre>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
