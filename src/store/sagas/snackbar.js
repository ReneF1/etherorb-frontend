import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* toggleSnackbarFulfilled() {
  yield put({ type: 'SHOW_SNACKBAR', payload: '🎉🎉 Yay, prediction placed 🎉🎉' });
  yield delay(5000);
  yield put({ type: 'HIDE_SNACKBAR' });
}

function* toggleSnackbarError() {
  yield put({ type: 'SHOW_SNACKBAR', payload: '🔥🔥 Ups, something went wrong! 🔥🔥' });
  yield delay(5000);
  yield put({ type: 'HIDE_SNACKBAR' });
}

function* watchBuyTicket() {
  yield takeEvery('BUY_TICKET_FULFILLED', toggleSnackbarFulfilled);
  yield takeEvery('BUY_TICKET_REJECTED', toggleSnackbarError);
}

export default watchBuyTicket;
