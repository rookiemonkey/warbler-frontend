import { POSTapiCall } from '../services/api';
import { addError } from '../store/actions/error';
const API_URL = `https://krrb-prod-warbler-backend.herokuapp.com`;

const postNewMessage = text => (dispatch, getState) => {

    // retrieve the state (read-only)
    let state = getState();

    // extract the id from the user that is logged in
    const id = state.sessionReducer.user._id

    // call POSTapiCALL will return a promise
    return POSTapiCall(`${API_URL}/api/message/${id}/new`, { text })
        .then(res => { })
        .catch(err => dispatch(addError(err.message)))
}

export default postNewMessage;