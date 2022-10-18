import axios from "axios";
import { BASE_CV_URL } from "../constants/common";
import { USER_ACCOUNTS } from "../store/name.types/name.type";

export const request_cv = axios.create({
  baseURL: BASE_CV_URL,
});
// REQUEST:  A => INTERCEPTORS => B
request_cv.interceptors.request.use((config) => {
  let userAccs = localStorage.getItem(USER_ACCOUNTS);
  if (userAccs) {
    userAccs = JSON.parse(userAccs);
    config.headers.Authorization = `Token ${userAccs.token}`;
  }
  return config;
});


//RESPONE:  A => INTERCEPTORS => B
request_cv.interceptors.response.use((response) => {
  return response;
});
