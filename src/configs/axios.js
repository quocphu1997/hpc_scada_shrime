import axios, { AxiosRequestHeaders } from "axios";
import { BASE_URL, headercode } from "../constants/common";

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    Common:
      '{"compvtkey":"7e421dd30a394d74b7b9c079e67e272c","sign":"aeb678a6fe206962bd6a0d67a136c3b6","comid":"128","ts":1646965881447}',
  },
});
//REQUEST:  A => INTERCEPTORS => B
// request.interceptors.request.use((config) => {
//   // config.headers["Common"] = "abc";
//   return config;
// });

// //RESPONE:  A => INTERCEPTORS => B

// request.interceptors.response.use((response) => {
//   return response;
// });
