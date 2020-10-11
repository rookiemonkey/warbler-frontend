import { setHeader } from '../store/actions/session';
import { addError } from '../store/actions/error';
import { PUTapiCall } from '../services/api';
import { API_URL } from './_variables';

const updateHeader = (userID, data) => {
    return dispatch => {
        return PUTapiCall(`${API_URL}/api/user/${userID}/header`, data)
            .then(res => dispatch(setHeader(res.profileHeader)))
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default updateHeader;