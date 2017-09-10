export default function reducer(state = {
  lastHour: '',
  nextHour: '',
  countdownTimer: '',
  timeArray: '',
}, action) {
  switch (action.type) {
    case 'GET_MOMENT_TIME_NOW': {
      return {
        ...state,
        now: action.payload,
      };
    }
    case 'GET_MOMENT_TIME_LAST_HOUR': {
      return {
        ...state,
        lastHour: action.payload,
      };
    }
    case 'GET_MOMENT_TIME_NEXT_HOUR': {
      return {
        ...state,
        nextHour: action.payload,
      };
    }
    case 'GET_MOMENT_TIME_COUNTDOWN': {
      return {
        ...state,
        countdownTimer: action.payload,
      };
    }
    case 'GET_MOMENT_TIME_ARRAY': {
      return {
        ...state,
        timeArray: action.payload,
      };
    }
    default:
      return state;
  }
}
