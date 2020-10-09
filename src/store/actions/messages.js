import { LOAD_MESSAGES, REMOVE_MESSAGE, USER_MESSAGES } from './actionTypes';

export const userMessages = messages => ({
    type: USER_MESSAGES,
    messages
})

export const loadMessage = messages => ({
    type: LOAD_MESSAGES,
    messages
})

export const removeMessage = id => ({
    type: REMOVE_MESSAGE,
    id
})
