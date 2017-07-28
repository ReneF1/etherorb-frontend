import React from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import './CountdownClock.css'

const CountdownClock = (props) =>
    (
        <div>
            <div className="countdownWrapper">
                <ReactCountdownClock seconds={props.seconds}
                                     color={props.color}
                                     alpha={0.9}
                                     size={150}
                                     weight={5}
                />
            </div>
            <h4 className="countdownSubhead">{props.description}</h4>
        </div>
    );

export default CountdownClock;