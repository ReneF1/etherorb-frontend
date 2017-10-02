import axios from 'axios';

const cryptoExchangeService = (id, cryptoSymbol, currencySymbol, market, timeArray, now) =>
    new Promise((resolve) => {
      const data = [];
      const promises = [];

      timeArray.forEach((value) => {
        if (now >= value) {
          const requestUrl = `https://min-api.cryptocompare.com/data/histominute?fsym=${cryptoSymbol}&tsym=${currencySymbol}&markets=${market}&toTs=${value}&limit=1`;
          promises.push(axios.get(requestUrl));
        }
      });

      Promise.all(promises).then((results) => {
        results.forEach((response) => {
          data.push(response.data.Data[0]);
        });
        resolve({
          data,
          id,
        });
      });
    });
export default cryptoExchangeService;
