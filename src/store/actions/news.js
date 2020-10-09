import { LOAD_LOCALNEWS, LOAD_GLOBALNEWS, LOAD_CATEGORICALNEWS } from './actionTypes'

export const setLocalNews = news => {
    return {
        type: LOAD_LOCALNEWS,
        news
    }
}

export const setGlobalNews = news => {
    return {
        type: LOAD_GLOBALNEWS,
        news
    }
}

export const setGlobalNews = news => {
    return {
        type: LOAD_CATEGORICALNEWS,
        news
    }
}