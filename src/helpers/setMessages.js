import { addError } from "../store/actions/error";
import { loadMessage } from "../store/actions/messages";
import { GETapiCall } from "../services/api";
const API_URL = `https://warbler-backend-api.herokuapp.com`

const fetchMessage = () => {
  return dispatch => {
    return GETapiCall(`${API_URL}/api/messages`)
      .then(res => {
        return dispatch(loadMessage(res));
      })
      .catch(err => {
        return dispatch(addError(err.message));
      });
  };
};

export default fetchMessage;
