import {GYM_FETCH_SUCCESS} from '../stores/ActionType';

export const gymFetched = function(gyms) {
  return {
    type: GYM_FETCH_SUCCESS,
    payload: {
      gyms
    }
  }
}
