import axios from 'axios';

const cryptoExchangeService = (id, cryptoSymbol, currencySymbol, market, timeArray, now) =>
    new Promise((resolve) => {
      const data = [];
      const promises = [];
      const timestamp = [];

      timeArray.forEach((value) => {
        if (now >= value) {
          const requestUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${cryptoSymbol}&tsyms=${currencySymbol}&markets=${market}&ts=${value}`;
          promises.push(axios.get(requestUrl));
          timestamp.push(value);
        }
      });

      Promise.all(promises).then((results) => {
        results.forEach((response, index) => {
          data.push({
            val: response.data[cryptoSymbol][currencySymbol],
            timestamp: timestamp[index],
          });
        });
        resolve({
          data,
          id,
        });
      });
    });
export default cryptoExchangeService;
