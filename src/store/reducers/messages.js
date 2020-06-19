import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actions/actionTypes';

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            console.log("===================from messages.js=====================", action.messages)
            return [...action.messages];
        case REMOVE_MESSAGE:
            return [];
        default: return state;
    }
}

export default messageReducer;