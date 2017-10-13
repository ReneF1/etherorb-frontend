import { takeEvery, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* toggleSnackbarFulfilled(action) {
  yield put({
    type: 'SHOW_SNACKBAR',
    payload: '🎉🎉 Yay, prediction placed 🎉🎉',
    meta: {
      mixpanel: {
        event: 'Buy ticket success',
        props: {
          block: action.payload,
        },
      },
    },
  });
  yield delay(5000);
  yield put({ type: 'HIDE_SNACKBAR' });
}

function* toggleSnackbarError(action) {
  yield put({
    type: 'SHOW_SNACKBAR',
    payload: 'Transaction rejected',
    meta: {
      mixpanel: {
        event: 'Buy ticket rejected',
        props: {
          error: action.payload.message,
          stack: action.payload.stack,
        },
      },
    },
  });
  yield delay(5000);
  yield put({ type: 'HIDE_SNACKBAR' });
}

function* watchBuyTicket() {
  yield takeEvery('BUY_TICKET_FULFILLED', toggleSnackbarFulfilled);
  yield takeEvery('BUY_TICKET_REJECTED', toggleSnackbarError);
}

export default watchBuyTicket;
