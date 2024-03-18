import axios from "axios";

const api = axios.create({
  baseURL: '/api'
});

api.interceptors.request.use(
  function (config) {
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
