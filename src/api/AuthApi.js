import axios from 'axios';
import querystring from 'query-string';

const URL_BASE = 'http://10.0.2.2:8080/GymREST/rest/';
const URL_REGISTRATION = URL_BASE + 'auth/registration';
const URL_LOGIN = URL_BASE + 'auth/login';

export const registration = function (username, password) {
  const user = {
    name: "asdasd",
    lastname: "asdasd",
    email: username,
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
