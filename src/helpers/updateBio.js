import { setBio } from '../store/actions/session';
import { addError } from '../store/actions/error';
import { PUTapiCall } from '../services/api';
import { API_URL } from './_variables';

const updateBio = (userID, bio) => {
    return dispatch => {
        return PUTapiCall(`${API_URL}/api/users/${userID}/bio`, bio)
            .then(res => { dispatch(setBio(bio)) })
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default updateBio;