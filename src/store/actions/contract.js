import { buyTicketService, getBuyingHistoryService, getGameDataService } from '../service/contract';

export const buyTicket = estimate => ({
  type: 'BUY_TICKET',
  payload: buyTicketService(estimate),
});

export const getBuyingHistory = limit => ({
  type: 'BUYING_HISTORY',
  payload: getBuyingHistoryService(limit),
});

export const getGameData = () => ({
  type: 'GAME_DATA',
  payload: getGameDataService(),
});
