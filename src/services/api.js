import axios from "axios";
import JwtService from "./jwt.service";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = JwtService.getLocalAccessToken();
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) { 
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        JwtService.removeUser();

        try {
          const rs = await api.post("/auth/refreshJwt", {
            refreshToken: JwtService.getLocalRefreshToken(),
          });

          const { accessToken } = rs.data;
          JwtService.updateLocalAccessToken(accessToken);

          return api(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default api;