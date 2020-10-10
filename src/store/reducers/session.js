import {
    SET_CURRENT_USER, SET_CURRENT_USER_BIO, SET_CURRENT_USER_GENERAL,
    SET_CURRENT_USER_AVATAR
} from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: {},
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        case SET_CURRENT_USER_BIO:
            return {
                ...state,
                user: {
                    ...state.user,
                    bio: action.bio.bio
                }
            };
        case SET_CURRENT_USER_GENERAL:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.username,
                    email: action.email
                }
            }
        case SET_CURRENT_USER_AVATAR:
            return {
                ...state,
                user: {
                    ...state.user,
                    profilePicture: action.profilePicture
                }
            }
        default: return state
    };
};

export default sessionReducer;