import { getEthUsdMinutesService, getEthUsdNowService } from '../service/cryptoExchange';

export const getEthUsdMinutes = (timeArray, now) => ({
  type: 'GET_ETH_USD_MINUTES',
  payload: getEthUsdMinutesService(timeArray, now),
});

export const getEthUsdNow = now => ({
  type: 'GET_ETH_USD_NOW',
  payload: getEthUsdNowService(now),
});

