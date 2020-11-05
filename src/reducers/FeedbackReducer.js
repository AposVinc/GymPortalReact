import {
  FEEDBACK_FETCH, USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  feedbacks: [],
  loading: false,
};

const sFeedback = (state) => state.feedback;
export const sFeedbackList = state => sFeedback(state).feedbacks;
export const sFeedbackLoading = state => sFeedback(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FEEDBACK_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACK_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACK_FETCH}_FULFILLED`:
      return {
        ...state,
        feedbacks: action.payload.feedbacks,
        loading: false,
      };


    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

