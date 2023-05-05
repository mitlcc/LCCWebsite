import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Team from "../Components/Team";
import MemberOrgs from "../Components/MemberOrgs";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getWebsiteData() {
    $.ajax({
      url: "./websiteData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ websiteData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getWebsiteData();
  }

  render() {
    return (
      <>
        <Header data={this.state.websiteData.main} />
        <About data={this.state.websiteData.main} />
        <Team data={this.state.websiteData.exec} />
        <MemberOrgs data={this.state.websiteData.orgs} />
        <Contact data={this.state.websiteData.main} />
        <Footer data={this.state.websiteData.main} />
      </>
    );
  }
}

export default Home;
