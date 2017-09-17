export default function reducer(state = {
  loading: null,
  priceHistory: '',
  error: false,
}, action) {
  switch (action.type) {
    case 'BUILD_PRICE_HISTORY': {
      return {
        ...state,
        [action.id]: action.payload.data,
      };
    }
    default:
      return state;
  }
}
