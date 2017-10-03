import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
const now = () => moment().unix();
const roundDown = () => moment().minute() || moment().second() || moment().millisecond() ? moment().subtract(0, 'hour').startOf('hour') : moment().startOf('hour');
const roundUp = () => moment().minute() || moment().second() || moment().millisecond() ? moment().add(1, 'hour').startOf('hour') : moment().startOf('hour');

const start = new Date(roundDown());
const end = new Date(roundUp());
const range = moment.range(start, end);

const minutes = Array.from(range.by('minute'));
const timeArray = () => minutes.map(m => m.unix());
const payout = () => moment(roundUp()).format('X') - moment().format('X');

const deadline = () => moment(roundUp()).format('X') - moment().format('X') - 900000;

function setNow() {
  return {
    type: 'SET_NOW',
    payload: now(),
  };
}

function setLastHour() {
  return {
    type: 'SET_LAST_HOUR',
    payload: roundDown(),
  };
}

function setNextHour() {
  return {
    type: 'SET_NEXT_HOUR',
    payload: roundUp(),
  };
}

function setPayoutDuration() {
  return {
    type: 'SET_PAYOUT_DURATION',
    payload: payout(),
  };
}

function setDeadlineDuration() {
  return {
    type: 'SET_DEADLINE_DURATION',
    payload: deadline(),
  };
}

function buildTimeArray() {
  return {
    type: 'BUILD_ARRAY',
    payload: timeArray(),
  };
}

export {
    setNow,
    setLastHour,
    setNextHour,
    setPayoutDuration,
    setDeadlineDuration,
    buildTimeArray,
};
