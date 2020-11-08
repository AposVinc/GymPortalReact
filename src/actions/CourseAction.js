import {COURSE_FETCH, COURSES_FETCH} from '../stores/ActionType';
import * as API from '../api'


export function coursesFetch(idGym){
  return {
    type: COURSES_FETCH,
    payload: API.getAllCourses(idGym).then(r => ({
      gym: {id: idGym},
      courses: r
    }))
  };
}

export function courseFetch(idGym, idCourse){
  return {
    type: COURSE_FETCH,
    payload: API.getCourse(idGym, idCourse).then(r => ({course: r}))
  };
}

