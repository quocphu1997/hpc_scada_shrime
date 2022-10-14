import React from "react";
import "./boloc.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

export default function Boloc() {
  const params = useParams();
  return (
    <div className="wrapper-boloc">
      {params.id === "false" && (
        <div>
          <input
            type="checkbox"
            className="nav-input-bl"
            id="tablet-input-bl"
          />
          <div className="nav-bl">
            <h1>{`Bảng điều khiển`}</h1>
            <label htmlFor="tablet-input-bl" className="close-bl">
              <CloseOutlined />
            </label>
          </div>
          <label htmlFor="tablet-input-bl" className="checkbox-show-bl"></label>
          <label htmlFor="tablet-input-bl" className="nav_overlay_bl"></label>
        </div>
      )}
      <img src="../images/boloc.png" alt="pic_456..." />
    </div>
  );
}
