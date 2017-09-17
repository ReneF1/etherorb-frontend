/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import axios from 'axios';

function buildPriceHistory(id, cryptoSymbol, currencySymbol, market, timeArray) {
  const cryptoArray = [];
  timeArray.forEach((value) => {
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${cryptoSymbol}&tsyms=${currencySymbol}&markets=${market}&ts=${value}`).then((response) => {
      cryptoArray.push({ date: value, close: response.data });
    });
  });
  return {
    type: 'BUILD_PRICE_HISTORY',
    payload: { data: cryptoArray },
    id,
  };
}

export default buildPriceHistory;
