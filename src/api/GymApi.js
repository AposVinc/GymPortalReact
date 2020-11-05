import axios from './axiosConfig';

const URL_GET_ALL_GYMS = 'gyms/';
const URL_FEEDBACKS = '/feedbacks';

export const getAllGyms = function () {
  return axios.get(URL_GET_ALL_GYMS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const getFeedbacksByGym = function (idGym) {
  return axios.get(URL_GET_ALL_GYMS + idGym + URL_FEEDBACKS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
