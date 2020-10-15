import {GYM_FETCH} from '../stores/ActionType';
import * as API from '../api';


export function gymFetch(){
  return {
    type: GYM_FETCH,
    payload: API.getAllGyms().then(r => ({gyms: r}))
  };
}
