import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actions/_actionTypes';

const messageReducer = (state = { messages: [], skip: 0 }, action) => {
    switch (action.type) {
        case LOAD_MESSAGES:

            sessionStorage.setItem('public_message_skip', JSON.stringify(action.skip))

            // this prevents duplicate messages being render
            const parsedMessages = action.messages.filter(({ _id: value1 }) => {

                // return true only of the is from state.messages is the same
                // as the action.messages message _id
                return !state.messages.some(({ _id: value2 }) => {
                    return value2 === value1
                });
            })

            return {
                skip: action.skip,
                messages: [...state.messages, ...parsedMessages]
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