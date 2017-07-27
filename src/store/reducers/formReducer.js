import {reducer as formReducer} from 'redux-form'

export default function formReducer(state = {
    form: '',
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
