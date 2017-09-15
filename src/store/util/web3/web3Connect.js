import Web3 from 'web3';
import ABI from './contract.json';

const web3Connect = () => {
  const canUseDOM = !!(
        (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
    );
  if (canUseDOM) {
    if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);
      return {
        contract: web3.eth.contract(ABI.abi).at('0x5eebadba7ea9ca05e66b28186a71c0399690cd83'),
        account: window.web3.eth.defaultAccount,
      };
    }
  }
  return null;
};

export default web3Connect;
