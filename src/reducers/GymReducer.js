import {
  GYM_FETCH, GYM_FETCH_FAIL, GYM_FETCH_SUCCESS,
} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: null,
  loading: false,
};

const sGym = (state) => state.gym;
export const sLoadedGyms = state => sGym(state).gyms;
export const sGymsLoading = state => sGym(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GYM_FETCH:
      return {
        ...state,
        loading: true,
      };
    case GYM_FETCH_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GYM_FETCH_SUCCESS:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };
    default:
      return state;
  }
}

