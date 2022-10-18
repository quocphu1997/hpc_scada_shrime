import axios from "axios";
import { BASE_URL, timestamp } from "../constants/common";
import { WECON_LOGIN } from "../store/name.types/name.type";
import md5 from "md5";
import { stringify } from "rc-field-form/es/useWatch";


let wecon_acc = localStorage.getItem(WECON_LOGIN);
let parseWecon = JSON.parse(wecon_acc);


let toMD5 = md5(
  `comid=128&compvtkey=7e421dd30a394d74b7b9c079e67e272c&sid=${parseWecon}&ts=${timestamp}&key=f1cd9351930d4e589922edbcf3b09a7c`
);
let newMD5 = stringify(toMD5);

console.log(timestamp);
export const request_Wecon = axios.create({
  baseURL: BASE_URL,
  headers: {
    Common: `{"compvtkey":"7e421dd30a394d74b7b9c079e67e272c","sign":${newMD5},"comid":"128","sid":${wecon_acc},"ts":${timestamp}}`,
  },
});
// REQUEST:  A => INTERCEPTORS => B
request_Wecon.interceptors.request.use((config) => {
  return config;
});

//RESPONE:  A => INTERCEPTORS => B
request_Wecon.interceptors.response.use((response) => {
  return response;
});
