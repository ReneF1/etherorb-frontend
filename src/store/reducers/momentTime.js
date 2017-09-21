export default function reducer(state = {
  lastHour: '',
  nextHour: '',
  payoutDuration: '',
  deadlineDuration: '',
  timeArray: '',
  startedAt: undefined,
  stoppedAt: undefined,
  deadline: undefined,
}, action) {
  switch (action.type) {
    case 'SET_NOW': {
      return {
        ...state,
        now: action.payload,
      };
    }
    case 'SET_LAST_HOUR': {
      return {
        ...state,
        lastHour: action.payload,
      };
    }
    case 'SET_NEXT_HOUR': {
      return {
        ...state,
        nextHour: action.payload,
      };
    }
    case 'SET_PAYOUT_DURATION': {
      return {
        ...state,
        payoutDuration: action.payload,
      };
    }
    case 'SET_DEADLINE_DURATION': {
      return {
        ...state,
        deadlineDuration: action.payload,
      };
    }
    case 'BUILD_ARRAY': {
      return {
        ...state,
        timeArray: action.payload,
      };
    }
    default:
      return state;
  }
}
