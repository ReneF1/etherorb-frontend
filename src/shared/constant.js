import Web3 from 'web3';

export const TICKET_PRICE = new Web3().toWei(10, 'finney');
export const CONTRACT_ADDRESS = '0xe3c5a9a3f9f90e4ba94b61066d6ed14f09fcae1a';

export const INTERVAL_TIMER = {
  HISTORY: 5000,
  GAME_DATA: 5000,
};
