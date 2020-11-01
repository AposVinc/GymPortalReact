import {
  FAVORITE_GYM_ADD_NEW,
  FAVORITE_GYM_FETCH, FAVORITE_GYM_REMOVE, USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: [],
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

    case FAVORITE_GYM_ADD_NEW:
      return {
        ...state,
        gyms: [...state.gyms, action.payload.gym]
      };
    case FAVORITE_GYM_REMOVE:
      return {
        ...state,
        gyms: [...state.gyms.filter( el => el.id !== action.payload.gym.id )]
      };

    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

