import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import GymReducer from './GymReducer';
import CourseReducer from './CourseReducer';
import FavoriteGymReducer from './FavoriteGymReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  gym: GymReducer,
  course: CourseReducer,
  favorite_gym: FavoriteGymReducer,
});

export default rootReducer;
