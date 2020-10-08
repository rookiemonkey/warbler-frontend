import { SET_CURRENT_USER } from "../store/actions/actionTypes";
import setTokenHeader from "./setTokenHeader";
import store from "../store/store";

const logout = e => {

    // copied from actions/session.js
    const setSession = (data) => { return { type: SET_CURRENT_USER, user: data,} }

    // prevent the default refresh
    e.preventDefault();

    // removes the token from local storage
    localStorage.removeItem("token");

    // disables appeding the token to request headers
    setTokenHeader(false);

    // set the user.state to empty object
    store.dispatch(setSession({}))

}

export default logout;