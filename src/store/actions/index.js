/**
 * Created by renefuchtenkordt on 13.07.17.
 */
import buildPriceHistory from './cryptoExchange';
import { buyTicket, getGameData } from './contract';
import { setPayoutDuration, setDeadlineDuration, buildTimeArray, setLastHour, setNextHour, setNow } from './momentTime';

export {
    setNow,
    setLastHour,
    setNextHour,
    setPayoutDuration,
    buildTimeArray,
    buildPriceHistory,
    setDeadlineDuration,
    buyTicket,
    getGameData,
};

