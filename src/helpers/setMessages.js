import { addError } from "../store/actions/error";
import { loadMessage } from "../store/actions/messages";
import { GETapiCall } from "../services/api";
const API_URL = `https://warbler-backend-api.herokuapp.com`

const fetchMessage = () => {
  return dispatch => {

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/messages`)

        // loads all the messages to the state
      .then(res => { return dispatch(loadMessage(res)); })

        // lead an error to the state
      .catch(err => { return dispatch(addError(err.message)); });

  };
};

export default fetchMessage;
