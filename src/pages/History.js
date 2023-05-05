import React, { Component } from "react";
import $ from "jquery";

import Timeline from "../Components/Timeline";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyData: [],
    };

    this.items = [
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg",
          },
        },
      },
    ];
  }

  // TODO(pforderique): Remove this if not being used.
  getHistoryData() {
    $.ajax({
      url: "./historyData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ historyData: data });
        console.log(typeof data[0].title);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getHistoryData();
  }

  render() {
    if (!this.state.historyData) return null;

    const video = (
      <iframe
        className="history-video"
        title="vid"
        allow="autoplay;"
        style={{ border: "none" }}
        src="https://clipchamp.com/watch/mUnFroIojhu/embed"
      ></iframe>
    );

    return (
      <section className="history-page">
        <h1 className="org-image-title">LCC History</h1>
        <article className="history-about">
          <section className="history-card">
            <h3>Overview</h3>
            Currently, the Latino Cultural Center oversees 8 clubs: Casino
            Rueda, Cuban-American Student Association (CASA), Club Peru, Latin
            Dance Club (LDC), Latinos in Engineering and Science (MAES), La
            Union Chicana por Aztlán (LUChA), Mujeres Latinas, Society of
            Hispanic Professional Engineers (SHPE) It's history and history of
            Latin American/Hispanic students and clubs in general has now been
            researched, documented, and presented here on the LCC's website,
            <i>
              created by Piero Orderique in the Spring of 2023 as part of his
              final project for STS.050 History of MIT.
            </i>
          </section>
          <section className="history-card">
            To kick things off, here's a video interviewing the current 22-23
            LCC president, Isabella Salinas.
            {video}
          </section>
        </article>

        <Timeline />
      </section>
    );
  }
}

export default History;
