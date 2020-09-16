import {
  FAVORITE_GYM_FETCH,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';


export function favoriteGymFetch(){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);

    dispatch({
      type: FAVORITE_GYM_FETCH,
      payload: API.getAllFavoriteGyms(user.id, token).then(r => ({gyms: r}))
    });
  };
}
