import { SET_CURRENT_USER, SET_CURRENT_USER_BIO } from '../actions/actionTypes';

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
        default: return state
    };
};

export default sessionReducer;