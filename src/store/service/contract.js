import web3Connect from '../util/web3/web3Connect';
import { TICKET_PRICE } from '../../shared/constant';

export const buyTicket = (estimate, account) => {
  if (web3Connect().contract != null) {
    return new Promise((resolve, reject) => {
      web3Connect().contract.buyTicket.sendTransaction(estimate, {
        from: account || web3Connect().account,
        value: TICKET_PRICE,
      }, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
  return null;
};
