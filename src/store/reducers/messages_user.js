import { USER_MESSAGES, REMOVE_MESSAGE } from '../actions/actionTypes';

const userMessagesReducer = (state = [], action) => {
    switch (action.type) {
        case USER_MESSAGES:
            return [...action.messages];
        case REMOVE_MESSAGE:
            return state.filter(m => { return m._id !== action.id });
        default: return state;
    }
}

export default userMessagesReducer;