import { LOAD_DISCOVER_PEOPLELIST } from './_actionTypes'

export const loadDiscoverPeopleList = discoverPeople => {
    return {
        type: LOAD_DISCOVER_PEOPLELIST,
        discoverPeople
    }
}