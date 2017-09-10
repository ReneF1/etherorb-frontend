export default function reducer(state = {
  price: '',
  poolSize: '',
  prediction: 1,
  loading: null,
  error: null,
  buyTicket: false,
}, action) {
  switch (action.type) {
    case 'PLACE_BET': {
      return {
        ...state,
        price: action.payload,
      };
    }
    case 'GET_POOLSIZE_REQUEST': {
      return {
        ...state,
        loading: 'Loading',
      };
    }
    case 'GET_POOLSIZE_SUCCESS': {
      return {
        ...state,
        loading: false,
        poolSize: action.payload.data.Poolsize,
        prediction: action.payload.data.Prediction,
      };
    }
    case 'BUY_TICKET_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'BUY_TICKET_FULFILLED':
      return {
        ...state,
        loading: false,
        buyTicket: true,
      };
    case 'BUY_TICKET_REJECTED':
      return {
        ...state,
        loading: null,
        error: true,
      };
    case 'GET_POOLSIZE_ERROR': {
      return {
        ...state,
        loading: null,
        error: true,
      };
    }
    case 'POST_BET_REQUEST': {
      return {
        ...state,
        loading: 'Loading',
      };
    }
    case 'POST_BET_SUCCESS': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'POST_BET_ERROR': {
      return {
        ...state,
        loading: null,
        error: true,
      };
    }
    default:
      return state;
  }
}
