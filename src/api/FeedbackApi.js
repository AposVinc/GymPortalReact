import axios from './axiosConfig';

const URL_GYMS = 'gyms/';
const URL_FEEDBACKS = '/feedbacks/';


export const getFeedbacksByGym = function (idGym) {
  return axios.get(URL_GYMS + idGym + URL_FEEDBACKS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const addFeedbackGym = function (feedback, token) {
  return axios.post(URL_GYMS + feedback.gym + URL_FEEDBACKS, feedback, {headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};

export const updateFeedbackGym = function (feedback, token) {
  return axios.put(URL_GYMS + feedback.gym + URL_FEEDBACKS + feedback.id, feedback, {headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};
