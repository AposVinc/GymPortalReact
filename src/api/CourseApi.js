import axios from 'axios';

const URL_GET_ALL_COURSES = 'http://localhost:8080/GymREST/rest/gyms';

export const getAllCourses = function () {
  return axios.get(URL_GET_ALL_COURSES).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
