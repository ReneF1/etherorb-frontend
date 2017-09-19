import cryptoExchangeService from '../service/cryptoExchange';

const buildPriceHistory = (id, cryptoSymbol, currencySymbol, market, timeArray) => {
  console.log(id);
  return {
    type: 'BUILD_PRICE_HISTORY',
    payload: cryptoExchangeService(id, cryptoSymbol, currencySymbol, market, timeArray),
  };
}
export default buildPriceHistory;

