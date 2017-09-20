import buildPriceHistory from './cryptoExchange';
import { buyTicket, getGameData, getBuyingHistory } from './contract';
import { setPayoutDuration, setDeadlineDuration, buildTimeArray, setLastHour, setNextHour, setNow } from './momentTime';

export {
    setNow,
    setLastHour,
    setNextHour,
    setPayoutDuration,
    setDeadlineDuration,
    buildTimeArray,
    buildPriceHistory,
    buyTicket,
    getGameData,
    getBuyingHistory,
};

