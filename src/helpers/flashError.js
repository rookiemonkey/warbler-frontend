import { removeError } from "../store/actions/error";

const flashError = (id, dispatch, t) => {

    // store the timout id te be used after a few seconds
    id = setTimeout(() => {

                // remove the error by dispatching an action
                dispatch(removeError());

                // removes the timeout
                clearTimeout(id);

            }, t);
}

export default flashError;