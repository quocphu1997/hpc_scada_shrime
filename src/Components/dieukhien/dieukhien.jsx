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
      {params.id === 'false' && (
        <div >
          <input type="checkbox" className="nav_input" id="tablet-input" />
          <div className="nav_tablet">
            <h1>{`Bảng điều khiển`}</h1>
            <label htmlFor="tablet-input" className="nav_close">
              <CloseOutlined />
            </label>
          </div>
          <label className="checkbox-show" htmlFor="tablet-input"></label>
          <label htmlFor="tablet-input" className="nav_overlay"></label>
        </div>
      )}
      <img className="chi-tiet-be" src="../images/chitietbe.png" alt="picc..." />
    </div>
  );
}
