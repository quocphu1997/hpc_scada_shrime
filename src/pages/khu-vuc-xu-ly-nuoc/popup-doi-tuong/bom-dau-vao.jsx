import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DT_MT1 } from "../../../store/name.types/name.type";

export default function BomDauVao() {
  const dispatch = useDispatch();
  const handleOn_mt = async () => {
    document.getElementById("show-pp-kxln-mt1").checked = false;
    await dispatch({ type: DT_MT1, payload: true });
  };
  const handleOff_mt = async () => {
    document.getElementById("show-pp-kxln-mt1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_MT1, payload: false });
    }
  };
  return (
    <>
      <input
        style={{ display: "none" }}
        id="show-pp-kxln-mt1"
        type="checkbox"
      />
      <label htmlFor="show-pp-kxln-mt1" className="tuongtac-kxln-mt1"></label>
      <div className="popUp-kxln-mt1 popUp-kxln">
        <span className="title-kxln-pp">Bơm đầu vào</span>
        <div className="dk-kxln-btn">
          <button
            style={{ backgroundColor: "#76ff03" }}
            className="btn-kxln-dk"
            onClick={handleOn_mt}
          >
            Chạy
          </button>
          <button
            style={{ backgroundColor: "#ff5722" }}
            className="btn-kxln-dk"
            onClick={handleOff_mt}
          >
            Dừng
          </button>
        </div>
      </div>
      <label htmlFor="show-pp-kxln-mt1" className="nav-kxln-overlay1"></label>
    </>
  );
}
