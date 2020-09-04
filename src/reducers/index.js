import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import GymReducer from './GymReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  gym: GymReducer,
});

export default rootReducer;
