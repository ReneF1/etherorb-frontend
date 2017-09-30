import Web3 from 'web3';

export const TICKET_PRICE = new Web3().toWei(10, 'finney');
export const CONTRACT_ADDRESS = '0x93e582c0fc68561321c9b229415be760ae4823f8';

export const INTERVAL_TIMER = {
  HISTORY: 5000,
  GAME_DATA: 5000,
  CHART_DATA: 30000,
};
