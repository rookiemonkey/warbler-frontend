import axios from 'axios'

// axios sends back javascript errors only (eg: 500 Internal Server Error )
// that was the error when you log(error) on the 2nd function
// isntead of the custom error msgs coming from the HTTP server. this fixes it
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error.response.data);
    }
);

export const POSTapiCall = (path, data) => {
    return new Promise((resolve, reject) => {
        return axios.post(path, data)
            .then(res => {
                return resolve(res.data)
            })
            .catch(err => {
                return reject({
                    Message: err.error.message,
                })
            })
    })
}

export const GETapiCall = (path, data) => {
    return new Promise((resolve, reject) => {
        return axios.get(path, data)
            .then(res => {
                return resolve(res.data)
            })
            .catch(err => {
                return reject({
                    Message: err.message,
                })
            })
    })
}

export const DELETEapiCall = (path, data) => {
    return new Promise((resolve, reject) => {
        return axios.delete(path, data)
            .then(res => {
                return resolve(res.data)
            })
            .catch(err => {
                return reject({
                    Message: err.message,
                })
            })
    })
}

export const PUTapiCall = (path, data) => {
    return new Promise((resolve, reject) => {
        return axios.put(path, data)
            .then(res => {
                return resolve(res.data)
            })
            .catch(err => {
                return reject({
                    Message: err.message,
                })
            })
    })
}