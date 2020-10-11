import { updateMessage } from '../store/actions/messages';
import { addError } from '../store/actions/error';
import { PUTapiCall } from '../services/api';
import { API_URL } from './_variables';

const toUpdateMessage = (userID, messageID, text) => {
    return dispatch => {
        return PUTapiCall(`${API_URL}/api/message/${userID}/${messageID}`, { text })
            .then(res => { dispatch(updateMessage(messageID, text)) })
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default toUpdateMessage;