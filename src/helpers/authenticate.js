import { addError, removeError } from '../store/actions/error';
import setSession from '../store/actions/session';
import { POSTapiCall } from '../services/api';
import setTokenHeader from './setTokenHeader';
const API_URL = `https://warbler-backend-api.herokuapp.com` // `${API_URL}/api/auth/${type}`
const API_LOCAL = 'http://localhost:8081' // `${API_LOCAL}/api/auth/${type}`

const authenticate = (type, userData) => {

    // once the promise is resolved it is going to be dispatched/invoked
    return dispatch => {

        // return a new promise
        return new Promise((resolve, reject) => {

            // apicall also returns a promise
            return POSTapiCall(`${API_LOCAL}/api/auth/${type}`, userData)

                // response contains the user/token
                .then(({ token, ...user }) => {
                    if (token !== undefined) {
                        localStorage.setItem('token', token);
                        setTokenHeader(token);
                        dispatch(setSession(user));
                        dispatch(removeError());
                        resolve(user);
                    }
                    else {
                        dispatch(setSession({}));
                        dispatch(addError({ message: "Username/Password is incorrect" }));
                        resolve(user);
                    }
                })

                .catch(err => {
                    dispatch(setSession({}))
                    dispatch(addError({ message: err.Message }))
                    reject(err)
                })
        })
    }
}

export default authenticate;