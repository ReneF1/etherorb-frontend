
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import timeReducer from './timeReducer'
import ethReducer from './ethReducer'

export default combineReducers({
    router: routerReducer,
    timeReducer,
    ethReducer,
})