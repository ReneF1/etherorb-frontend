export default function reducer(state = {
}, action) {
  switch (action.type) {
    case 'GET_ETH_USD_MINUTES_FULFILLED': {
      return {
        ...state,
        ETH_USD_HOUR: action.payload,
      };
    }
    case 'GET_ETH_USD_NOW_FULFILLED': {
      return {
        ...state,
        ETH_USD_NOW: action.payload,
      };
    }
    default:
      return state;
  }
}
