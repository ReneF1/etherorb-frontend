/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import axios from 'axios';
import moment from 'moment'

export function fetchPrice() {
    return function(dispatch) {
        dispatch({type: "FETCH_PRICE"});

        /*
         Ethereum Price from Kraken API
         */
        axios.get('https://api.kraken.com/0/public/Ticker?pair=ETHUSD')
            .then((response) => {
                dispatch({type: "FETCH_PRICE_FULFILLED", payload: response.data.result.XETHZUSD.a[0], timestamp: moment.now()})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PRICE_REJECTED", payload: err})
            })
    }
}
