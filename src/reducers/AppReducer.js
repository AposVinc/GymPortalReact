import {
  LOADING,
  LOADING_END,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  GUEST_FORM_CHANGE_VALUE,
  GUEST_FORM_RESET,
  GUEST_SIGN_UP,
  GUEST_SIGN_UP_FAIL,
  GUEST_SIGN_UP_SUCCESS,
} from '../stores/ActionType';

const INITIAL_STATE = {
  logged: false,

  loading: false,
  loadingSeconds: 0,

  guestForm: {
    loading: false,
    username: '',
    password: ''
  }
};

const sApp = (state) => state.app;
export const sAppLogged = (state) => sApp(state).logged;
export const sAppLoading = (state) => sApp(state).loading;

const sAppGuestForm = (state) => sApp(state).guestForm;
export const sAppGuestFormUsername = (state) => sAppGuestForm(state).username;
export const sAppGuestFormPassword = (state) => sAppGuestForm(state).password;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loadingSeconds: state.loadingSeconds + 1
      };
    case LOADING_END:
      return {
        ...state,
        loading: false,
      };

    case USER_LOGGED_IN:
      return {
        ...state,
        logged: true,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        logged: false,
      };

    case GUEST_FORM_CHANGE_VALUE:
      return {
        ...state,
        guestForm: {
          ...state.guestForm,
          [action.payload.field]: action.payload.value
        }
      };
    case GUEST_FORM_RESET:
      return {
        ...state,
        guestForm: {
          ...INITIAL_STATE.guestForm
        }
      };

    case GUEST_SIGN_UP:
      return {
        ...state,
        loading: true,
        guestForm: {
          ...state.guestForm,
        }
      };
    case GUEST_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        guestForm: {
          ...state.guestForm,
        }
      };
    case GUEST_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        guestForm: {
          ...state.guestForm,
        }
      };

    default:
      return state;
  }
}
