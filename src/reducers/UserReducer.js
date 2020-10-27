import {
  GUEST_SIGN_UP,
  GUEST_SIGN_UP_FAIL,
  GUEST_SIGN_UP_SUCCESS,
  USER_FORM_CHANGE_VALUE,
  USER_LOGGED_IN_SUCCESS,
  USER_LOGGED_OUT,
  USER_REFRESH_TOKEN, USER_RESTORE,
  USER_UPDATE,
  USER_UPDATE_FAIL, USER_UPDATE_SUCCESS,
} from '../stores/ActionType';


const INITIAL_STATE = {
  token: null,
  user: null,
  loading: false
};

const sUser = (state) => state.user;
export const sUserToken = (state) => sUser(state).token;
export const sUserProps = (state) => sUser(state).user;
export const sUserLoading = (state) => sUser(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    case USER_REFRESH_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };

    case USER_FORM_CHANGE_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.field]: action.payload.value
        }
      };

    case USER_UPDATE:
      return {
        ...state,
        loading: true,
        user: {
          ...state.user,
        }
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        user: null
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          password: null
        }
      };

    case USER_RESTORE:
      return {
        ...state,
        loading: false,
        user: action.payload.user
      };

    case USER_LOGGED_OUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}
