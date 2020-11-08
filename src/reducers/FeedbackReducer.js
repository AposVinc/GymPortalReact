import {
  FEEDBACKS_COURSE_FETCH, FEEDBACKS_GYM_FETCH, USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  feedbacksGym: [],
  feedbacksCourse: [],
  loading: false,
};

const sFeedback = (state) => state.feedback;
export const sFeedbacksGym = state => sFeedback(state).feedbacksGym;
export const sFeedbacksCourse = state => sFeedback(state).feedbacksCourse;
export const sFeedbackLoading = state => sFeedback(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FEEDBACKS_GYM_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACKS_GYM_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACKS_GYM_FETCH}_FULFILLED`:
      return {
        ...state,
        feedbacksGym: action.payload.feedbacks,
        loading: false,
      };


    case `${FEEDBACKS_COURSE_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACKS_COURSE_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACKS_COURSE_FETCH}_FULFILLED`:
      return {
        ...state,
        feedbacksCourse: action.payload.feedbacks,
        loading: false,
      };


    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

