import axios from "axios";

const api = axios.create({
  baseURL: '10.0.0.206:8080'
});


export default api;
