/**
 * Created by renefuchtenkordt on 12.07.17.
 */
import axios from 'axios';

/*
 Ethereum Price from Kraken API
 */
function fetchPriceHistory() {
  return axios.get('https://api.kraken.com/0/public/Ticker?pair=ETHUSD')
        .then((response => response.data.result.XETHZUSD.a[0]))
        .catch((err => err));
}

export default fetchPriceHistory;
