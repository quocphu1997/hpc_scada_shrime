import { Tabs } from "antd";
import React from "react";

import BangLoi from "../bang-loi/bang-loi";
import BaoTri from "../bao-tri/bao-tri";
import CongViec from "../cong-viec/cong-viec";
import KhuVucNuoiTom from "../khu-vuc-nuoi-tom/khu-vuc-nuoi-tom";
import KhuVucXuLyNuoc from "../khu-vuc-xu-ly-nuoc/khu-vuc-xu-ly-nuoc";
import "./nanofarm.scss";

export default function Nanofarm() {
  const items = [
    {
      label: "Khu vực nuôi tôm",
      key: "1",
      children: <KhuVucNuoiTom />,
    },
    { label: "Khu vực xử lý nước", key: "2", children: <KhuVucXuLyNuoc /> },
    { label: "Bảng lỗi", key: "3", children: <BangLoi /> },
    { label: "Bảo trì", key: "4", children: <BaoTri /> },
    { label: "Công việc", key: "5", children: <CongViec /> },
  ];
  return (
    <div className="m-5 p-5 Wrapper border-4 min-h-screen">
      <Tabs className="w-100" defaultActiveKey="1" items={items}></Tabs>
    </div>
  );
}
