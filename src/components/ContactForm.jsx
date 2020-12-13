import React from "react";
import "./Contact.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="Contact">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name here"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
            <br />
          </div>< br/>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">E-mail</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your e-mail here"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            < br/>
          </div>< br/>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="1"
              placeholder="Wanna share something with us?"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          <br/>
          </div><br />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
}

export default ContactForm;
