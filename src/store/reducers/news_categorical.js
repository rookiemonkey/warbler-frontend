import { LOAD_CATEGORICALNEWS } from '../actions/actionTypes';

const categoricalNewsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_CATEGORICALNEWS:

            // save to localstorage
            const stringified = JSON.stringify({ ...action.news })
            localStorage.setItem('categoricalNews', stringified)

            return { ...action.news };
        default: return state;
    }
}

export default categoricalNewsReducer;