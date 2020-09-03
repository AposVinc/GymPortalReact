import {GYM_FETCH} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: null,
  loading: false,
};

const sGym = (state) => state.gym;
export const sLoadedGyms = state => sGym(state).gyms;
export const sGymsLoading = state => sGym(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${GYM_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GYM_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${GYM_FETCH}_FULFILLED`:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };
    default:
      return state;
  }
}

