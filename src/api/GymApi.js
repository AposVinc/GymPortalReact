import axios from 'axios';

const URL_GET_ALL_GYMS = 'http://localhost:8080/GymREST/rest/gyms';

export const getAllGyms = function () {
  return axios.get(URL_GET_ALL_GYMS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
