import { GETapiCall } from '../services/api';
import { API_URL } from './_variables';

const fetchProfileMessages = async userID => {
    try {
        const parsed = await GETapiCall(`${API_URL}/api/message/all/${userID}`)
        return { result: true, data: parsed };
    }

    catch (error) {
        return { result: false, data: error.message };
    }
}

export default fetchProfileMessages;