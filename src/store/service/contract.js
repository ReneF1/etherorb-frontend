import Web3 from 'web3';
import web3Connect, { isInjected } from '../util/web3/web3Connect';
import TICKET_PRICE from '../../shared/constant';

export const buyTicketService = (estimate, account) =>
    isInjected().then(() => new Promise((resolve, reject) => {
      web3Connect().contract.buyTicket.sendTransaction(estimate, {
        from: account || web3Connect().account,
        value: TICKET_PRICE,
      }, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    }));

export const getGameDataService = () => isInjected().then(() => new Promise((resolve, reject) => {
  web3Connect().contract.getGameData.call((err, res) => {
    if (err) {
      reject(err);
    }
    const data = {
      totalPot: parseFloat(new Web3().fromWei(res[0], 'ether').toString()),
      totalTickets: parseInt(res[1].toString(), 10),
      totalEstimation: parseFloat(res[2].toString()),
      isActive: res[3],
      ticketPrice: parseFloat(new Web3().fromWei(res[4], 'ether').toString()),
    };
    resolve(data);
  });
}));
