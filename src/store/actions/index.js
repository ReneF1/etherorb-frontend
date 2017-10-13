import { getEthUsdMinutes, getEthUsdNow } from './cryptoExchange';
import { buyTicket, getBuyingHistory, getGameData } from './contract';
import { buildTimeArray, setDeadlineDuration, setLastHour, setNextHour, setNow, setPayoutDuration } from './momentTime';
import startTimer from './timer';
import { toggleRulesDialog, showSnackbar, hideSnackbar } from './pageConfig';

export {
    setNow,
    setLastHour,
    setNextHour,
    setPayoutDuration,
    setDeadlineDuration,
    buildTimeArray,
    getEthUsdMinutes,
    getEthUsdNow,
    buyTicket,
    getGameData,
    getBuyingHistory,
    startTimer,
    showSnackbar,
    hideSnackbar,
    toggleRulesDialog,
};

