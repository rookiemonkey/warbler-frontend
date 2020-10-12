import { LOAD_DISCOVER_PEOPLELIST } from '../actions/_actionTypes'

const initialState = {
    discoverPeople: []
}

const discoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DISCOVER_PEOPLELIST:

            // save to sessionStorage
            const stringified = JSON.stringify([...action.discoverPeople])
            sessionStorage.setItem('discoverPeopleList', stringified)

            return {
                ...state,
                discoverPeople: [...action.discoverPeople]
            };
        default: return state
    }
}

export default discoverReducer;