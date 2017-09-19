import axios from 'axios';


const cryptoExchangeService = (cryptoSymbol, currencySymbol, market, timeArray) => new Promise((resolve) => {
  const data = [];
  const promises = [];

  timeArray.forEach((value) => {
    const requestUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${cryptoSymbol}&tsyms=${currencySymbol}&markets=${market}&ts=${value}`;
    promises.push(axios.get(requestUrl));
  });

  Promise.all(promises).then((results) => {
    results.forEach((response) => {
      data.push = response.data[cryptoSymbol][currencySymbol];
      resolve(data);
    });
  });
});
export default cryptoExchangeService;
