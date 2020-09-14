import axios from 'axios';



export const getAllCourses = function (idGym) {

  const URL_GET_ALL_COURSES = 'http://localhost:8080/GymREST/rest/gyms/'+ idGym + '/courses';

  return axios.get(URL_GET_ALL_COURSES).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
