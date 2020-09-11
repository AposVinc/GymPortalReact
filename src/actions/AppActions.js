import {
  GUEST_FORM_CHANGE_VALUE,
  GUEST_FORM_RESET,
  GUEST_SIGN_UP,
  GUEST_SIGN_UP_FAIL, GUEST_SIGN_UP_SUCCESS,
  LOADING,
  LOADING_END, USER_LOGGED_IN, USER_LOGGED_IN_FAIL, USER_LOGGED_IN_SUCCESS,
} from '../stores/ActionType';
import * as API from '../api';
import {sAppGuestFormUsername, sAppGuestFormPassword} from '../reducers/selectors';
import axios from 'axios';


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

export const appGuestFormChangeUsername = function(value) {
  return {
    type: GUEST_FORM_CHANGE_VALUE,
    payload: {
      field: 'username',
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
    const username = sAppGuestFormUsername(storeState);
    const password = sAppGuestFormPassword(storeState);

    dispatch({type: GUEST_SIGN_UP});
    API.registration(username, password).
        then(() => {
          dispatch({type: GUEST_SIGN_UP_SUCCESS});
          dispatch(appSignIn());
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
    const username = sAppGuestFormUsername(storeState);
    const password = sAppGuestFormPassword(storeState);
    dispatch({type: USER_LOGGED_IN});
    API.login(username, password).
        then(result => {
          axios.get(result.location, {headers: {'authorization': result.authorization}}).
              then(response => {
                dispatch( {
                  type: USER_LOGGED_IN_SUCCESS,
                  payload: {
                    token: result.authorization,
                    user: response.data
                  }
                })
                dispatch(appGuestFormReset());
              }).done();
        }).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          dispatch({type: USER_LOGGED_IN_FAIL});
        });
  };
};
