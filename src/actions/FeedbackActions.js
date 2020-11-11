import {
  FEEDBACK_GYM_ADD,
  FEEDBACK_RESET,
  FEEDBACK_GYM_UPDATE,
  FEEDBACKS_COURSE_FETCH,
  FEEDBACKS_GYM_FETCH,
  FEEDBACK_CHANGE_VALUE,
  FEEDBACK_COURSE_ADD,
  FEEDBACK_COURSE_UPDATE,
  FEEDBACKS_GYM_RESET, FEEDBACKS_COURSE_RESET,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';
import {
  sFeedbacksCurrentFeedback,
} from '../reducers/FeedbackReducer';


export function feedbacksGymFetch(idGym){
  return {
    type: FEEDBACKS_GYM_FETCH,
    payload: API.getFeedbacksByGym(idGym).then(r => ({feedbacks: r}))
  }
}

export const feedbackGymAdd = function(idGym) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.gym = idGym;

    dispatch({
      type: FEEDBACK_GYM_ADD,
      payload: API.addFeedbackGym(feedback, token).then( () => ({feedback}))
    });
  };
};
export const feedbackGymUpdate = function(idGym) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.gym = idGym;

    dispatch({
      type: FEEDBACK_GYM_UPDATE,
      payload: API.updateFeedbackGym(feedback, token).then( () => ({feedback}))
    });
  };
};

export const feedbacksGymReset = function() {
  return {
    type: FEEDBACKS_GYM_RESET,
  };
};



export function feedbacksCourseFetch(idGym, idCourse){
  return {
    type: FEEDBACKS_COURSE_FETCH,
    payload: API.getFeedbacksByCourse(idGym, idCourse).then(r => ({feedbacks: r}))
  }
}

export const feedbackCourseAdd = function(idGym, idCourse) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.course = idCourse;

    dispatch({
      type: FEEDBACK_COURSE_ADD,
      payload: API.addFeedbackCourse(idGym, feedback, token).then( () => ({feedback}))
    });
  };
};
export const feedbackCourseUpdate = function(idGym, idCourse) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.course = idCourse;

    dispatch({
      type: FEEDBACK_COURSE_UPDATE,
      payload: API.updateFeedbackCourse(idGym, feedback, token).then( () => ({feedback}))
    });
  };
};

export const feedbacksCourseReset = function() {
  return {
    type: FEEDBACKS_COURSE_RESET,
  };
};



export const feedbackChangeId = function(value) {
  return {
    type: FEEDBACK_CHANGE_VALUE,
    payload: {
      field: 'id',
      value,
    },
  };
};
export const feedbackChangeFeed = function(value) {
  return {
    type: FEEDBACK_CHANGE_VALUE,
    payload: {
      field: 'feed',
      value,
    },
  };
};
export const feedbackChangeRating = function(value) {
  return {
    type: FEEDBACK_CHANGE_VALUE,
    payload: {
      field: 'rating',
      value,
    },
  };
};
export const feedbackReset = function() {
  return {
    type: FEEDBACK_RESET,
  };
};

