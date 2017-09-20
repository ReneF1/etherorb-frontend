import Web3 from 'web3';
import web3Connect, { isInjected } from '../util/web3/web3Connect';
import { TICKET_PRICE, CONTRACT_ADDRESS } from '../../shared/constant';

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

export const getBuyingHistoryService = (limit = 5) =>
    isInjected().then(() => new Promise((resolve, reject) => {
  const SolidityCoder = require('web3/lib/solidity/coder.js'); // eslint-disable-line
      web3Connect().web3.eth.getBlockNumber((blockErr, blockNumber) => {
        web3Connect().web3.eth.filter({
          address: CONTRACT_ADDRESS,
          fromBlock: blockNumber > 40 ? blockNumber - 40 : blockNumber,
          toBlock: 'latest',
          topics: ['0xa5a5638118b7e367fd61a47cde37cb2a2a311354958c2bb1165b181ee4b38c85'],
        }).get((err, res) => {
          if (err || blockErr) {
            reject(err || blockErr);
          }
          const logArray = [];
          if (!res) {
            reject('Nothing found');
          }
          res.forEach((log) => {
            const data = SolidityCoder.decodeParams(['address', 'uint'], log.data.replace('0x', ''));
            const logObject = {
              address: data[0],
              estimate: parseFloat(data[1].toString()),
            };
            logArray.push(logObject);
          });
          resolve(logArray.reverse().splice(0, limit));
        });
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
