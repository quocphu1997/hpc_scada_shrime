import React from "react";
import { useDispatch } from "react-redux";
import { DT_MT2 } from "../../../store/name.types/name.type";

export default function BomHaimetba() {
  const dispatch = useDispatch();
  const handleOn_mt = async () => {
    document.getElementById("show-pp-kxln-2m3").checked = false;
    await dispatch({ type: DT_MT2, payload: true });
  };
  const handleOff_mt = async () => {
    document.getElementById("show-pp-kxln-2m3").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_MT2, payload: false });
    }
  };
  return (
    <>
      <input
        style={{ display: "none" }}
        id="show-pp-kxln-2m3"
        type="checkbox"
      />
      <label htmlFor="show-pp-kxln-2m3" className="tuongtac-kxln-2m3"></label>
      <div className="popUp-kxln-2m3 popUp-kxln">
        <span className="title-kxln-pp">Bơm bể 2m3</span>
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
      <label htmlFor="show-pp-kxln-2m3" className="nav-kxln-overlay3"></label>
    </>
  );
}
