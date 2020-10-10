import { SET_CURRENT_USER, SET_CURRENT_USER_BIO } from "./actionTypes";

export const setSession = data => {
    return {
        type: SET_CURRENT_USER,
        user: data,
    };
};

export const setBio = data => {
    return {
        type: SET_CURRENT_USER_BIO,
        bio: data,
    };
};
