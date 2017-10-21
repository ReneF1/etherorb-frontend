import { fork } from 'redux-saga/effects';
import watchBuyTicket from './snackbar';

function* rootSaga() {
  yield [
    fork(watchBuyTicket),
  ];
}
export default rootSaga;
