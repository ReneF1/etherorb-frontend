import cryptoExchangeService from '../service/cryptoExchange';

function buildPriceHistory(id, cryptoSymbol, currencySymbol, market, timeArray) {
  return {
    type: 'BUILD_PRICE_HISTORY',
    payload: cryptoExchangeService(cryptoSymbol, currencySymbol, market, timeArray),
    id,
  };
}
export default buildPriceHistory;

