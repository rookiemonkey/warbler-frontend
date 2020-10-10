import { POSTapiCall } from '../services/api';
import { API_URL } from './_variables';

const forgotPassword = async data => {
    try {
        const parsed = await POSTapiCall(`${API_URL}/api/auth/password/forgot`, data)

        return { result: true, data: parsed };
    }

    catch (error) {
        return { result: false, data: error.Message };
    }
}

export default forgotPassword;