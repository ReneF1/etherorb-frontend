/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import fetchPriceHistory from '../services';

function loadPriceHistory() {
  return {
    type: 'FETCH_PRICE_HISTORY',
        payload: fetchPriceHistory().then((data) => { // eslint-disable-line
          return data;
        }),
  };
}

export default loadPriceHistory;
