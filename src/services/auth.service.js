import axios from "axios";
import JwtService from "./jwt.service";

const API_URL = "http://94.74.86.174:8080/api";

const AuthService = {
  login: (username, password) => {
    return axios
      .post(API_URL + "/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.data.token) {
          JwtService.setUser(response.data.data.token);
        }

        return response;
      });
  },

  logout: () => JwtService.removeUser(),

  register: (username, email, password) => {
    return axios
      .post(API_URL + "/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        return response;
      });
  },
};

export default AuthService;
