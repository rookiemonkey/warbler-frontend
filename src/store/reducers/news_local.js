import { LOAD_LOCALNEWS } from '../actions/_actionTypes';

const localNewsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_LOCALNEWS:

            // since the one saved on local storages is already parsed
            const dataOnLocalStorage = localStorage.getItem('localNews');
            if (dataOnLocalStorage) { return [...action.news]; }

            // save to localstorage
            const stringified = JSON.stringify([...action.news.local_articles])
            localStorage.setItem('localNews', stringified)

            return [...action.news.local_articles];
        default: return state;
    }
}

export default localNewsReducer;