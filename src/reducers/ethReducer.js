export default function reducer(state={
    price: [],
    time: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_PRICE": {
            return {...state, fetching: true}
        }
        case "FETCH_PRICE_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PRICE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                price: action.payload,
                time: action.timestamp,
            }
        }
    }

    return state
}
