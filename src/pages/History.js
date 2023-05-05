import React, { Component } from "react";
import { navigate } from "@reach/router";

import Timeline from "../Components/Timeline";

class History extends Component {
  render() {
    const presidentVideo = (
      <iframe
        className="history-video"
        title="vid"
        allow="autoplay;"
        style={{ border: "none" }}
        src="https://clipchamp.com/watch/mUnFroIojhu/embed"
      ></iframe>
    );

    const backArrow = (
      <div onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="back-arrow"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      </div>
    );

    return (
      <section className="history-page">
        {backArrow}
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
            <h3>Presidential Welcome</h3>
            To kick things off, here's a video interviewing the current 22-23
            LCC president, Isabella Salinas.
            {presidentVideo}
          </section>

          <section className="history-card">
            <h3>Alumni Interviews</h3>

            <article>
              <h4 className="text-center">Luisa Apolaya</h4>
              <h5 className="text-center text-gray">
                2018 Club Peru President
              </h5>
              <section className="img-left">
                <img src="images/history/luisa.jpg" alt="Luisa" />
              </section>
              <section>
                <div>
                  <p className="history-question">About Luisa</p>
                  <p className="history-answer">
                    My name is Luisa Apolaya Torres, Class of 2021. I'm a
                    product designer living in Austin, TX, and I just spent the
                    last 8 months confounding a startup tackling affordable
                    housing in the city.
                  </p>
                </div>
                <div>
                  <p className="history-question">
                    What motivated you to start Club Peru?
                  </p>
                  <p className="history-answer">
                    I helped bring Club Peru together, especially during my
                    sophomore year. The story of how it was founded goes back to
                    alumni Matias Hanco, Naomi Quispe, and Joaquin
                    Girarldo-Laguna. Matías and Naomi we're '18 I think - but
                    they approached me and Ryan Mansilla ('21) my freshman year
                    and told us they really wanted to bring Peruvians together
                    on campus, especially since then there was the hype of the
                    World Cup and Peru qualifying for the first time! That a was
                    a very exciting time.
                  </p>
                  <p className="history-answer">
                    Their motivation was making a space to celebrate Peruvian
                    culture in the LCC - because our food and media and history
                    are pretty distinct from the established groups, like LUCHA.
                    There was a need to also make the LCC inviting for all South
                    American cultures at the time, that was a big not obstacle,
                    but general observation that the LCC could improve its
                    outreach to all Latine students - especially international
                    and Spanish-speaking students of different Latine cultures.
                  </p>
                </div>
                <div>
                  <p className="history-question">
                    How important was the LCC (and affiliated orgs) to your time
                    at MIT?
                  </p>
                  <p className="history-answer">
                    My freshman year, I wasn't very involved in the LCC. I used
                    to go to Casino Rueda practices whenever I could, but didn't
                    really get involved until upperclassman who were Peruvian
                    invited me to be a part of the board. They were really
                    encouraging and motivated to think that I could bring
                    something good to the community. My sophomore fall, I joined
                    the LCC board as director of external relations, and the
                    following years, I was director of publicity and Sin Límite
                    chair. My last years, I led a musical theater production of
                    In the Heights and a virtual freshman mentorship program
                    during COVID 19. (Also off the record, I was part of the
                    group that organized the Latine hackathon in Lobby 7, fun
                    times 😁😁😁)
                  </p>
                </div>
              </section>
            </article>
          </section>
        </article>

        <h2 className="history-timeline-title">Timeline</h2>
        <Timeline />
      </section>
    );
  }
}

export default History;
