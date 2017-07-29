/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import BetInput from '../../components/BetInputForm/BetInputForm';

function placeBet() {
  return {
    type: 'PLACE_BET',
    payload: BetInput,
  };
}

function loadPoolSize() {
  return {
    types: ['GET_POOLSIZE_REQUEST', 'GET_POOLSIZE_SUCCESS', 'GET_POOLSIZE_ERROR'],
    payload: {
      client: 'etherOrbApi',
      request: {
        url: '',
      },
    },
  };
}

function postBet() {
  return {
    types: ['POST_BET_REQUEST', 'POST_BET_SUCCESS', 'POST_BET_ERROR'],
    payload: {
      client: 'etherOrbApi',
      request: {
        url: '',
        method: 'post',
        data: { Test: 'Test' },
      },
    },
  };
}

export {
    placeBet,
    postBet,
    loadPoolSize,
};
