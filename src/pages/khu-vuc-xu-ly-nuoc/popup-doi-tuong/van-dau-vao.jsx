import React from "react";

export default function VanDauVao() {
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
            // onClick={handleOn_mt}
          >
            Chạy
          </button>
          <button
            style={{ backgroundColor: "#ff5722" }}
            className="btn-kxln-dk"
            // onClick={handleOff_mt}
          >
            Dừng
          </button>
        </div>
      </div>
      <label htmlFor="show-pp-kxln-vdv" className="nav-kxln-overlay2"></label>
    </>
  );
}
