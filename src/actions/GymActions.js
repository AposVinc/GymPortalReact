import {GYM_FETCH, GYMS_FETCH} from '../stores/ActionType';
import * as API from '../api';

export function gymsFetch(){
  return {
    type: GYMS_FETCH,
    payload: API.getAllGyms().then(r => ({gyms: r}))
  };
}

export function gymFetch(idGym){
  return {
    type: GYM_FETCH,
    payload: API.getGym(idGym).then(r => ({gym: r}))
  };
}
