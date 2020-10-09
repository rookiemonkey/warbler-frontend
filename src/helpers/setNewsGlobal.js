import { addError } from "../store/actions/error";
import { setGlobalNews } from "../store/actions/news";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchGlobalNews = () => {
  return dispatch => {

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/news/global`)

      // loads all the messages to the state
      .then(res => dispatch(setGlobalNews(res)))

      // lead an error to the state
      .catch(err => dispatch(addError(err.message)));

  };
};

export default fetchGlobalNews;
