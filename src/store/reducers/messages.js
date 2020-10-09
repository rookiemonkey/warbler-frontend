import { LOAD_MESSAGES, REMOVE_MESSAGE, USER_MESSAGES } from '../actions/actionTypes';

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return [...action.messages];
        case USER_MESSAGES:
            return [...action.messages];
        case REMOVE_MESSAGE:
            return state.filter(m => { return m._id !== action.id });
        default: return state;
    }
}

export default messageReducer;