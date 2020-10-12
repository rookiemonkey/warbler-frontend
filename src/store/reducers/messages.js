import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actions/_actionTypes';

const messageReducer = (state = { messages: [], skip: 0 }, action) => {
    switch (action.type) {
        case LOAD_MESSAGES:

            sessionStorage.setItem('public_message_skip', JSON.stringify(action.skip))

            return {
                skip: action.skip,
                messages: [...state.messages, ...action.messages]
            };


        case REMOVE_MESSAGE:
            const updatedMessages = state.messages.filter(m => {
                return m._id !== action.id
            })

            return {
                ...state,
                messages: updatedMessages,
            };

        default: return state;
    }
}

export default messageReducer;