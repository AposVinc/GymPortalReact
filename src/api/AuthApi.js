import axios from 'axios';
import {
  sAppGuestFormEmail,
  sAppGuestFormPassword,
} from '../reducers/AppReducer';

const URL_REGISTRATION = 'http://10.0.2.2:8080/GymREST/rest/auth/registration';

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
