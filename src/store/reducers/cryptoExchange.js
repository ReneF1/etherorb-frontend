export default function reducer(state = {
    loading: null,
    payload: "",
    error: false,
}, action) {
    switch (action.type) {
        case 'GET_CRYPTO_EXCHANGE_REQUEST': {
            return {
                ...state,
                loading: 'Loading',
            };
        }
        case 'GET_CRYPTO_EXCHANGE_SUCCESS': {
            return {
                ...state,
                cryptoSymbol: action.meta.previousAction.payload.cryptoSymbol,
                currencySymbol: action.meta.previousAction.payload.currencySymbol,
                market: action.meta.previousAction.payload.market,
                timestamp: action.meta.previousAction.payload.timestamp,
                response: action.payload.data[action.meta.previousAction.payload.cryptoSymbol][action.meta.previousAction.payload.currencySymbol],
            };
        }
        case 'GET_CRYPTO_EXCHANGE_ERROR': {
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
