import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import GymReducer from './GymReducer';
import FavoriteGymReducer from './FavoriteReducer';


const rootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  gym: GymReducer,
  favorite: FavoriteGymReducer,
});

export default rootReducer;
