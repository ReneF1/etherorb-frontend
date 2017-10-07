import axios from 'axios';

const mapTimeArrayToCrypto = (response, timeArray) => {
  const resultArray = [];
  const cryptoData = response.data.Data;
  timeArray.forEach((time) => {
    cryptoData.forEach((crypto) => {
      if (time === crypto.time) {
        const returnObject = {
          time,
          open: crypto.close,
        };
        resultArray.push(returnObject);
      }
    });
  });
  return resultArray;
};

export const getEthUsdMinutesService = (timeArray, now) => axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&markets=Kraken&toTs=${now}&limit=60`)
        .then((response) => {
          if (timeArray && timeArray.length > 0 && response &&
              response.data && response.data.Data) {
            return mapTimeArrayToCrypto(response, timeArray);
          }
          return null;
        });

export const getEthUsdNowService = now => axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&markets=Kraken&toTs=${now}&limit=1`)
    .then((response) => {
      if (response && response.data && response.data.Data) {
        const cryprtoData = response.data.Data[0];
        return {
          time: cryprtoData.time,
          open: cryprtoData.open,
        };
      }
      return null;
    });
