import axios from './axiosConfig';

const URL_UTENTE = 'users/' ;

export const getUser = function (id, token) {
  return axios.get(URL_UTENTE + id, {headers: {'authorization': token}}).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const userUpdate = function (user, token) {
  return axios.put(URL_UTENTE + user.id, user,{headers: {'authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};

