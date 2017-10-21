import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* toggleSnackbarFulfilled() {
  yield [
    put({
      type: 'SHOW_SNACKBAR',
      payload: '🎉🎉 Yay, prediction placed 🎉🎉',
    }),
    delay(5000),
    put({ type: 'HIDE_SNACKBAR' }),
  ];
}

function* toggleSnackbarError() {
  yield [
    put({
      type: 'SHOW_SNACKBAR',
      payload: 'Transaction rejected',
    }),
    delay(5000),
    put({ type: 'HIDE_SNACKBAR' }),
  ];
}

function* watchBuyTicket() {
  yield takeEvery('BUY_TICKET_FULFILLED', toggleSnackbarFulfilled);
  yield takeEvery('BUY_TICKET_REJECTED', toggleSnackbarError);
}

export default watchBuyTicket;
