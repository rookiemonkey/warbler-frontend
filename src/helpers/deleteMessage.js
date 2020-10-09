import { removeMessage } from '../store/actions/messages';
import { addError } from '../store/actions/error';
import { DELETEapiCall } from '../services/api';
import { API_URL } from './_variables';

const deleteMessage = (userID, messageID) => {
    return dispatch => {
        return DELETEapiCall(`${API_URL}/api/message/${userID}/${messageID}`, null)
            .then(res => { dispatch(removeMessage(messageID)) })
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default deleteMessage;