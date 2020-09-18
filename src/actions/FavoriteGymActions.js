import {
  FAVORITE_GYM_ADD_NEW,
  FAVORITE_GYM_FETCH, FAVORITE_GYM_REMOVE, USER_LOGGED_IN_FAIL,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';
import {sFavoriteGymLoadedGyms} from '../reducers/FavoriteGymReducer';


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

export function handleFavorite(gym, isFavorite){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);

    if (isFavorite){
      API.removeGymToFavorite(user.id, gym.id, token).
          then(()=>{
            dispatch({type: FAVORITE_GYM_REMOVE});
            dispatch(favoriteGymFetch());
          }).
          catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
          });
    } else {
      API.addGymToFavorite(user.id, gym.id, token).
          then(()=>{
            dispatch({type: FAVORITE_GYM_ADD_NEW});
            dispatch(favoriteGymFetch());
          }).
          catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
          });
    }
  };
}
