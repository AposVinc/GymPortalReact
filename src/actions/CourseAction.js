import {COURSE_FETCH} from '../stores/ActionType';
import * as API from '../api'


export function courseFetch(idGym){
  return {
    type: COURSE_FETCH,
    payload: API.getAllCourses(idGym).then(r => ({
      gym: {id: idGym},
      courses: r
    }))
  };
}
