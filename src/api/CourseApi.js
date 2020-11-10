import axios from './axiosConfig';

const URL_GYMS = 'gyms/';
const URL_COURSES = '/courses/';
const URL_FEEDBACKS = '/feedbacks';

export const getAllCourses = function (idGym) {
  return axios.get(URL_GYMS + idGym + URL_COURSES).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const getCourse = function (idGym, idCourse) {
  return axios.get(URL_GYMS + idGym + URL_COURSES + idCourse).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
