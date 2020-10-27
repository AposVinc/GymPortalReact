import axios from './axiosConfig';

const URL_GET_UTENTE = 'users/' ;
const URL_GET_FAVORITE_GYMS = '/favorites/gyms/' ;

export const getUser = function (id, token) {
  return axios.get(URL_GET_UTENTE + id, {headers: {'authorization': token}}).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const userUpdate = function (user, token) {
  return axios.put(URL_GET_UTENTE + user.id, user,{headers: {'authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};

export const getAllFavoriteGyms = function (idUser, token) {
  return axios.get(URL_GET_UTENTE + idUser + URL_GET_FAVORITE_GYMS, {headers: {'Authorization': token}}).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const addGymToFavorite = function (idUser, idGym, token) {
  return axios.post(URL_GET_UTENTE + idUser + URL_GET_FAVORITE_GYMS, idGym.toString(),{headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};

export const removeGymToFavorite = function (idUser, idGym, token) {
  return axios.delete(URL_GET_UTENTE + idUser + URL_GET_FAVORITE_GYMS + idGym,{headers: {'Authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};

