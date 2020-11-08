import {
  FEEDBACKS_COURSE_FETCH,
  FEEDBACKS_GYM_FETCH,
} from '../stores/ActionType';
import * as API from '../api';


export function feedbacksGymFetch(idGym){
  return (dispatch) => {
    dispatch({
      type: FEEDBACKS_GYM_FETCH,
      payload: API.getFeedbacksByGym(idGym).then(r => ({feedbacks: r}))
    });
  };
}

export function feedbacksCourseFetch(idGym, idCourse){
  return (dispatch) => {
    dispatch({
      type: FEEDBACKS_COURSE_FETCH,
      payload: API.getFeedbacksByCourse(idGym, idCourse).then(r => ({feedbacks: r}))
    });
  };
}

