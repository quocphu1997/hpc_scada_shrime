import React from "react";
import { useDispatch } from "react-redux";
import {
  DT_IN1,
  DT_IN2,
  DT_IN3,
  DT_IN4,
  DT_IN5,
  DT_IN6,
  DT_OUT1,
  DT_OUT2,
  DT_OUT3,
  DT_OUT4,
  DT_OUT5,
  DT_OUT6,
} from "../../../store/name.types/name.type";

export default function VanBoLoc() {
  const dispatch = useDispatch();
  const handleOn_in1 = async () => {
    document.getElementById("show-pp-kxln-in-bl1").checked = false;
    dispatch({ type: DT_IN1, payload: true });
  };
  const handleOff_in1 = async () => {
    document.getElementById("show-pp-kxln-in-bl1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_IN1, payload: false });
    }
  };
  const handleOn_in2 = async () => {
    document.getElementById("show-pp-kxln-in-bl2").checked = false;
    dispatch({ type: DT_IN2, payload: true });
  };
  const handleOff_in2 = async () => {
    document.getElementById("show-pp-kxln-in-bl2").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_IN2, payload: false });
    }
  };
  const handleOn_in3 = async () => {
    document.getElementById("show-pp-kxln-in-bl3").checked = false;
    dispatch({ type: DT_IN3, payload: true });
  };
  const handleOff_in3 = async () => {
    document.getElementById("show-pp-kxln-in-bl3").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_IN3, payload: false });
    }
  };
  const handleOn_in4 = async () => {
    document.getElementById("show-pp-kxln-in-bl4").checked = false;
    dispatch({ type: DT_IN4, payload: true });
  };
  const handleOff_in4 = async () => {
    document.getElementById("show-pp-kxln-in-bl4").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_IN4, payload: false });
    }
  };
  const handleOn_in5 = async () => {
    document.getElementById("show-pp-kxln-in-bl5").checked = false;
    dispatch({ type: DT_IN5, payload: true });
  };
  const handleOff_in5 = async () => {
    document.getElementById("show-pp-kxln-in-bl5").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_IN5, payload: false });
    }
  };
  const handleOn_in6 = async () => {
    document.getElementById("show-pp-kxln-in-bl6").checked = false;
    dispatch({ type: DT_IN6, payload: true });
  };
  const handleOff_in6 = async () => {
    document.getElementById("show-pp-kxln-in-bl6").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_IN6, payload: false });
    }
  };
  //
  const handleOn_out1 = async () => {
    document.getElementById("show-pp-kxln-out-bl1").checked = false;
    dispatch({ type: DT_OUT1, payload: true });
  };
  const handleOff_out1 = async () => {
    document.getElementById("show-pp-kxln-out-bl1").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_OUT1, payload: false });
    }
  };
  const handleOn_out2 = async () => {
    document.getElementById("show-pp-kxln-out-bl2").checked = false;
    dispatch({ type: DT_OUT2, payload: true });
  };
  const handleOff_out2 = async () => {
    document.getElementById("show-pp-kxln-out-bl2").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_OUT2, payload: false });
    }
  };
  const handleOn_out3 = async () => {
    document.getElementById("show-pp-kxln-out-bl3").checked = false;
    dispatch({ type: DT_OUT3, payload: true });
  };
  const handleOff_out3 = async () => {
    document.getElementById("show-pp-kxln-out-bl3").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_OUT3, payload: false });
    }
  };
  const handleOn_out4 = async () => {
    document.getElementById("show-pp-kxln-out-bl4").checked = false;
    dispatch({ type: DT_OUT4, payload: true });
  };
  const handleOff_out4 = async () => {
    document.getElementById("show-pp-kxln-out-bl4").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_OUT4, payload: false });
    }
  };
  const handleOn_out5 = async () => {
    document.getElementById("show-pp-kxln-out-bl5").checked = false;
    dispatch({ type: DT_OUT5, payload: true });
  };
  const handleOff_out5 = async () => {
    document.getElementById("show-pp-kxln-out-bl5").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_OUT5, payload: false });
    }
  };
  const handleOn_out6 = async () => {
    document.getElementById("show-pp-kxln-out-bl6").checked = false;
    dispatch({ type: DT_OUT6, payload: true });
  };
  const handleOff_out6 = async () => {
    document.getElementById("show-pp-kxln-out-bl6").checked = false;
    if (window.confirm("Bạn có chắc muốn dừng")) {
      dispatch({ type: DT_OUT6, payload: false });
    }
  };
  return (
    <>
      {/* in 1 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-in-bl1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-in-bl1"
          className="tuongtac-kxln-in-bl1"
        ></label>
        <div className="popUp-kxln-in-bl1 popUp-kxln">
          <span className="title-kxln-pp">Van in-1 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_in1}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_in1}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* in 2 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-in-bl2"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-in-bl2"
          className="tuongtac-kxln-in-bl2"
        ></label>
        <div className="popUp-kxln-in-bl2 popUp-kxln">
          <span className="title-kxln-pp">Van in-2 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_in2}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_in2}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* in 3 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-in-bl3"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-in-bl3"
          className="tuongtac-kxln-in-bl3"
        ></label>
        <div className="popUp-kxln-in-bl3 popUp-kxln">
          <span className="title-kxln-pp">Van in-3 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_in3}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_in3}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* in 4 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-in-bl4"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-in-bl4"
          className="tuongtac-kxln-in-bl4"
        ></label>
        <div className="popUp-kxln-in-bl4 popUp-kxln">
          <span className="title-kxln-pp">Van in-4 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_in4}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_in4}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* in 5 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-in-bl5"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-in-bl5"
          className="tuongtac-kxln-in-bl5"
        ></label>
        <div className="popUp-kxln-in-bl5 popUp-kxln">
          <span className="title-kxln-pp">Van in-5 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_in5}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_in5}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* in 6 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-in-bl6"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-in-bl6"
          className="tuongtac-kxln-in-bl6"
        ></label>
        <div className="popUp-kxln-in-bl6 popUp-kxln">
          <span className="title-kxln-pp">Van in-6 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_in6}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_in6}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van out 1 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-out-bl1"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-out-bl1"
          className="tuongtac-kxln-out-bl1"
        ></label>
        <div className="popUp-kxln-out-bl1 popUp-kxln">
          <span className="title-kxln-pp">Van out-1 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_out1}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_out1}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van out 2 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-out-bl2"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-out-bl2"
          className="tuongtac-kxln-out-bl2"
        ></label>
        <div className="popUp-kxln-out-bl2 popUp-kxln">
          <span className="title-kxln-pp">Van out-2 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_out2}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_out2}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van out 3 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-out-bl3"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-out-bl3"
          className="tuongtac-kxln-out-bl3"
        ></label>
        <div className="popUp-kxln-out-bl3 popUp-kxln">
          <span className="title-kxln-pp">Van out-3 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_out3}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_out3}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van out 4 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-out-bl4"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-out-bl4"
          className="tuongtac-kxln-out-bl4"
        ></label>
        <div className="popUp-kxln-out-bl4 popUp-kxln">
          <span className="title-kxln-pp">Van out-4 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_out4}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_out4}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van out 5 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-out-bl5"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-out-bl5"
          className="tuongtac-kxln-out-bl5"
        ></label>
        <div className="popUp-kxln-out-bl5 popUp-kxln">
          <span className="title-kxln-pp">Van out-5 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_out5}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_out5}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* van out 6 */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-out-bl6"
          type="checkbox"
        />
        <label
          htmlFor="show-pp-kxln-out-bl6"
          className="tuongtac-kxln-out-bl6"
        ></label>
        <div className="popUp-kxln-out-bl6 popUp-kxln">
          <span className="title-kxln-pp">Van out-6 bộ lọc</span>
          <div className="dk-kxln-btn">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-kxln-dk"
              onClick={handleOn_out6}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-kxln-dk"
              onClick={handleOff_out6}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      <>
        {/* in bl */}
        <label
          htmlFor="show-pp-kxln-in-bl1"
          className="nav-kxln-overlay4"
        ></label>
        <label
          htmlFor="show-pp-kxln-in-bl2"
          className="nav-kxln-overlay5"
        ></label>
        <label
          htmlFor="show-pp-kxln-in-bl3"
          className="nav-kxln-overlay6"
        ></label>
        <label
          htmlFor="show-pp-kxln-in-bl4"
          className="nav-kxln-overlay7"
        ></label>
        <label
          htmlFor="show-pp-kxln-in-bl5"
          className="nav-kxln-overlay8"
        ></label>
        <label
          htmlFor="show-pp-kxln-in-bl6"
          className="nav-kxln-overlay9"
        ></label>
        {/* out bl */}
        <label
          htmlFor="show-pp-kxln-out-bl1"
          className="nav-kxln-overlay10"
        ></label>
        <label
          htmlFor="show-pp-kxln-out-bl2"
          className="nav-kxln-overlay11"
        ></label>
        <label
          htmlFor="show-pp-kxln-out-bl3"
          className="nav-kxln-overlay12"
        ></label>
        <label
          htmlFor="show-pp-kxln-out-bl4"
          className="nav-kxln-overlay13"
        ></label>
        <label
          htmlFor="show-pp-kxln-out-bl5"
          className="nav-kxln-overlay14"
        ></label>
        <label
          htmlFor="show-pp-kxln-out-bl6"
          className="nav-kxln-overlay15"
        ></label>
      </>
    </>
  );
}
