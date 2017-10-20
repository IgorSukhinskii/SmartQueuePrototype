import './Time.css';

import React, { Component } from 'react';

class Time extends Component {
    setTime() {
        var currentdate = new Date();
        var hours = currentdate.getUTCHours() - currentdate.getTimezoneOffset()/60;    
    
        // correct for number over 24, and negatives
        if( hours >= 24 ){ hours -= 24; }
        if( hours < 0   ){ hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if( hours.length === 1 ){ hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = currentdate.getUTCMinutes();

        // add leading zero, first convert hours to string
        minutes = minutes + "";
        if( minutes.length === 1 ){ minutes = "0" + minutes; }

        const seconds = currentdate.getUTCSeconds();
        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

    componentWillMount() {
        const {current, hours, minutes, seconds} = this.props;
        if (current) {
            this.setTime();
        } else {
            this.setState({
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        }
    }

    componentDidMount() {
        const {current} = this.props;
        if (current) {
            window.setInterval(() => {
                this.setTime();
            }, 1000);
        }
    }

    render() {
        const {current, big} = this.props;
        const {hours, minutes, seconds} = this.state;

        const separator = current ? ((seconds % 2 === 0) ? ':' : ' ') : ':';

        const className = "time" + (big ? " time--big" : "");

        return (
            <span className={className}>{hours}{separator}{minutes}</span>
        );
    }
}

export default Time;
