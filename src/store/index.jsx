import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mixpanel from 'mixpanel-browser';
import MixpanelMiddleware from 'redux-mixpanel-middleware';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';
import watchBuyTicket from './sagas/snackbar';
import multiClientMiddleWare from './middleware/multiClientMiddleware';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
mixpanel.init('367f7bdd4391bf1ec5c26f72d106c1d7');
const mixpanelMiddleware = new MixpanelMiddleware(mixpanel);

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  promiseMiddleware(),
  multiClientMiddleWare,
  sagaMiddleware,
  mixpanelMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(
    reducer,
    initialState,
    composedEnhancers,
);

sagaMiddleware.run(watchBuyTicket);

export default store;
