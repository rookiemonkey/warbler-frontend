import {
    SET_CURRENT_USER, SET_CURRENT_USER_BIO, SET_CURRENT_USER_GENERAL,
    SET_CURRENT_USER_AVATAR, SET_CURRENT_USER_HEADER
} from "./actionTypes";

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

export const setGeneral = data => {
    return {
        type: SET_CURRENT_USER_GENERAL,
        username: data.username,
        email: data.email
    };
};

export const setAvatar = data => {
    return {
        type: SET_CURRENT_USER_AVATAR,
        profilePicture: data
    };
};

export const setHeader = data => {
    return {
        type: SET_CURRENT_USER_HEADER,
        profileHeader: data
    };
}