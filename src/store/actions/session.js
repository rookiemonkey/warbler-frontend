import { SET_CURRENT_USER } from "./actionTypes";

const setSession = (data) => {
    return {
        type: SET_CURRENT_USER,
        user: data,
    };
};

export default setSession;
