import {
  USER_LOGGED_OUT, USER_REFRESH_TOKEN,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserToken} from '../reducers/UserReducer';


export const userLogout = function() {
  return {
    type: USER_LOGGED_OUT,
  }
};

export const userRefreshToken = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const token = sUserToken(storeState);
    API.refresh(token).
        then( response => {
          dispatch({
            type: USER_REFRESH_TOKEN,
            payload:  {
              token: response
            }
          });
        }).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          dispatch(userLogout());
        });
  };
};

