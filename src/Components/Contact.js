import React, { Component } from "react";
import { Fade } from "react-reveal";
import Calendar from './Calendar'

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const { contactMessage, email } = this.props.data; 
    const mailLink = "mailto:" + email;

    return (
      <section id="contact">
        <Calendar data={this.props.data} />
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="header-col">
              <i className="fa fa-envelope fa-5x" />
            </div>

            <div className="row">
              <p className="lead">{contactMessage}
                <a href={mailLink}>{email}</a>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
