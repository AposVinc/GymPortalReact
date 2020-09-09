import {
  GUEST_FORM_CHANGE_VALUE,
  GUEST_FORM_RESET,
  GUEST_SIGN_UP,
  GUEST_SIGN_UP_FAIL, GUEST_SIGN_UP_SUCCESS,
  LOADING,
  LOADING_END,
} from '../stores/ActionType';
import * as API from '../api';
import {sAppGuestFormEmail, sAppGuestFormPassword} from '../reducers/selectors';


export const appLoading = function() {
  return {
    type: LOADING
  }
}

export const appEndLoading = function() {
  return {
    type: LOADING_END,
  }
}

export const appGuestFormChangeEmail = function(value) {
  return {
    type: GUEST_FORM_CHANGE_VALUE,
    payload: {
      field: 'email',
      value,
    },
  };
};

export const appGuestFormChangePassword = function(value) {
  return {
    type: GUEST_FORM_CHANGE_VALUE,
    payload: {
      field: 'password',
      value,
    },
  };
};

export const appGuestFormReset = function() {
  return {
    type: GUEST_FORM_RESET,
  };
};


export const appSignUp = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const email = sAppGuestFormEmail(storeState);
    const password = sAppGuestFormPassword(storeState);

    dispatch({type: GUEST_SIGN_UP});
    API.registration(email, password).
        then(() => {
          dispatch({type: GUEST_SIGN_UP_SUCCESS});
          dispatch(appGuestFormReset());
        }).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          dispatch({type: GUEST_SIGN_UP_FAIL});
        });
  };
};

export const appSignIn = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const email = sAppGuestFormEmail(storeState);
    const password = sAppGuestFormPassword(storeState);
    API.login(email, password).
        then((result) => {
          console.log(result);
        }).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
        });
  };
};
