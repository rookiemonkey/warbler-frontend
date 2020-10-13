import { addError } from "../store/actions/error";
import { loadMessage } from "../store/actions/messages";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchMessage = skip => {
  return dispatch => {

    const dataOnSessionStorage = sessionStorage.getItem('public_message_skip');

    if (dataOnSessionStorage && parseInt(dataOnSessionStorage) === skip && skip !== 0) {
      return null;
    }

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/message/all?skip=${skip}`)

      // loads all the messages to the state
      .then(res => { return dispatch(loadMessage(res, skip)) })

      // lead an error to the state
      .catch(err => { return dispatch(addError(err.message)); });

  };
};

export default fetchMessage;
