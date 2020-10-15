import {GYM_FETCH, USER_LOGGED_OUT} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: null,
  loading: false,
};

const sGym = (state) => state.gym;
export const sGymLoadedGyms = state => sGym(state).gyms;
export const sGymLoadingGyms = state => sGym(state).loading;

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

    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

