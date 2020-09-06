import axios from 'axios';

const {course: {gym_id}} = this.props;

const URL_GET_ALL_COURSES = 'http://10.0.2.2:8080/GymREST/rest/gyms/'+ gym_id +'/courses';

export const getAllCourses = function () {
  return axios.get(URL_GET_ALL_COURSES).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};
