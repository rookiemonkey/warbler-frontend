import { ADD_ERROR, REMOVE_ERROR } from '../actions/actionTypes'

const initialState = {
    error: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return { ...state, error: action.error };
        case REMOVE_ERROR:
            return { ...state, error: null };
        default: return state
    }
}

export default errorReducer;