import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const description = this.props.data.description;

    const events = this.props.data.events.map(event => {
      return (
        <div key={event.name} className="three columns aboutEvents">
          <i className={event.media} />
          <h4>{event.name}</h4>
          <p>{event.description}</p>
        </div>
      );
    });

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="LCC Logo"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>
              <p>{description}</p>
            </div>

            <div className="twelve columns">
              <img
                src="images/newheader.jpg"
                alt="LCC Header"
                style={{ paddingBottom: 24 }}
              />
            </div>

          </div>

          {/* Main events from LCC */}

          <div className="row">
            <div
              id="main-events"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {events}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
