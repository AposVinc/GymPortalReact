import axios from 'axios';
import querystring from 'query-string';


const URL_BASE = 'http://10.0.2.2:8080/GymREST/rest/';
const URL_GET_UTENTE = URL_BASE + 'users/' ;

export const getUtente = function (id) {
  return axios.get(URL_GET_UTENTE + id).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

