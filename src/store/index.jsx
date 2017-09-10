import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';
import multiClientMiddleWare from './middleware/multiClientMiddleware';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  promiseMiddleware(),
  multiClientMiddleWare,
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

export default store;
