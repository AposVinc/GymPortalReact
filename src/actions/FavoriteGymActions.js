import {
  FAVORITE_GYM_FETCH, FAVORITE_GYM_FETCH_FAIL,
  FAVORITE_GYM_FETCH_SUCCESS, USER_LOGGED_IN_FAIL,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';


export function favoriteGymFetch(){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);

    dispatch( {
      type: FAVORITE_GYM_FETCH,
      payload: API.getAllFavoriteGyms(user.id, token).then(r => ({gyms: r}))
    }) ;
  };
}
