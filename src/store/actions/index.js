/**
 * Created by renefuchtenkordt on 13.07.17.
 */
import { toggleBuyingDialog } from './pageConfig';
import { getCryptoValue } from './cryptoExchange';
import { buildCountdownDuration, buildTimeArray, getLastHour, getNextHour, getNow } from './momentTime';
import { loadPoolSize, placeBet, postBet, buyTicket } from './contract';

export {
    getNow,
    getLastHour,
    getNextHour,
    buildCountdownDuration,
    buildTimeArray,
    getCryptoValue,
    placeBet,
    loadPoolSize,
    postBet,
    buyTicket,
    toggleBuyingDialog,
};

