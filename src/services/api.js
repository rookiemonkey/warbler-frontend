import axios from 'axios'

export const POSTapiCall = (path, data) => {
    return new Promise((resolve, reject) => {
        return axios.post(path, data)
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