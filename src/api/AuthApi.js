import axios from 'axios';
import querystring from 'query-string';

const URL_BASE = 'http://localhost:8080/GymREST/rest/';
const URL_REGISTRATION = URL_BASE + 'auth/registration';
const URL_LOGIN = URL_BASE + 'auth/login';
const URL_REFRESH = URL_BASE + 'auth/refresh';

export const registration = function (name, lastname, email, username, password) {
  const user = {
    name,
    lastname,
    email,
    username,
    password,
  }
  return axios.post(URL_REGISTRATION, user).
      then().
      catch(error => {
        throw error;
      });
};

export const login = function (username, password) {
  const user = {
    username,
    password,
  }
  return axios.post(URL_LOGIN, querystring.stringify(user),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
      then( response => response.headers).
      catch(error => {
        throw error;
      });
};

export const refresh = function (token) {
  return axios.get(URL_REFRESH, {headers: {'Authorization': token}}).
      then(response => response.headers.authorization).
      catch(error => {
        throw error;
      });
};
