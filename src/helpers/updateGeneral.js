import { setGeneral } from '../store/actions/session';
import { addError } from '../store/actions/error';
import { PUTapiCall } from '../services/api';
import { API_URL } from './_variables';

const updateGeneral = (userID, data) => {
    return dispatch => {
        return PUTapiCall(`${API_URL}/api/users/${userID}/general`, data)
            .then(res => { dispatch(setGeneral(data)) })
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default updateGeneral;