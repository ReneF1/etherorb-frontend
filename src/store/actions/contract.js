/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import { buyTicketService, getGameDataService } from '../service/contract';

export const buyTicket = estimate => ({
  type: 'BUY_TICKET',
  payload: buyTicketService(estimate),
});

export const getGameData = () => ({
  type: 'GAME_DATA',
  payload: getGameDataService(),
});
