import cryptoExchangeService from '../service/cryptoExchange';

const buildPriceHistory = (id, cryptoSymbol, currencySymbol, market, timeArray, now) => ({
  type: 'BUILD_PRICE_HISTORY',
  payload: cryptoExchangeService(id, cryptoSymbol, currencySymbol, market, timeArray, now),
  id,
});
export default buildPriceHistory;

