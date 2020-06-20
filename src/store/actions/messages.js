import { LOAD_MESSAGES, REMOVE_MESSAGE } from './actionTypes';

export const loadMessage = messages => ({
    type: LOAD_MESSAGES,
    messages
})

export const removeMessage = id => ({
    type: REMOVE_MESSAGE,
    id
})
