import { POSTapiCall } from '../services/api';
import { addError } from '../store/actions/error';
const API_URL = `https://warbler-backend-api.herokuapp.com`; // `${API_URL}/api/auth/${id}/message`
// const API_LOCAL = 'http://localhost:8081' // `${API_LOCAL}/api/auth/${id}/message`

const postNewMessage = text => (dispatch, getState) => {

    // retrieve the state (read-only)
    let state = getState();

    // extract the id from the user that is logged in
    const id = state.sessionReducer.user.id

    // call POSTapiCALL will return a promise
    return POSTapiCall(`${API_URL}/api/auth/${id}/message`, { text })
        .then(res => {} )
        .catch(err => dispatch(addError(err.message)))
}

export default postNewMessage;