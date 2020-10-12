import {
    LOAD_MESSAGES, REMOVE_MESSAGE,
    USER_MESSAGES, UPDATE_MESSAGE
} from './_actionTypes';

export const userMessages = messages => ({
    type: USER_MESSAGES,
    messages
})

export const loadMessage = messages => ({
    type: LOAD_MESSAGES,
    messages
})

export const updateMessage = (id, text) => ({
    type: UPDATE_MESSAGE,
    id,
    text
})

export const removeMessage = id => ({
    type: REMOVE_MESSAGE,
    id
})
