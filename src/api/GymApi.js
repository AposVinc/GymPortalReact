import axios from './axiosConfig';

const URL_GET_ALL_GYMS = 'gyms';

export const getAllGyms = function () {
  return axios.get(URL_GET_ALL_GYMS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
