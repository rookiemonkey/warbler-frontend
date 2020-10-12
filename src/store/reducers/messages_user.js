import { USER_MESSAGES, REMOVE_MESSAGE, UPDATE_MESSAGE } from '../actions/_actionTypes';

const userMessagesReducer = (state = [], action) => {
    switch (action.type) {
        case USER_MESSAGES:
            return [...action.messages];
        case REMOVE_MESSAGE:
            return state.filter(m => { return m._id !== action.id });
        case UPDATE_MESSAGE:
            return state.map(m => {
                if (JSON.stringify(m._id) !== JSON.stringify(action.id)) {
                    return m
                }

                m.text = action.text;
                return m
            });
        default: return state;
    }
}

export default userMessagesReducer;