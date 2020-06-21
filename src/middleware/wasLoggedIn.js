import jwtDecode from 'jwt-decode';

const wasLoggedIn = token => {
    return jwtDecode(token);
}

export default wasLoggedIn;