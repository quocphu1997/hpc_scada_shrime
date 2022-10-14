import { Tabs } from "antd";
import React from "react";
import TimerBaoTri from "../../Components/timerbaotri/timerbaotri";
import TraCuuBaoHanh from "../../Components/tracuubaohanh/tracuubaohanh";

export default function BaoTri() {
  const items = [
    { label: "Thời gian chạy", key: "item-1", children: <TimerBaoTri /> }, // remember to pass the key prop
    { label: "Tra cứu bảo hành", key: "item-2", children: <TraCuuBaoHanh /> },
  ];
  return (
    <div className="h-full p-10">
      <Tabs items={items} />
    </div>
  );
}
