import { fork } from 'redux-saga/effects';
import watchBuyTicket from './snackbar';
import watchEventsToTrack from './mixpanel';

function* rootSaga() {
  yield [
    fork(watchBuyTicket),
    fork(watchEventsToTrack),
  ];
}
export default rootSaga;
