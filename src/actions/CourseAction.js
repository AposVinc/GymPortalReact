import {COURSE_FETCH} from '../stores/ActionType';
import * as API from '../api'


export function courseFetch(){
  return {
    type: COURSE_FETCH,
    payload: API.getAllCourses().then(r => ({courses: r}))
  };
}
