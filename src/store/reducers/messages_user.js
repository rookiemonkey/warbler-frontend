import {
    USER_MESSAGES, REMOVE_MESSAGE,
    UPDATE_MESSAGE, ADD_MESSAGE
} from '../actions/_actionTypes';

const userMessagesReducer = (state = { messages: [], skip: 0 }, action) => {
    switch (action.type) {
        case USER_MESSAGES:

            sessionStorage.setItem('user_message_skip', JSON.stringify(action.skip))

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
            return {
                ...state,
                messages: state.messages.filter(m => { return m._id !== action.id })
            };

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [action.newMessage, ...state.messages]
            }

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