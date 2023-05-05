import React, { Component } from "react";
import $ from "jquery";

import Timeline from "../Components/Timeline";

class History extends Component {
  render() {
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
        <h1 className="history-title">LCC History</h1>
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
            <i>Created by Piero Orderique | MIT '24</i>
          </section>

          <section className="history-card">
            To kick things off, here's a video interviewing the current 22-23
            LCC president, Isabella Salinas.
            {video}
          </section>
        </article>

        <h2 className="history-timeline-title">Timeline</h2>
        <Timeline />
      </section>
    );
  }
}

export default History;
