import { addError } from "../store/actions/error";
import { userMessages } from "../store/actions/messages";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchUserMessage = userid => {
  return dispatch => {

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/message/all/${userid}`)

      // loads all the messages to the state
      .then(res => dispatch(userMessages(res)))

      // lead an error to the state
      .catch(err => dispatch(addError(err.message)));

  };
};

export default fetchUserMessage;
