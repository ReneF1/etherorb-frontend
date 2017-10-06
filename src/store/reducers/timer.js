export default function reducer(state = {
}, action) {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        [action.payload.id]: action.payload.timestamp,
      };
    default:
      return state;
  }
}
