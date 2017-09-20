export default function reducer(state = {
}, action) {
  switch (action.type) {
    case 'BUILD_PRICE_HISTORY_FULFILLED': {
      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    }
    default:
      return state;
  }
}
