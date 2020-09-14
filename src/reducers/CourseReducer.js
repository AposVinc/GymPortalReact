import {COURSE_FETCH} from '../stores/ActionType';

const INITIAL_STATE = {
  courses: null,
  loading: false,
};

const sCourse = (state) => state.course;
export const sLoadedCourses = state => sCourse(state).courses;
export const sCoursesLoading = state => sCourse(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
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
      return {
        ...state,
        courses: action.payload.courses,
        loading: false,
      };
    default:
      return state;
  }
}

