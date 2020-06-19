import { addError } from "../store/actions/error";
import { loadMessage } from "../store/actions/messages";
import { GETapiCall } from "../services/api";

const fetchMessage = d => {
    return GETapiCall("http://localhost:8081/api/messages")
        .then(res => { d(loadMessage(res)); })
        .catch(err => { d(addError(err.message)); });
};

export default fetchMessage;
