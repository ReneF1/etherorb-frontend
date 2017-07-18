export default function reducer(state = {
  price: '',
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_PRICE_HISTORY': {
      return {
        ...state,
        price: action.payload,
      };
    }
    default:
      return state;
  }
}
