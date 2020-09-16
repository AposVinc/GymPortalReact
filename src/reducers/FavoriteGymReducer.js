import {
  FAVORITE_GYM_FETCH,
} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: null,
  loading: false,
};

const sFavoriteGym = (state) => state.favorite_gym;
export const sFavoriteGymLoadedGyms = state => sFavoriteGym(state).gyms;
export const sFavoriteGymLoadingGyms = state => sFavoriteGym(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FAVORITE_GYM_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FAVORITE_GYM_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FAVORITE_GYM_FETCH}_FULFILLED`:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };
    default:
      return state;
  }
}

