/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import { buyTicket as buyTicketService } from '../service/contract';

function buyTicket(estimate) {
  return {
    type: 'BUY_TICKET',
    payload: buyTicketService(estimate),
  };
}

export default buyTicket;
