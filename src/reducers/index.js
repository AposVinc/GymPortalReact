import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import GymReducer from './GymReducer';
import FavoriteGymReducer from './FavoriteGymReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  gym: GymReducer,
  favorite_gym: FavoriteGymReducer,
});

export default rootReducer;
