import { GETapiCall } from '../services/api';
import { API_URL } from './_variables';

const fetchProfileInformations = async userID => {
    try {
        const parsed = await GETapiCall(`${API_URL}/api/users/${userID}`)
        return { result: true, data: parsed };
    }

    catch (error) {
        return { result: false, data: error.message };
    }
}

export default fetchProfileInformations;