export default function reducer(state = {
    ethUsd: '',
    loading: null,
    error: false,
}, action) {
    switch (action.type) {
        case 'GET_ETH_USD_REQUEST': {
            return {
                ...state,
                loading: "Loading",
            };
        }
        case 'GET_ETH_USD_SUCCESS': {
            return {
                ...state,
                loading: false,
                ethUsd: action.payload.data.result.XETHZUSD.a[0],
            };
        }
        case 'GET_ETH_USD_ERROR': {
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
