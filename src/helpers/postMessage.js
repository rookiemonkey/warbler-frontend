import { POSTapiCall } from '../services/api';
import { addError } from '../store/actions/error';
const API_URL = `https://warbler-backend-api.herokuapp.com`;

const postNewMessage = text => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id
    return POSTapiCall(`${API_URL}/api/auth/${id}/message`, { text })
        .then(res => {})
        .catch(err => dispatch(addError(err.message)))
}

export default postNewMessage;