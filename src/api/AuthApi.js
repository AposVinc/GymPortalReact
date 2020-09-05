import axios from 'axios';

const URL_REGISTRATION = 'http://10.0.2.2:8080/GymREST/rest/auth/registration';

export const registration = function (email, password) {

  const user = {
    email,
    password,
    username: "prova react",
    lastname: "asdasd",
    name: "asdasd",

  }
  console.log(axios.post(URL_REGISTRATION, user));
  return axios.post(URL_REGISTRATION, user).
      then().
      catch(error => {
        throw error;
      });
};
