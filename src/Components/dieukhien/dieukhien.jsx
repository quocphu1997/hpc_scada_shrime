import React from "react";
import { Modal } from "antd";
import "./dieukhien.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Dieukhien() {
  const params = useParams();

  return (
    <div className="wrapper-chitietbe h-full">
      <div className="bg-dieukhien">
          <img className="dk-bom-tuanhoan" src="../images/motor_nor.svg" alt=" "/>
          
      </div>
    </div>
  );
}
