import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cryptoExchange from './cryptoExchange';
import pageConfig from './pageConfig';
import betReducer from './contract';
import momentTime from './momentTime';
import timer from './timer';


export default combineReducers({
  cryptoExchange,
  betReducer,
  momentTime,
  pageConfig,
  timer,
  form: formReducer,
});
