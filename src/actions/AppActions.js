import {
  GUEST_FORM_CHANGE_VALUE, GUEST_FORM_RESET,
  LOADING,
  LOADING_END,
} from '../stores/ActionType';
import * as API from '../api';
import {sAppGuestFormEmail, sAppGuestFormPassword} from '../reducers/selectors';
import {registration} from '../api';


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
    registration(email, password).
        then(() => {
          dispatch(appGuestFormReset());
        }).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
        });
  };
};

export const appSignIn = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const email = sAppGuestFormEmail(storeState);
    const password = sAppGuestFormPassword(storeState);
    // firebase.auth().signInWithEmailAndPassword(email, password).
    //     then(() => {
    //       dispatch(appGuestFormReset());
    //     }).
    //     catch((error) => {
    //       // Handle Errors here.
    //       console.log(error.code, error.message);
    //     });
  };
};
