import React from "react";

export default function CumKcn() {
  return (
    <>
      {/* van ss1 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-in-ss1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-in-ss1"
          className="tuongtac-kcn-in-ss1"
        ></label>
        <div className="popUp-kcn-in-ss1 popUp-kcn">
          <span className="title-kxln-pp">Van in bể ss1</span>
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
      {/* van xa tran */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-xt-ss1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-xt-ss1"
          className="tuongtac-kcn-xt-ss1"
        ></label>
        <div className="popUp-kcn-xt-ss1 popUp-kcn">
          <span className="title-kxln-pp">Van xả tràn</span>
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
      {/* van tuan hoan */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-tt-ss1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-tt-ss1"
          className="tuongtac-kcn-tt-ss1"
        ></label>
        <div className="popUp-kcn-tt-ss1 popUp-kcn">
          <span className="title-kxln-pp">Van tuần hoàn</span>
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
      {/* motor ss1 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-mt-ss1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-mt-ss1"
          className="tuongtac-kcn-mt-ss1"
        ></label>
        <div className="popUp-kcn-mt-ss1 popUp-kcn">
          <span className="title-kxln-pp">Bơm bể ss1</span>
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
      {/* motor tt */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-mt-tt"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-mt-tt"
          className="tuongtac-kcn-mt-tt"
        ></label>
        <div className="popUp-kcn-mt-tt popUp-kcn">
          <span className="title-kxln-pp">Bơm tuần hoàn</span>
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
      {/* overlay */}
      <label htmlFor="show-pp-kcn-in-ss1" className="nav-kcn-overlay16"></label>
      <label htmlFor="show-pp-kcn-xt-ss1" className="nav-kcn-overlay18"></label>
      <label htmlFor="show-pp-kcn-tt-ss1" className="nav-kcn-overlay19"></label>
      <label htmlFor="show-pp-kcn-mt-ss1" className="nav-kcn-overlay17"></label>
      <label htmlFor="show-pp-kcn-mt-tt" className="nav-kcn-overlay20"></label>
    </>
  );
}
