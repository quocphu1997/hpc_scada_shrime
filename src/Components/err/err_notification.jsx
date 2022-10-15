import { notification } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./err.scss";

export default function ErrNotification() {
  const [errkhuvuc, setErrkhuvuc] = useState(false);
  const [errName, setErrName] = useState("Khu xử lý nước");


  notification.config({
    duration: 0,
    placement: "topRight",
    top: 100,

  });
  //
  useEffect(() => {
    if (errkhuvuc) {
      notification.error({
        message: `Đang bị lỗi ở khu vực ${errName}`,
      });
    }
  }, []);
  return <></>;
}
