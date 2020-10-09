import { addError } from "../store/actions/error";
import { loadMessage } from "../store/actions/messages";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchMessage = () => {
  return dispatch => {

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/message/all`)

      // loads all the messages to the state
      .then(res => { return dispatch(loadMessage(res)) })

      // lead an error to the state
      .catch(err => { return dispatch(addError(err.message)); });

  };
};

export default fetchMessage;
