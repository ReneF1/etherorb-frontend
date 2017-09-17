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
        contract: web3.eth.contract(ABI.abi).at('0x73995d25a1e13572ced9e9c090fc39565d9a5af7'),
        account: window.web3.eth.defaultAccount,
      };
    }
  }
  return null;
};

export const isInjected = () => new Promise((resolve, reject) => {
  let counter = 0;
  const interval = setInterval(() => {
    const canUseDOM = !!(
                (typeof window !== 'undefined' &&
                window.document && window.document.createElement)
            );
    if (canUseDOM) {
      if (window.web3 && window.web3.eth.defaultAccount) {
        clearInterval(interval);
        resolve();
      }
    }
    counter += 1;
    if (counter === 1000) {
      clearInterval(interval);
      reject();
    }
  }, 50);
});

export default web3Connect;
