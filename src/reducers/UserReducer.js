import {
  USER_LOGGED_IN_SUCCESS, USER_LOGGED_OUT, USER_REFRESH_TOKEN,
} from '../stores/ActionType';


const INITIAL_STATE = {
  token: null,
  user: null,
};

const sUser = (state) => state.user;
export const sUserToken = (state) => sUser(state).token;
export const sUserProps = (state) => sUser(state).user;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    case USER_REFRESH_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };
    default:
      return state;
  }
}
