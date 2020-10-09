import { LOAD_LOCALNEWS } from '../actions/actionTypes';

const localNewsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_LOCALNEWS:

            // save to localstorage
            const stringified = JSON.stringify([...action.news.local_articles])
            localStorage.setItem('localNews', stringified)

            return [...action.news.local_articles];
        default: return state;
    }
}

export default localNewsReducer;