export default function reducer(state = {
  loading: null,
  response: '',
  error: false,
}, action) {
  switch (action.type) {
    case 'BUILD_CRYPTO_ARRAY_SUCCESS': {
      return {
        ...state,
        response: action.payload,
      };
    }
    default:
      return state;
  }
}
