import { USER_MESSAGES, REMOVE_MESSAGE, UPDATE_MESSAGE } from '../actions/_actionTypes';

const userMessagesReducer = (state = { messages: [], skip: 0 }, action) => {
    switch (action.type) {
        case USER_MESSAGES:

            sessionStorage.setItem('user_message_skip', JSON.stringify(action.skip))

            return {
                skip: action.skip,
                messages: [...state.messages, ...action.messages]
            };

        case REMOVE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => { return m._id !== action.id })
            };

        case UPDATE_MESSAGE:
            return {
                ...state,
                messages: state.messages.map(m => {
                    if (JSON.stringify(m._id) !== JSON.stringify(action.id)) {
                        return m
                    }

                    m.text = action.text;
                    return m
                })
            };

        default: return state;
    }
}

export default userMessagesReducer;