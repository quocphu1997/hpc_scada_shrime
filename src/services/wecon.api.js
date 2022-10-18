import { request_login } from "../configs/axiosLoginWecon";
import { request_Wecon } from "../configs/axiosWecon";
import { alias, pass } from "../constants/common";



const fetchLoginApi = () => {
  return request_login({
    url: `/login?alias=${alias}&password=${pass}`,
    method: "POST",
  });
};

const fetchCallBoxApi = () => {
  return request_Wecon({
    url: `boxs`,
    method: "POST",
  });
};

export { fetchLoginApi, fetchCallBoxApi };
