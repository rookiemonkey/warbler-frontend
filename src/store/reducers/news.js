import { LOAD_LOCALNEWS, LOAD_GLOBALNEWS, LOAD_CATEGORICALNEWS } from '../actions/actionTypes';

const newsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_LOCALNEWS:
            return [...action.news];
        case LOAD_GLOBALNEWS:
            return [...action.news];
        case LOAD_CATEGORICALNEWS:
            return [...action.news];
        default: return state;
    }
}

export default newsReducer;