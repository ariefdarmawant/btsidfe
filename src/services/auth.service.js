import axios from "axios";
import JwtService from "./jwt.service";

const API_URL = "http://localhost:3001";

const AuthService = {
  login: (query, password) => {
    return axios
      .post(API_URL + "/auth/login", {
        query,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          JwtService.setUser(response.data);
        }

        return response;
      });
  },

  logout: () => JwtService.removeUser(),

  register: (username, email, name, phoneNumber, password) => {
    return axios.post(API_URL + "/auth/registration", {
      username,
      email,
      name,
      phoneNumber,
      password,
    }).then((response) => {
      return response;
    });;
  },
};

export default AuthService;
