import { addError } from "../store/actions/error";
import { setCategoricalNews } from "../store/actions/news";
import { GETapiCall } from "../services/api";
import { API_URL } from './_variables';

const fetchCategoricalNews = () => {
  const dataOnLocalStorage = localStorage.getItem('categoricalNews');

  return dispatch => {

    if (dataOnLocalStorage) {
      return dispatch(setCategoricalNews(JSON.parse(dataOnLocalStorage)))
    }

    // call the api, returns a promise
    return GETapiCall(`${API_URL}/api/news/categories`)

      // loads all the messages to the state
      .then(res => dispatch(setCategoricalNews(res)))

      // lead an error to the state
      .catch(err => dispatch(addError(err.message)));

  };
};

export default fetchCategoricalNews;
