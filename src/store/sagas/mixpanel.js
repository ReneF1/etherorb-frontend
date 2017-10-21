import { takeEvery } from 'redux-saga/effects';
import mixpanel from 'mixpanel-browser';

function* trackOpen(action) {
  yield [
    mixpanel.track(`Open ${action.payload}`),
  ];
}

function* trackBuyTicketFulfilled() {
  yield [
    mixpanel.track('Buy Ticket Success'),
  ];
}

function* trackBuyTicketRejected() {
  yield [
    mixpanel.track('Buy Ticket Error'),
  ];
}

function* watchEventsToTrack() {
  yield takeEvery('OPEN_PAGE', trackOpen);
  yield takeEvery('BUY_TICKET_FULFILLED', trackBuyTicketFulfilled);
  yield takeEvery('BUY_TICKET_REJECTED', trackBuyTicketRejected);
}

export default watchEventsToTrack;
