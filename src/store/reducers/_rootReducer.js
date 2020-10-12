import { combineReducers } from 'redux'
import errorReducer from './error';
import sessionReducer from './session';
import messageReducer from './messages';
import userMessagesReducer from './messages_user';
import globalNewsReducer from './news_global';
import localNewsReducer from './news_local';
import categoricalNewsReducer from './news_categorical';
import discoverReducer from './discover';

const rootReducer = combineReducers({
    errorReducer,
    sessionReducer,
    messageReducer,
    userMessagesReducer,
    globalNewsReducer,
    localNewsReducer,
    categoricalNewsReducer,
    discoverReducer
});

export default rootReducer