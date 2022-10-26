import React from "react";

export default function SmartDrumFilter() {
  return (
    <>
      <input
        style={{ display: "none" }}
        id="show-pp-kxln-smrtDrum"
        type="checkbox"
      />
      <label htmlFor="show-pp-kxln-smrtDrum" className="tuongtac-kxln-smrtDrum"></label>
      <div className="popUp-kxln-smrtDrum popUp-kxln">
        <span className="title-kxln-pp">Smart Drum</span>
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
      <label htmlFor="show-pp-kxln-smrtDrum" className="nav-kxln-smrtDrum-overlay1"></label>
    </>
  );
}
