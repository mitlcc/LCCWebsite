import React, { Component } from "react";
import { Slide } from "react-reveal";
import OrgImg from "./OrgImg";


class MemberOrgs extends Component {

    render() {
        if (!this.props.data) return null;

        const orgs = this.props.data.map(org => {
            const img = "images/orgs/" + org.image;
            return (
                <div key={org.name} className="four columns org-image-wrapper">
                    <OrgImg 
                      name={org.name}
                      img={img}
                      site={org.link}
                    />
                </div>
            );
        })

        return (
            <section id="member-orgs">
              <Slide left duration={1300}>
                  <div className="row">
                    <div className="twelve columns">
                        <h1>Member Organizations</h1>
                        <div
                        id="orgs-wrapper"
                        className="bgrid-thirds s-bgrid-thirds cf"
                        >
                        {orgs}
                        </div>
                    </div>
                  </div>
              </Slide>
            </section>
        );
    }
}

export default MemberOrgs;