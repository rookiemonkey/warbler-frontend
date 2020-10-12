import { loadDiscoverPeopleList } from "../store/actions/discover";
import { addError } from "../store/actions/error";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchDiscoverPeople = () => {
    const dataOnSessionStorage = sessionStorage.getItem('discoverPeopleList');

    return dispatch => {

        if (dataOnSessionStorage) {
            return dispatch(loadDiscoverPeopleList(JSON.parse(dataOnSessionStorage)))
        }

        return GETapiCall(`${API_URL}/api/users/list`)

            .then(res => dispatch(loadDiscoverPeopleList(res.discoverPeople)))

            .catch(err => dispatch(addError(err.message)));

    };
};

export default fetchDiscoverPeople;
