import axios from 'axios'

export const POSTapiCall = (path, data) => {
    return new Promise((resolve, reject) => {
        return axios.post(path, data)
            .then(res => {
                return resolve(res.data)
            })
            .catch(err => {
                console.log(err)
                const { status, statusText } = err.response
                const { message } = err.response.data.error
                return reject({
                    Status: status,
                    Message: statusText,
                    MoreInfo: message
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
                const { status, statusText } = err.response
                const { message } = err.response.data.error
                return reject({
                    Status: status,
                    Message: statusText,
                    MoreInfo: message
                })
            })
    })
}