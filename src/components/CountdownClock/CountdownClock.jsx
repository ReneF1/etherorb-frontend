import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import './CountdownClock.css';

const CountdownClock = props =>
    (
        <div className="countdownWrapper">
            <ReactCountdownClock
                seconds={props.seconds}
                color={props.color}
                alpha={0.9}
                size={200}
                weight={15}
            />
            <p className="countdownSubhead--top">{props.description[0]}</p>
            <p className="countdownSubhead--bottom">{props.description[1]}</p>
        </div>
    );
export default CountdownClock;
