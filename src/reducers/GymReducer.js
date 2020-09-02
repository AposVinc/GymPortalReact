import {
  GYM_FETCH_SUCCESS
} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: null,
};

const sGym = (state) => state.app;
export const sLoadedGyms = state => sGym(state).gyms;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GYM_FETCH_SUCCESS:
      return {
        ...state,
        gyms: action.payload.gyms,
      };
    default:
      return state;
  }
}

