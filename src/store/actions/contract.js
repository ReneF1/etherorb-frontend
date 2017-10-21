import { buyTicketService, getBuyingHistoryService, getGameDataService, getUserWalletService } from '../service/contract';

export const getUserWallet = () => ({
  type: 'GET_USER_WALLET',
  payload: getUserWalletService(),
});

export const buyTicket = estimate => ({
  type: 'BUY_TICKET',
  payload: buyTicketService(estimate),
  meta: {
    mixpanel: {
      event: 'Buy ticket success',
      props: {
        Predicion: estimate,
      },
    },
  },
});

export const getBuyingHistory = limit => ({
  type: 'BUYING_HISTORY',
  payload: getBuyingHistoryService(limit),
});

export const getGameData = () => ({
  type: 'GAME_DATA',
  payload: getGameDataService(),
});
