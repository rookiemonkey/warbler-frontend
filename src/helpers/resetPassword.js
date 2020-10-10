import { POSTapiCall } from '../services/api';
import { API_URL } from './_variables';

const resetPassword = async (data, token) => {
    try {
        const url = `${API_URL}/api/auth/password/reset/${token}`;
        const parsed = await POSTapiCall(url, data)

        return { result: true, data: parsed };
    }

    catch (error) {
        return { result: false, data: error.Message };
    }
}

export default resetPassword;