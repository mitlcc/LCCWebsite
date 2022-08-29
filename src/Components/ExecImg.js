import React, { Component } from "react";
import BioPopup from "./BioPopup";

class ExecImg extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        }
        this.member = this.props.member;
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

    render() {
        return (
            <div className="item-wrap">
                <img alt={this.member.title} 
                    src={this.props.image} 
                    style={{ cursor: "pointer" }}
                    onClick={this.toggleModal}
                />
                {this.state.modalVisible ? <BioPopup 
                                        member={this.member}
                                        src={this.props.image}
                                        toggle={this.toggleModal}
                                    /> 
                                    : null}
                <div style={{ textAlign: "center" }}>
                    {this.member.title}
                    <br />
                    {this.member.name}
                </div>
            </div>
        );
    };
}

export default ExecImg;