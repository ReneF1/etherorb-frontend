/**
 * Created by renefuchtenkordt on 04.07.17.
 */
import React, { Component } from 'react';
import moment from 'moment';

class countdown extends Component {

  constructor() {
    super();
    this.state = { countdown: moment().format('HH:MM:ss') };
  }

  render() {
    setTimeout(() => {
      this.setState({ countdown: moment().format('HH:MM:ss') });
    }, 1000);
    return (
      <div>
        {this.state.countdown}
      </div>
    );
  }
}

export default countdown;
