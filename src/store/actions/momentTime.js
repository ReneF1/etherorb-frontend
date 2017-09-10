/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
const now = moment();
const roundDown = moment().minute() || moment().second() || moment().millisecond() ? moment().subtract(0, 'hour').startOf('hour') : moment().startOf('hour');
const roundUp = moment().minute() || moment().second() || moment().millisecond() ? moment().add(1, 'hour').startOf('hour') : moment().startOf('hour');

const start = new Date(roundDown);
const end = new Date(roundUp);
const range = moment.range(start, end);

const minutes = Array.from(range.by('minute'));
const timeArray = minutes.map(m => m.format('x'));

function getNow() {
  return {
    type: 'GET_MOMENT_TIME_NOW',
    payload: now,
  };
}

function getLastHour() {
  return {
    type: 'GET_MOMENT_TIME_LAST_HOUR',
    payload: roundDown,
  };
}

function getNextHour() {
  return {
    type: 'GET_MOMENT_TIME_NEXT_HOUR',
    payload: roundUp,
  };
}

function buildCountdownDuration() {
  const duration = moment.duration(moment(roundUp).format('x') - moment().format('x'), 'milliseconds');
  return {
    type: 'GET_MOMENT_TIME_COUNTDOWN',
    payload: duration,
  };
}

function buildTimeArray() {
  return {
    type: 'GET_MOMENT_TIME_ARRAY',
    payload: timeArray,
  };
}

export {
    getNow,
    getLastHour,
    getNextHour,
    buildCountdownDuration,
    buildTimeArray,
};
