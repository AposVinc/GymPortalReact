import axios from 'axios';
import querystring from 'query-string';


const URL_REGISTRATION = 'http://10.0.2.2:8080/GymREST/rest/auth/registration';
const URL_LOGIN = 'http://10.0.2.2:8080/GymREST/rest/auth/login';

export const registration = function (email, password) {
  const user = {
    email,
    password,
    username: email,
    lastname: "asdasd",
    name: "asdasd",
  }
  return axios.post(URL_REGISTRATION, user).
      then().
      catch(error => {
        throw error;
      });
};

export const login = function (email, password) {
  const user = {
    username: email,
    password,
  }
  return axios.post(URL_LOGIN, querystring.stringify(user),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
      then( response => response.headers.authorization ).
      catch(error => {
        throw error;
      });
};
