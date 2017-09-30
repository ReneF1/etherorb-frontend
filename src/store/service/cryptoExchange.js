import axios from 'axios';
// TODO: Use other crypto api -> this one gives out different values for same ts
const cryptoExchangeService = (id, cryptoSymbol, currencySymbol, market, timeArray, now) =>
    new Promise((resolve) => {
      const data = [];
      const promises = [];

      timeArray.forEach((value) => {
        if (now >= value) {
          const requestUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${cryptoSymbol}&tsyms=${currencySymbol}&markets=${market}&ts=${value}`;
          promises.push(axios.get(requestUrl));
        }
      });

      Promise.all(promises).then((results) => {
        results.forEach((response) => {
            var url = new URL(response.config.url);
          data.push({
            val: response.data[cryptoSymbol][currencySymbol],
            timestamp: url.searchParams.get('ts'),
          });
        });
        resolve({
          data,
          id,
        });
      });
    });
export default cryptoExchangeService;
