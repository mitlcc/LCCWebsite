import React, { Component } from "react";
import Fade, { Slide } from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const { name } = this.props.data;
    const { street, city, state, zip } = this.props.data.address;


    const networks = this.props.data.social.map(network => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Slide right duration={1000}>
            <div className="twelve columns">
              {name} • {street}, {city}, {state} {zip}
            </div>
          </Slide>
        </div>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
