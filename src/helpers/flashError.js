import { removeError } from "../store/actions/error";

const flashError = (id, dispatch, t) => {
    id = setInterval(() => {
                dispatch(removeError());
                clearInterval(id);
            }, t);
}

export default flashError;