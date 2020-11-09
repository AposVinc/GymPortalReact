import {
  FEEDBACK_CHANGE_FEED, FEEDBACK_CHANGE_RATING, FEEDBACK_RESET,
  FEEDBACKS_COURSE_FETCH, FEEDBACKS_GYM_FETCH, USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  feedback:{
    rating:5,
    feed:"",
  },
  feedbacksGym: [],
  feedbacksCourse: [],
  loading: false,
};

const sFeedback = (state) => state.feedback;
export const sFeedbacksCurrentFeedback = state => sFeedback(state).feedback;
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

    case FEEDBACK_CHANGE_FEED:
      return {
        ...state,
        feedback:{
          ...state.feedback,
          feed: action.payload.value,
        }
      };
    case FEEDBACK_CHANGE_RATING:
      return {
        ...state,
        feedback:{
          ...state.feedback,
          rating: action.payload.value,
        }
      };
    case FEEDBACK_RESET:
      return {
        ...state,
        feedback: {
          rating: 5,
          feed: ""
        }
      };

    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

