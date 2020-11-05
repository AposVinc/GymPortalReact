import {
  FEEDBACK_FETCH
} from '../stores/ActionType';
import * as API from '../api';


export function feedbacksGymFetch(idGym){
  return (dispatch) => {
    dispatch({
      type: FEEDBACK_FETCH,
      payload: API.getFeedbacksByGym(idGym).then(r => ({feedbacks: r}))
    });
  };
}

