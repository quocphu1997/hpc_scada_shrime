import { request } from "../configs/axios";
import { ALIAS } from "../constants/common";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../store/name.types/name.type";

const fetchLoginApi = () => {
  return request({
    url: `/login?alias=123123123&password=25f9e794323b453885f5181f1b624d0b`,
    method: "POST",
  });
};
export { fetchLoginApi };


