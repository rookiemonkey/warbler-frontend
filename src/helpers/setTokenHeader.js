import axios from "axios";

export function setTokenHeader(token) {
    token
        ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
        : delete axios.defaults.headers.common["Authorization"];
}

export default setTokenHeader;
