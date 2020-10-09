import { combineReducers } from 'redux'
import errorReducer from './error';
import sessionReducer from './session';
import messageReducer from './messages';
import userMessagesReducer from './messages_user';

const rootReducer = combineReducers({
    errorReducer,
    sessionReducer,
    messageReducer,
    userMessagesReducer
});

export default rootReducer