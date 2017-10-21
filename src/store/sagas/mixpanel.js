import { takeEvery } from 'redux-saga/effects';
import mixpanel from 'mixpanel-browser';


function* trackOpenPage(action) {
  yield [
    mixpanel.track('view page', { name: action.name }),
  ];
}

function* trackClickButton(action) {
  yield [
    mixpanel.track('click button', { name: action.name, position: action.position }),
  ];
}

function* trackBuyTicket(action) {
  yield [
    mixpanel.track('buy ticket', { result: action.error ? 'error' : 'success', price: action.error ? 'error' : action.payload }),
  ];
}

function* watchEventsToTrack() {
  yield takeEvery('OPEN_PAGE', trackOpenPage);
  yield takeEvery('CLICK_BUTTON', trackClickButton);
  yield takeEvery('BUY_TICKET_FULFILLED', trackBuyTicket);
  yield takeEvery('BUY_TICKET_REJECTED', trackBuyTicket);
}

export default watchEventsToTrack;
