import { getEthUsdMinutes, getEthUsdNow } from './cryptoExchange';
import { buyTicket, getBuyingHistory, getGameData, getUserWallet } from './contract';
import { buildTimeArray, setDeadlineDuration, setLastHour, setNextHour, setNow, setPayoutDuration } from './momentTime';
import startTimer from './timer';
import { toggleRulesDialog, showSnackbar, hideSnackbar, openPage } from './pageConfig';

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
    getUserWallet,
    startTimer,
    showSnackbar,
    hideSnackbar,
    toggleRulesDialog,
    openPage,
};

