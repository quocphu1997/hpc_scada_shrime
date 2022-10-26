import React from "react";
import { useDispatch } from "react-redux";
import { DT_BL_EX1, DT_BL_EX2, DT_BL_EX3, DT_BL_EX4, DT_BL_EX5, DT_BL_EX6 } from "../../../store/name.types/name.type";

export default function VanXaboloc() {
  const dispatch = useDispatch();
  const handleOn_ex1 = async () => {
    document.getElementById("show-pp-kxln-ex-bl1").checked = false;
    dispatch({ type: DT_BL_EX1, payload: true });
  };
  const handleOff_ex1 = async () => {
    document.getElementById("show-pp-kxln-ex-bl1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_BL_EX1, payload: false });
    }
  };
  const handleOn_ex2 = async () => {
    document.getElementById("show-pp-kxln-ex-bl2").checked = false;
    dispatch({ type: DT_BL_EX2, payload: true });
  };
  const handleOff_ex2 = async () => {
    document.getElementById("show-pp-kxln-ex-bl2").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_BL_EX2, payload: false });
    }
  };
  const handleOn_ex3 = async () => {
    document.getElementById("show-pp-kxln-ex-bl3").checked = false;
    dispatch({ type: DT_BL_EX3, payload: true });
  };
  const handleOff_ex3 = async () => {
    document.getElementById("show-pp-kxln-ex-bl3").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_BL_EX3, payload: false });
    }
  };
  const handleOn_ex4 = async () => {
    document.getElementById("show-pp-kxln-ex-bl4").checked = false;
    dispatch({ type: DT_BL_EX4, payload: true });
  };
  const handleOff_ex4 = async () => {
    document.getElementById("show-pp-kxln-ex-bl4").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_BL_EX4, payload: false });
    }
  };
  const handleOn_ex5 = async () => {
    document.getElementById("show-pp-kxln-ex-bl5").checked = false;
    dispatch({ type: DT_BL_EX5, payload: true });
  };
  const handleOff_ex5 = async () => {
    document.getElementById("show-pp-kxln-ex-bl5").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_BL_EX5, payload: false });
    }
  };
  const handleOn_ex6 = async () => {
    document.getElementById("show-pp-kxln-ex-bl6").checked = false;
    dispatch({ type: DT_BL_EX6, payload: true });
  };
  const handleOff_ex6 = async () => {
    document.getElementById("show-pp-kxln-ex-bl6").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_BL_EX6, payload: false });
    }
  };
  return (
    <>
      {/* van xả bl 1 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-ex-bl1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-ex-bl1"
          className="tuongtac-kxln-ex-bl1"
        ></label>
        <div className="popUp-kxln-ex-bl1 popUp-kxln">
          <span className="title-kxln-pp">Van xả 1 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_ex1}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ex1}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van xả bl 2 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-ex-bl2"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-ex-bl2"
          className="tuongtac-kxln-ex-bl2"
        ></label>
        <div className="popUp-kxln-ex-bl2 popUp-kxln">
          <span className="title-kxln-pp">Van xả 2 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_ex2}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ex2}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van xả bl 3 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-ex-bl3"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-ex-bl3"
          className="tuongtac-kxln-ex-bl3"
        ></label>
        <div className="popUp-kxln-ex-bl3 popUp-kxln">
          <span className="title-kxln-pp">Van xả 3 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_ex3}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ex3}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van xả bl 4 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-ex-bl4"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-ex-bl4"
          className="tuongtac-kxln-ex-bl4"
        ></label>
        <div className="popUp-kxln-ex-bl4 popUp-kxln">
          <span className="title-kxln-pp">Van xả 4 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_ex4}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ex4}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van xả bl 5 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-ex-bl5"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-ex-bl5"
          className="tuongtac-kxln-ex-bl5"
        ></label>
        <div className="popUp-kxln-ex-bl5 popUp-kxln">
          <span className="title-kxln-pp">Van xả 5 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_ex5}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ex5}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van xả bl 6 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-ex-bl6"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-ex-bl6"
          className="tuongtac-kxln-ex-bl6"
        ></label>
        <div className="popUp-kxln-ex-bl6 popUp-kxln">
          <span className="title-kxln-pp">Van xả 6 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_ex6}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_ex6}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* overlay */}
      <label
        htmlFor="show-pp-kxln-ex-bl1"
        className="nav-kxln-overlay30"
      ></label>
      <label
        htmlFor="show-pp-kxln-ex-bl2"
        className="nav-kxln-overlay31"
      ></label>
      <label
        htmlFor="show-pp-kxln-ex-bl3"
        className="nav-kxln-overlay32"
      ></label>
      <label
        htmlFor="show-pp-kxln-ex-bl4"
        className="nav-kxln-overlay33"
      ></label>
      <label
        htmlFor="show-pp-kxln-ex-bl5"
        className="nav-kxln-overlay34"
      ></label>
      <label
        htmlFor="show-pp-kxln-ex-bl6"
        className="nav-kxln-overlay35"
      ></label>
    </>
  );
}
