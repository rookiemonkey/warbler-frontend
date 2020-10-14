import {
    LOAD_MESSAGES, REMOVE_MESSAGE,
    USER_MESSAGES, UPDATE_MESSAGE,
    ADD_MESSAGE
} from './_actionTypes';

export const userMessages = (messages, skip) => ({
    type: USER_MESSAGES,
    messages,
    skip
})

export const loadMessage = (messages, skip) => ({
    type: LOAD_MESSAGES,
    messages,
    skip
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

export const addMessage = newMessage => ({
    type: ADD_MESSAGE,
    newMessage
})