import React from "react";
import { useDispatch } from "react-redux";
import {
  DT_MT3,
  DT_MT4,
  DT_SS1,
  DT_TT,
  DT_VUV,
  DT_XT,
} from "../../../store/name.types/name.type";

export default function CumKcn() {
  const dispatch = useDispatch();
  const handleOn_mt1 = async () => {
    document.getElementById("show-pp-kcn-mt-ss1").checked = false;
    await dispatch({ type: DT_MT3, payload: true });
  };
  const handleOff_mt1 = async () => {
    document.getElementById("show-pp-kcn-mt-ss1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_MT3, payload: false });
    }
  };
  const handleOn_mt2 = async () => {
    document.getElementById("show-pp-kcn-mt-tt").checked = false;
    await dispatch({ type: DT_MT4, payload: true });
  };
  const handleOff_mt2 = async () => {
    document.getElementById("show-pp-kcn-mt-tt").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_MT4, payload: false });
    }
  };
  const handleOn_vUv = async () => {
    document.getElementById("show-pp-kcn-in-blg1").checked = false;
    await dispatch({ type: DT_VUV, payload: true });
  };
  const handleOff_vUv = async () => {
    document.getElementById("show-pp-kcn-in-blg1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_VUV, payload: false });
    }
  };
  const handleOn_ss1 = async () => {
    document.getElementById("show-pp-kcn-in-ss1").checked = false;
    await dispatch({ type: DT_SS1, payload: true });
  };
  const handleOff_ss1 = async () => {
    document.getElementById("show-pp-kcn-in-ss1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_SS1, payload: false });
    }
  };
  const handleOn_xt = async () => {
    document.getElementById("show-pp-kcn-xt-ss1").checked = false;
    await dispatch({ type: DT_XT, payload: true });
  };
  const handleOff_xt = async () => {
    document.getElementById("show-pp-kcn-xt-ss1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_XT, payload: false });
    }
  };
  const handleOn_tt = async () => {
    document.getElementById("show-pp-kcn-tt-ss1").checked = false;
    await dispatch({ type: DT_TT, payload: true });
  };
  const handleOff_tt = async () => {
    document.getElementById("show-pp-kcn-tt-ss1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      await dispatch({ type: DT_TT, payload: false });
    }
  };
  return (
    <>
      {/* van bể lắng */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kcn-in-blg1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kcn-in-blg1"
          className="tuongtac-kcn-in-blg1"
        ></label>
        <div className="popUp-kcn-in-blg1 popUp-kxln">
          <span className="title-kxln-pp">Van in bể lắng</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_vUv}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_vUv}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
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
              onClick={handleOn_ss1}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ss1}
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
              onClick={handleOn_xt}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_xt}
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
              onClick={handleOn_tt}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_tt}
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
              onClick={handleOn_mt1}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_mt1}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* motor tt-ss2 */}
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
              onClick={handleOn_mt2}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_mt2}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* overlay */}
      <label htmlFor="show-pp-kcn-in-ss1" className="nav-kcn-overlay16"></label>
      <label htmlFor="show-pp-kcn-mt-ss1" className="nav-kcn-overlay17"></label>
      <label htmlFor="show-pp-kcn-xt-ss1" className="nav-kcn-overlay18"></label>
      <label htmlFor="show-pp-kcn-tt-ss1" className="nav-kcn-overlay19"></label>
      <label htmlFor="show-pp-kcn-mt-tt" className="nav-kcn-overlay20"></label>
      <label
        htmlFor="show-pp-kcn-in-blg1"
        className="nav-kcn-overlay21"
      ></label>
    </>
  );
}
