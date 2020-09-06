import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import GymReducer from './GymReducer';
import CourseReducer from './CourseReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  gym: GymReducer,
  courses: CourseReducer,
});

export default rootReducer;
