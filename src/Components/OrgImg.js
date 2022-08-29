import React, { Component } from "react";

class OrgImg extends Component {
    render() {
        return (
            <div className="org-image">
                <img className="org-image-img" src={this.props.img} alt={this.props.name} />
                <div className="org-image-overlay">
                    <div className="org-image-title">
                        <a href={this.props.site}>{this.props.name}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrgImg;