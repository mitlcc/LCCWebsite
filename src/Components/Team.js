import React, { Component } from "react";
import Fade from "react-reveal";
import ExecImg from "./ExecImg";

//Should take in exec props with data about each exec member
let id = 0;
class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        if (!this.props.data) return null;

        const exec = this.props.data.team.map(member => {
            const image = "images/exec/" + member.image;

            return (
                <div key={id++} className="columns portfolio-item">
                  <ExecImg member={member} image={image} />
                </div>
            );
        });


        return (
            <section id="team">
              <Fade left duration={1000} distance="40px">
                <div className="row">
                  <div className="twelve columns collapsed">
                    <h1>{this.props.data.description}</h1>
                    <h2>Click on each to learn more!</h2>
      
                    <div
                      id="portfolio-wrapper"
                      className="bgrid-thirds s-bgrid-thirds cf"
                    >
                      {exec}
                    </div>
                  </div>
                </div>
              </Fade>
            </section>
          );
    }
}

export default Team;