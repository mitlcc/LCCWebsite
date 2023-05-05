import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Timeline extends Component {
  getFlagIcon(countryCode) {
    const link = `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`;
    return <img alt={countryCode} style={{ marginTop: "1rem" }} src={link} />;
  }

  render() {
    const colors = {
      green: "rgb(16, 204, 82)",
      pink: "rgb(233, 30, 99)",
      blue: "rgb(33, 150, 243)",
    };

    const logo = (
      <img
        alt="LCC"
        src="https://raw.githubusercontent.com/mitlcc/LCCWebsite/main/public/images/logo.png"
      />
    );

    return (
      <section id="timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1890"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("CL")}
          >
            <h3>*First Latina graduates from MIT</h3>

            <section className="history-img">
              <img alt="Sophia" src="images/history/sophia.jpg" />
            </section>

            <h6>
              Sophia Gregoria Hayden Bennett possibly becomes the first student
              of Latin American origins to graduate from MIT (her mother was
              from Chile, and she was born in Santiago Chile). She also becomes
              the becomes the first female to earn the S.B. in Architecture from
              MIT.
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://pioneeringwomen.bwaf.org/",
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
                "https://amita.alumgroup.mit.edu/s/1314/bp19/interior.aspx?sid=1314&gid=20&pgid=49227",
                "https://youtu.be/sbLfjb_CMN0",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1910"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>MIT Club of Mexico founded</h3>
            <h6>The first Latin American club is started at MIT.</h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1913"
            dateClassName={"date"}
            iconStyle={{ background: colors.blue, color: "#fff" }}
            icon={logo}
          >
            <h3>MIT Club Latino founded</h3>
            <h6>
              Officially known as "Club Latino-Americano de MIT", the goal was
              to "[keep] in friendly touch with each other all the
              Latin-Americans of Technology [MIT] and [foster] mutually
              beneficial relations between them as individuals and as
              representatives of their several nationalities."
            </h6>

            <p className="sources">
              Sources{" "}
              {["https://thetech.com/issues/123/3/pdf"].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1916"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("PR")}
          >
            <h3>First three Puerto Rican students enroll at MIT</h3>
            <h6>Joining the class of 1920!</h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1929"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>
              The League of United Latin American Citizens (LULAC) is
              established
            </h3>
            <h6>
              LULAC was established in the face of anti-Mexican sentiments in
              the Southwest.
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1960s"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("PR")}
          >
            <h3>Sala de Puerto Rico funded</h3>
            <section className="history-img">
              <img
                alt="Sala de Puerto Rico"
                src="images/history/saladepuertorico.jpg"
              />
            </section>
            <h6>
              Puerto Rican alumni fund construction of Sala de Puerto Rico on
              the second floor of the Stratton Student Center. The fund had 100%
              alumni participation, and possibly serves as a precursor to Latino
              spaces in the student center.
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
                "https://web.mit.edu/eventguide/pdf/stratton_second.pdf",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1975"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>
              Lydia Villa-Komaroff '75 becomes one of the first hispanic women
              to earn a PHD
            </h3>

            <section className="history-img">
              <img alt="Lydia" src="images/history/lydia.jpg" />
            </section>

            <h6>
              "The third Mexican American woman in the United States to receive
              a PhD in sciences and co-founder of The Society for the
              Advancement of Chicanos/Hispanics and Native Americans in Science
              (SACNAS). Villa-Komaroff was part of a team that discovered how
              bacterial cells could be used to generate insulin." She served as
              Whitehead Institute's Vice President for Research and Chief
              Operating Officer (2003-2007?), and in 2003 was named among 100
              Most Influential Hispanics in America
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://amita.alumgroup.mit.edu/s/1314/bp19/interior.aspx?sid=1314&gid=20&pgid=49227",
                "https://youtu.be/gEo5yntDZlA",
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1979"
            dateClassName={"date"}
            iconStyle={{ background: colors.pink, color: "#fff" }}
            icon={logo}
          >
            <h3>Spanish House (La Casa) founded</h3>

            <section className="history-img">
              <img alt="La Casa" src="images/history/lacasa.png" />
            </section>

            <h6>
              "Established to provide an environment to practice Spanish and to
              allow residents to develop an appreciation of the Hispanic
              cultures. The ability to speak Spanish was not required."
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
                "https://thetech.com/issues/123/3/pdf",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1979"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>Mexican-American Students Association (MASA) founded</h3>

            <h6>
              MASA was created to provide Chicanos at MIT with a forum to
              discuss social and academic matters of mutual interest. Other MASA
              activities included:
              <ol>
                {[
                  "Working with the Office of Admissions to recruit more Hispanic Americans to MIT",
                  "Monitoring MIT's commitment to having a truly diverse educational community",
                  "Discussing politcal affairs related to Chicanos and other human beings",
                  "Sponsoring social events, such as picnics, dinners, parties, etc., accented with Mexican festivity",
                ].map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ol>
            </h6>

            <p className="sources">
              Source: LCC Archives File - Table of Contents for “Special Support
              Services for Minority Students at MIT” [date unknown, projected
              1960-1990]
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1981"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("PR")}
          >
            <h3>Association of Puerto Rican Students (APR) established</h3>
            <section className="history-img">
              <img alt="APR" src="images/history/APR.png" />
            </section>
            <h6>
              "The Association of Puerto Ricans (APR) is an ASA-recognized
              student organization led by undergraduates at the Massachusetts
              Institute of Technology (MIT) that is dedicated to serving the
              needs of the MIT Puerto Rican community"
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://thetech.com/issues/123/3/pdf",
                "http://apr.mit.edu/",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1989"
            dateClassName={"date"}
            iconStyle={{ background: colors.green, color: "#fff" }}
            icon={logo}
          >
            <h3>Latino Association of MIT Alumni/ae (LAMITA) is established</h3>

            <section className="history-img">
              <img alt="LAMIT" src="images/history/lamit.png" />
            </section>

            <h6>
              "Our group gathers all MIT alumni who are of Latino descent,
              either having been born in Iberoamerica (all Spanish or Portuguese
              speaking countries in the Americas, plus Spain and Portugal), or
              born elsewhere of a Latino heritage." "Latino Alumni of MIT
              (LAMIT) is part of MIT’s alumni network and is run entirely by
              volunteers. LAMIT organizes events, does community service, and
              supports current and prospective MIT students."
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "https://www.yumpu.com/en/document/view/16241461/mit-diversity-story-timeline-milestones-latinos",
                "https://lamit.alumgroup.mit.edu/s/1314/bp19/home.aspx?gid=179&pgid=49731",
                "https://capd.mit.edu/organizations/latino-alumni-of-mit-lamit/",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1992"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>
              MIT admits five Mexican-American students from Ysleta High School
            </h3>

            <h6>
              Especially notable because Ysleta High School was located in a
              poorer section of El Paso, Texas, and even more remarkable because
              they are all Mexican American.
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "http://news.google.com/newspapers?id=m9kgAAAAIBAJ&sjid=LWsFAAAAIBAJ&pg=5219%2C2388713",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1996"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>La Union Chicana Por Aztlan (LUChA) established </h3>
            <section className="history-img">
              <img alt="LUChA" src="images/history/lucha.jpg" />
            </section>
            <h6>
              "MIT's LUChA is a student organization under the Latino Cultural
              Center. We are dedicated to provinding both cultural and academic
              support to students who identify in any way with the Latino
              culture. We are a familia dedicated to supporting each other and
              creating bonds that last throught a student's entire time here at
              MIT."
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "http://lucha.mit.edu/",
                "https://thetech.com/issues/123/3/pdf",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="1997"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("MX")}
          >
            <h3>
              The Society of Mexican American Engineers and Scientists
              established
            </h3>
            <section className="history-img">
              <img alt="maes" src="images/orgs/maes.jpg" />
            </section>
            <h6>
              "Latinos in Science and Engineering is the second largest
              Engineering and Professional development club at MIT. We focus on
              the on the professional development of its individual members,
              offering them resources and opportunities for success. MAES-MIT
              supports its members by connecting them with corporate sponsors,
              building community, supporting members, and by having fun."
            </h6>

            <p className="sources">
              Sources{" "}
              {[
                "http://maes.mit.edu/",
                "https://stuff.mit.edu/afs/athena/activity/m/maes/www_pre2016/history.html",
                "https://thetech.com/issues/123/3/pdf",
              ].map((link, idx) => (
                <span>
                  <a href={link}>({idx + 1})</a>{" "}
                </span>
              ))}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="2000"
            dateClassName={"date"}
            iconStyle={{ background: colors.blue, color: "#fff" }}
            icon={logo}
          >
            <h3>Paganga 2000 is hosted by MIT LUChA</h3>

            <h6>
              The 29th annual East Coast Chicano/Chicana Student Forum Pachanga
              Conference - including biographies of Latin American/Hispanic
              students facing similar struggles and experiences as todays
              students on topics of family, gender, sexuality, community, and
              belonging.
            </h6>

            <p className="sources">
              Source: LCC Archives - Pachanga 2000 original booklet
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="2001"
            dateClassName={"date"}
            iconStyle={{ background: colors.green, color: "#fff" }}
            icon={logo}
          >
            <h3>Teatro Latino founded by Ishani Das ('03)</h3>

            <h6>
              Goal is to "produce theatrical performances in the Spanish
              language by students who embrace theater and want to gain a higher
              appreciation of the Latin culture"
            </h6>

            <p className="sources">
              Sources{" "}
              {["http://web.mit.edu/teatro-latino/www/main.htm"].map(
                (link, idx) => (
                  <span>
                    <a href={link}>({idx + 1})</a>{" "}
                  </span>
                )
              )}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="2002"
            dateClassName={"date"}
            iconStyle={{ background: colors.pink, color: "#fff" }}
            icon={logo}
          >
            <h3>
              “Development of a Latino Cultural Center: Filling the Void Between
              Students and the Institute” is written by the LCC's founders -
              Raymond Morales, Desiree Ramirez, and Terrence Strader
            </h3>

            <section className="history-img">
              <img alt="maes" src="images/logo.png" />
            </section>

            <h6>
              Reasons listed to support the LCC's creation included:
              <ol>
                {[
                  "Latino population was “largest underrepresented minority group at MIT”, but consistently had a 90% retention rate at a time when MIT's overall retention rate was 98%.",
                  "Many students reporting culture shock and cultural isolation, affecting their time at MIT",
                ].map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ol>
              Their own experiences:
              <ol>
                {[
                  "“Walking through the halls of MIT, one does not hear Spanish on a regular basis”",
                  "Very few people knew who Ceasar Chavez was",
                  "There was not a single portrait hanging on MITs walls of a Latino",
                ].map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ol>
              Proposal included:
              <ol>
                {[
                  "A list of possible locations for the new center - Student Center, past OME office, Stata, Walker",
                  "Full working kitchen for food events",
                  "Space with minimum capacity of 60 students",
                  "Office space big enough to sufficiently accommodate the 6 Latino organizations at MIT at the time: LUChA, SHPE, MAES, APR, Mujeres Latinas, Phi Delta Upsilon",
                  "Shelves to store and maintain a Latino Literature Library",
                  "Reading room, Storage Space",
                ].map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ol>
            </h6>

            <p className="sources">
              Source: LCC Archives - “Development of a Latino Cultural Center:
              Filling the Void Between Students and the Institute” original
              document
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="2019"
            dateClassName={"date"}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={this.getFlagIcon("PE")}
          >
            <h3>Club Peru is founded by Luisa Apolaya</h3>

            <section className="history-img">
              <img alt="clubperu" src="images/orgs/clubPeru.jpg" />
            </section>

            <h6>
              Club Peru is established to support Peruvian students in and
              outside of campus and celebrate Peruvian culture. Club Peru
              officially joined the LCC in 2019 as well.
            </h6>

            <p className="sources">
              Source: Luisa Apolaya, Club Peru Founder 2018
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(255, 255, 255)",
            }}
            date="2021"
            dateClassName={"date"}
            iconStyle={{ background: colors.blue, color: "#fff" }}
            icon={logo}
          >
            <h3>Latin Dance Club (LDC) is founded by Rodrigo</h3>

            <section className="history-img">
              <img alt="LDC" src="images/orgs/ldc.jpg" />
            </section>

            <h6>
              The LDC was created to celebrate different Latin dances and hosts
              several events during the semester. The LDC officially joined the
              LCC in 2023.
            </h6>

            <p className="sources">
              Source: Javier Garcia, 22-23 LDC Co-President
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    );
  }
}

export default Timeline;
