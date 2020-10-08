import { removeMessage } from '../store/actions/messages';
import { addError } from '../store/actions/error';
import { DELETEapiCall } from '../services/api';
const API_URL = `https://krrb-prod-warbler-backend.herokuapp.com`;

const deleteMessage = (userID, messageID) => {
    return dispatch => {
        return DELETEapiCall(`${API_URL}/api/auth/${userID}/message/${messageID}`, null)
            .then(res => { dispatch(removeMessage(messageID)) })
            .catch(err => { dispatch(addError(err.Message)) })
    }
}

export default deleteMessage;