import { request_cv } from "../configs/axiosCV";

const fetchUserLoginPostApi = (data) => {
  return request_cv({
    url: "/api/login/",
    method: "POST",
    data,
  });
};

export { fetchUserLoginPostApi };
