import { PUTapiCall } from '../services/api';
import { API_URL } from './_variables';

const updateAuthentication = async (userID, data) => {
    try {
        await PUTapiCall(`${API_URL}/api/user/${userID}/authentication`, data)
        return { result: true, message: "Successfully updated your password" };
    }

    catch (error) {
        return { result: false, message: error.message };
    }
}

export default updateAuthentication;