import { setAvatar } from '../store/actions/session';
import { addError } from '../store/actions/error';
import { PUTapiCall } from '../services/api';
import { API_URL } from './_variables';

const updateAvatar = (userID, data) => {
    return dispatch => {
        return PUTapiCall(`${API_URL}/api/user/${userID}/avatar`, data)
            .then(res => dispatch(setAvatar(res.profilePicture)))
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default updateAvatar;