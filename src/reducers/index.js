import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import GymReducer from './GymReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  gym: GymReducer,
});

export default rootReducer;
