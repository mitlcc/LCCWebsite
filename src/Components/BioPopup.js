import React, { Component } from "react";
import Fade from "react-reveal";


//Important note about images: Their aspect ratio should be edited to 4:3 
//(before uploaded to exec image folder) to make sure format of site is preserved
// 4 height x 3 width
class BioPopup extends Component {
    constructor(props) {
        super(props);
        this.member = this.props.member;
    }

    render() {
        return (
            <Fade bottom duration={600} distance="40px">
              <div className="popup-modal">
                <div className="modal-content" >
                    {/* <div className="mfp-close"> */}
                    <button className="mfp-close"  onClick={this.props.toggle}>x</button>
                    {/* </div> */}
                    <div className="popupImage">
                        <img src={this.props.src} alt={this.member.title} className="mfp-img" />
                    </div>
                    <div className="popupContent">
                        <div className="memberBio">
                            <h2 align="center">{this.member.name}</h2>
                            <h3 align="center">{this.member.title}</h3>
                            <p>{this.member.bio}</p>
                        </div>
                    </div>
                </div>
              </div>
            </Fade>
        );
    }
}

export default BioPopup;