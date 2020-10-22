import axios from 'axios';

const URL_BASE = 'http://localhost:8080/GymREST/rest/';
const URL_GET_ALL_GYMS = URL_BASE + 'gyms';

export const getAllGyms = function () {
  return axios.get(URL_GET_ALL_GYMS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
