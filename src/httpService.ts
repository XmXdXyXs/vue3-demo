import axios from "axios";
import store from "./store";
axios.defaults.baseURL = "http://apis.imooc.com/api/";
axios.interceptors.request.use((config) => {
  store.commit("setLaodingFlag", true);
  config.params = { ...config.params, icode: "903E1E796AD6240B" };
  return config;
});

axios.interceptors.response.use((config) => {
  store.commit("setLaodingFlag", false);
  return config;
});

export default axios;
