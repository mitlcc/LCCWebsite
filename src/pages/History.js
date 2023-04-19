import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

class History extends Component {
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
        History Page
      </>
    );
  }
}

export default History;
