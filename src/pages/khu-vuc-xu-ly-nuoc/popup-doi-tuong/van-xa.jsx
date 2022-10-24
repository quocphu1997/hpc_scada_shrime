import React from "react";

export default function VanXa() {
  return (
    <>
      {/* van xa 1 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-vanxa1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-vanxa1"
          className="tuongtac-kcn-vanxa1"
        ></label>
        <div className="popUp-kcn-vanxa1 popUp-kcn">
          <span className="title-kxln-pp">Van xả Smart Drum</span>
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
      </>
      <label htmlFor="show-pp-kcn-vanxa1" className="nav-kcn-overlay1"></label>
      <label htmlFor="show-pp-kcn-vanxa2" className="nav-kcn-overlay2"></label>
      <label htmlFor="show-pp-kcn-vanxa3" className="nav-kcn-overlay3"></label>
      <label htmlFor="show-pp-kcn-vanxa4" className="nav-kcn-overlay4"></label>
      <label htmlFor="show-pp-kcn-vanxa5" className="nav-kcn-overlay5"></label>
      <label htmlFor="show-pp-kcn-vanxa6" className="nav-kcn-overlay6"></label>
    </>
  );
}
