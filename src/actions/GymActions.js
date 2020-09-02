import {
  GYM_FETCH,
  GYM_FETCH_FAIL,
  GYM_FETCH_SUCCESS,
} from '../stores/ActionType';
import * as API from '../api'


export const gymFetched = function(gyms) {
  return {
    type: GYM_FETCH_SUCCESS,
    payload: {
      gyms
    }
  }
}

export function gymFetch(){
  return function (dispatch) {
    dispatch({type: GYM_FETCH});
    API.getAllGyms().
        then(gyms => dispatch(gymFetched(gyms))).
        catch(err => dispatch({type: GYM_FETCH_FAIL}));
  }
}
