/**
 * Created by renefuchtenkordt on 13.07.17.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cryptoExchange from './cryptoExchange';
import betReducer from './betReducer';


export default combineReducers({
  cryptoExchange,
  betReducer,
  form: formReducer,
});
