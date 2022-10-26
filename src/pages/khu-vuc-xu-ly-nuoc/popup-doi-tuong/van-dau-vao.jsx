import React from "react";
import { useDispatch } from "react-redux";
import { DT_VDV, DT_VUV } from "../../../store/name.types/name.type";

export default function VanDauVao() {
  const dispatch = useDispatch();
  const handleOn_van = async () => {
    document.getElementById("show-pp-kxln-vdv").checked = false;
    dispatch({ type: DT_VDV, payload: true });
  };
  const handleOff_van = async () => {
    document.getElementById("show-pp-kxln-vdv").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_VDV, payload: false });
    }
  };
  return (
    <>
      <input
        style={{ display: "none" }}
        id="show-pp-kxln-vdv"
        type="checkbox"
      />
      <label htmlFor="show-pp-kxln-vdv" className="tuongtac-kxln-vdv"></label>
      <div className="popUp-kxln-vdv popUp-kxln">
        <span className="title-kxln-pp">Van đầu vào</span>
        <div className="dk-kxln-btn">
          <button
            style={{ backgroundColor: "#76ff03" }}
            className="btn-kxln-dk"
            onClick={handleOn_van}
          >
            Chạy
          </button>
          <button
            style={{ backgroundColor: "#ff5722" }}
            className="btn-kxln-dk"
            onClick={handleOff_van}
          >
            Dừng
          </button>
        </div>
      </div>
      <label htmlFor="show-pp-kxln-vdv" className="nav-kxln-overlay2"></label>
    </>
  );
}
