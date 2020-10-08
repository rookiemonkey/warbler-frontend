import {combineReducers} from 'redux'
import errorReducer from './error';
import sessionReducer from './session';
import messageReducer from './messages';

const rootReducer = combineReducers({
    errorReducer,
    sessionReducer,
    messageReducer
});

export default rootReducer