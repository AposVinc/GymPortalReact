import axios from './axiosConfig';
export const getAllCourses = function (idGym) {

  const URL_GET_ALL_COURSES = 'gyms/'+ idGym + '/courses';

  return axios.get(URL_GET_ALL_COURSES).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
