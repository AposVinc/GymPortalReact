import {
  FEEDBACK_CHANGE_FEED,
  FEEDBACK_CHANGE_RATING,
  FEEDBACK_CHANGE_VALUE, FEEDBACK_GYM_ADD, FEEDBACK_GYM_UPDATE,
  FEEDBACK_RESET,
  FEEDBACKS_COURSE_FETCH,
  FEEDBACKS_GYM_FETCH,
  USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  feedback:{
    id:0,
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
export const sFeedbacksExistingFeedbackByUserIdAndGymId = (idUser, idGym) => state => sFeedback(state).feedbacksGym.find( el => (el.user === idUser && el.gym === idGym));
export const sFeedbacksCourse = state => sFeedback(state).feedbacksCourse;
export const sFeedbacksExistingFeedbackByUserIdAndCourseId = (idUser, idCourse) => state => sFeedback(state).feedbacksCourse.find( el => (el.user === idUser && el.course === idCourse));
export const sFeedbackLoading = state => sFeedback(state).loading;

export default function(state = INITIAL_STATE, action) {
  let array, index;
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

    case `${FEEDBACK_GYM_ADD}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACK_GYM_ADD}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACK_GYM_ADD}_FULFILLED`:
      return {
        ...state,
        feedbacksGym: [...state.feedbacksGym, action.payload.feedback],
        loading: false,
      };

    case `${FEEDBACK_GYM_UPDATE}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACK_GYM_UPDATE}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACK_GYM_UPDATE}_FULFILLED`:
      array = [...state.feedbacksGym];
      index = array.findIndex( el => el.id === action.payload.feedback.id);
      array[index] = action.payload.feedback
      return {
        ...state,
        feedbacksGym: array,
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

    case FEEDBACK_CHANGE_VALUE:
      return {
        ...state,
        feedback:{
          ...state.feedback,
          [action.payload.field]: action.payload.value
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

