import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import axios from 'axios';
import {multiClientMiddleware} from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';

export const history = createHistory();

const clients =
    {
        kraken: {
            client: axios.create({
                baseURL: 'https://api.kraken.com/0/public/',
                responseType: 'json'
            })
        },
        etherOrbApi: {
            client: axios.create({
                baseURL: '/db.json',
                responseType: 'json'
            }),
        }
    }

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history),
    multiClientMiddleware(clients)
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
