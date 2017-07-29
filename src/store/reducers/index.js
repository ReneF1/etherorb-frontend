/**
 * Created by renefuchtenkordt on 13.07.17.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ethReducer from './ethReducer';
import betReducer from './betReducer';


export default combineReducers({
  ethReducer,
  betReducer,
  form: formReducer,
});
