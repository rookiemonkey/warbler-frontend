import { addError } from "../store/actions/error";
import { loadMessage } from "../store/actions/messages";
import { GETapiCall } from "../services/api";
const API_URL = `https://warbler-backend-api.herokuapp.com`

const fetchMessage = d => {
    return GETapiCall(`${API_URL}/api/messages`)
        .then(res => { d(loadMessage(res)); })
        .catch(err => { d(addError(err.message)); });
};

export default fetchMessage;
