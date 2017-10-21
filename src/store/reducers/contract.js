export default function reducer(state = {
  price: '',
  poolSize: '',
  buyingHistory: [],
  potSize: 0,
  ticketPrice: 0,
  isActive: true,
  prediction: 0,
  loading: false,
  loadingTicket: false,
  error: null,
  buyTicket: false,
}, action) {
  switch (action.type) {
    case 'GET_CONTRACT_DATA': {
      return {
        ...state,
        contractData: action.payload,
      };
    }
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
    case 'GAME_DATA_FULFILLED': {
      return {
        ...state,
        loading: false,
        poolSize: action.payload.totalTickets,
        prediction: action.payload.totalEstimation / action.payload.totalTickets,
        potSize: action.payload.totalPot,
        isActive: action.payload.isActive,
        ticketPrice: action.payload.ticketPrice,
      };
    }
    case 'BUY_TICKET_PENDING':
      return {
        ...state,
        loadingTicket: true,
      };
    case 'BUY_TICKET_FULFILLED':
      return {
        ...state,
        loadingTicket: false,
        buyTicket: true,
        prediction: action.payload,
        error: true,
      };
    case 'BUY_TICKET_REJECTED':
      return {
        ...state,
        loadingTicket: null,
        error: true,
      };

    case 'BUYING_HISTORY_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'BUYING_HISTORY_FULFILLED':
      return {
        ...state,
        loading: false,
        buyingHistory: action.payload,
      };
    case 'BUYING_HISTORY_REJECTED':
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
