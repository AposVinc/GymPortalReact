import {COURSE_FETCH, GYM_FETCH, USER_LOGGED_OUT} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: [],
  loading: false,
};

const sGym = (state) => state.gym;
export const sGymLoadedGyms = state => sGym(state).gyms;
export const sGymLoadedCourses = id => state => sGym(state).gyms.find( el => el.id === id).courses
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

    case `${COURSE_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${COURSE_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${COURSE_FETCH}_FULFILLED`:
      let array = [...state.gyms];
      let index = state.gyms.findIndex( el => el.id === action.payload.gym.id);
      array[index].courses = action.payload.courses;
      return {
        ...state,
        gyms: array,
        loading: false,
      };

    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

