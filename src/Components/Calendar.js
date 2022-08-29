import React, { Component } from "react";
import { Slide } from "react-reveal";


class Calendar extends Component {
    render() {
        if (!this.props.data) return null;

        const { calendarSrc } = this.props.data;

        return (
            <section id="calendar">
                <div className="row calendar">
                    <h2>Check out our upcoming events!</h2>
                </div>
                <Slide left duration={1300}>
                <div className="calendar">
                    <iframe src={calendarSrc} style={{ border: 0 }} width="800" height="600" frameborder="0" scrolling="no" title="Upcoming Events" />
                </div>
                </Slide>
            </section>
        );
    }
}

export default Calendar;