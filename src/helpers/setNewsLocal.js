import { addError } from "../store/actions/error";
import { setLocalNews } from "../store/actions/news";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchLocalNews = () => {
  return dispatch => {

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/news/local`)

      // loads all the messages to the state
      .then(res => dispatch(setLocalNews(res)))

      // lead an error to the state
      .catch(err => dispatch(addError(err.message)));

  };
};

export default fetchLocalNews;
