/**
 * Created by renefuchtenkordt on 13.07.17.
 */
import getCryptoValue from './cryptoExchange';
import { buyTicket, getGameData } from './contract';
import { buildCountdownDuration, buildTimeArray, getLastHour, getNextHour, getNow } from './momentTime';

export {
    getNow,
    getLastHour,
    getNextHour,
    buildCountdownDuration,
    buildTimeArray,
    getCryptoValue,
    buyTicket,
    getGameData,
};

