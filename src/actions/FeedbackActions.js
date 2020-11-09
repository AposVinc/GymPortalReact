import {
  FAVORITE_COURSE_FETCH,
  FEEDBACK_ADD,
  FEEDBACK_CHANGE_FEED, FEEDBACK_CHANGE_RATING, FEEDBACK_RESET, FEEDBACK_UPDATE,
  FEEDBACKS_COURSE_FETCH,
  FEEDBACKS_GYM_FETCH, USER_FORM_CHANGE_VALUE,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';


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




export const feedbackChangeFeed = function(value) {
  return {
    type: FEEDBACK_CHANGE_FEED,
    payload: {value}
  };
};
export const feedbackChangeRating = function(value) {
  return {
    type: FEEDBACK_CHANGE_RATING,
    payload: {value}
  };
};
export const feedbackReset = function() {
  return {
    type: FEEDBACK_RESET,
  };
};

