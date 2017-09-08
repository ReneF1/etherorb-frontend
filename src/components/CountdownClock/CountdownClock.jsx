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
            <p className="countdownSubhead--top">{props.countdownDescTop}</p>
            <p className="countdownSubhead--bottom">{props.countdownDescBot}</p>
        </div>
    );
export default CountdownClock;
