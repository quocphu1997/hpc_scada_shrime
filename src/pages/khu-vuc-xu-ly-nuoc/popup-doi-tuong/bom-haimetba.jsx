import React from "react";

export default function BomHaimetba() {
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
      <label htmlFor="show-pp-kxln-2m3" className="nav-kxln-overlay3"></label>
    </>
  );
}
