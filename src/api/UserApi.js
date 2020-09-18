import axios from 'axios';


const URL_BASE = 'http://10.0.2.2:8080/GymREST/rest/';
const URL_GET_UTENTE = URL_BASE + 'users/' ;
const URL_GET_FAVORITE_GYMS = '/favorites/gyms/' ;

export const getUtente = function (id) {
  return axios.get(URL_GET_UTENTE + id, {headers: {'authorization': token}}).
      then(response => response.data).
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

