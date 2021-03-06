import { POSTapiCall } from '../services/api';
import { addMessage } from '../store/actions/messages';
import { addError } from '../store/actions/error';
import { API_URL } from './_variables';

const postNewMessage = text => (dispatch, getState) => {

    // retrieve the state (read-only)
    let state = getState();

    // extract the id from the user that is logged in
    const id = state.sessionReducer.user._id

    // call POSTapiCALL will return a promise
    return POSTapiCall(`${API_URL}/api/message/${id}/new`, { text })
        .then(res => dispatch(addMessage(res)))
        .catch(err => dispatch(addError(err.message)))
}

export default postNewMessage;