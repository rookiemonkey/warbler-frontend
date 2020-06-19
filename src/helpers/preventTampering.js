import jwtDecode from "jwt-decode";
import setSession from "../store/actions/session";
import store from "../store/store";

const preventTampering = () => {

    // check if token is tampered
    try {
        store.dispatch(setSession(jwtDecode(localStorage)));

    }

    // set the user state to empty if token is tampered
    catch (err) {
        store.dispatch(setSession({}));
    }

};

export default preventTampering;
