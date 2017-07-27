/**
 * Created by renefuchtenkordt on 04.07.17.
 */
import React, {Component} from 'react';
import moment from 'moment';

class countdown extends Component {

    constructor() {
        super();
        let now = moment();
        let roundUp = now.minute() || now.second() || now.millisecond() ? now.add(1, 'hour').startOf('hour') : now.startOf('hour');

        setInterval(() => {
            let duration = moment.duration(moment(roundUp).format('x') - moment().format('x'), 'milliseconds');
            this.setState({countdown: duration.hours() + ":" + duration.minutes() + ":" + duration.seconds()})
        }, 1000);


        this.state = {
            countdown,
            roundUp
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.roundUp.format('HH:mm')}</p>
                <p>{this.state.countdown}</p>
            </div>
        );
    }
}

export default countdown;
