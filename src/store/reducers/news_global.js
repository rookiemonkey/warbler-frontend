import { LOAD_GLOBALNEWS } from '../actions/_actionTypes';

const globalNewsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_GLOBALNEWS:

            // since the one saved on local storages is already parsed
            const dataOnLocalStorage = localStorage.getItem('globalNews');
            if (dataOnLocalStorage) { return [...action.news]; }

            // save to localstorage
            const stringified = JSON.stringify([...action.news.global_articles])
            localStorage.setItem('globalNews', stringified)

            return [...action.news.global_articles];
        default: return state;
    }
}

export default globalNewsReducer;