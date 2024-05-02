import axios from "axios";
import store from "./store";
axios.defaults.baseURL = "http://api.vikingship.xyz/api/";
axios.interceptors.request.use((config) => {
  store.commit("setLaodingFlag", true);
  config.params = { ...config.params };
  return config;
});

axios.interceptors.response.use(
  (config) => {
    store.commit("setLaodingFlag", false);
    return config;
  },
  function (error) {
    store.commit("setLaodingFlag", false);
    return Promise.reject(error.response.data);
  }
);

export default axios;
