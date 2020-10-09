import { LOAD_GLOBALNEWS } from '../actions/actionTypes';

const globalNewsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_GLOBALNEWS:

            // save to localstorage
            const stringified = JSON.stringify([...action.news.global_articles])
            localStorage.setItem('globalNews', stringified)

            return [...action.news.global_articles];
        default: return state;
    }
}

export default globalNewsReducer;