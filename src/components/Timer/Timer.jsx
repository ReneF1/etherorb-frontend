import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startTimer } from '../../store/actions';
import { unixTimestampToCountdown } from '../../shared/formater';

function calculateTimestamp(targetTime) {
  return targetTime - moment().format('x');
}

class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 100);
    this.props.startTimer(moment().add(this.props.timestamp, 'milliseconds').format('x'), this.props.id);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const timestamp = calculateTimestamp(this.props.timer[this.props.id]);
    return (
      <span>
        {unixTimestampToCountdown(timestamp)}
      </span>
    );
  }
}

Timer.propTypes = {
  startTimer: PropTypes.func.isRequired,
  timestamp: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  timer: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  timer: state.timer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  startTimer,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
