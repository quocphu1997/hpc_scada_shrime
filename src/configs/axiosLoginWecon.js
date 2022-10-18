import axios from "axios";
import md5 from "md5";

import { alias, BASE_URL, comid, compvtkey, key, pass, timestamp } from "../constants/common";

console.log(alias,  comid, compvtkey, pass, timestamp ,key);
let toMD5 = md5(
  `alias=${alias}&comid=${comid}&compvtkey=${compvtkey}&password=${pass}&ts=${timestamp}&key=${key}`
);
// 
console.log(timestamp);
console.log(toMD5);
export const request_login = axios.create({
  baseURL: BASE_URL,
  headers: {
    Common:
      `{"compvtkey":"${compvtkey}","sign":"${toMD5}","comid":"${comid}","ts":${timestamp}}`,
  },
});
// REQUEST:  A => INTERCEPTORS => B
request_login.interceptors.request.use((config) => {
  return config;
});

//RESPONE:  A => INTERCEPTORS => B

request_login.interceptors.response.use((response) => {
  return response;
});
