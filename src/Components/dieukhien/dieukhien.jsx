import React from "react";
import "./dieukhien.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Dieukhien() {
  const params = useParams();
  // dk run van
  const [runvan_tt, setRunvan_tt] = useState(false);
  const [runvan_ex1, setRunvan_ex1] = useState(false);
  const [runvan_ex2, setRunvan_ex2] = useState(false);
  const [runvan_in, setRunvan_in] = useState(false);
  const [runpump, setRunpump] = useState(false);
  // dk van err
  const [errvan_tt, setErrvan_tt] = useState(false);
  const [errvan_ex1, setErrvan_ex1] = useState(false);
  const [errvan_ex2, setErrvan_ex2] = useState(false);
  const [errvan_in, setErrvan_in] = useState(false);
  const [errpump, setErrpump] = useState(false);
  const [err500l, setErr500l] = useState(false);
  const [errBe, setErrBe] = useState(false);
  // blink err
  const [blink1, setBlink1] = useState(false);
  const [blink2, setBlink2] = useState(false);
  const [blink3, setBlink3] = useState(false);
  const [blink4, setBlink4] = useState(false);
  const [blink5, setBlink5] = useState(false);
  const [blink6, setBlink6] = useState(false);
  const [blink7, setBlink7] = useState(false);
  // hieu ung errVan
  useEffect(() => {
    if (errvan_tt) {
      const interval = setInterval(() => {
        setBlink1(!blink1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink1]);
  useEffect(() => {
    if (errvan_ex1) {
      const interval = setInterval(() => {
        setBlink2(!blink2);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink2]);
  useEffect(() => {
    if (errvan_ex2) {
      const interval = setInterval(() => {
        setBlink3(!blink3);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink3]);
  useEffect(() => {
    if (errvan_in) {
      const interval = setInterval(() => {
        setBlink4(!blink4);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink4]);
  useEffect(() => {
    if (errpump) {
      const interval = setInterval(() => {
        setBlink5(!blink5);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink5]);
  useEffect(() => {
    if (err500l) {
      const interval = setInterval(() => {
        setBlink6(!blink6);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink6]);
  useEffect(() => {
    if (errBe) {
      const interval = setInterval(() => {
        setBlink7(!blink7);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink7]);
  //function
  const handleOn_mt = () => {
    document.getElementById("show-popup-1").checked = false;
    setRunpump(true);
  };
  const handleOff_mt = () => {
    if (window.confirm("Bạn có muốn dừng thiết bị")) {
      document.getElementById("show-popup-1").checked = false;
      setRunpump(false);
    }
  };
  const handleOn_ex1 = () => {
    document.getElementById("show-popup-2").checked = false;
    setRunvan_ex1(true);
  };
  const handleOff_ex1 = () => {
    if (window.confirm("Bạn có muốn dừng thiết bị")) {
      document.getElementById("show-popup-2").checked = false;
      setRunvan_ex1(false);
    }
  };
  const handleOn_tt = () => {
    document.getElementById("show-popup-3").checked = false;
    setRunvan_tt(true);
  };
  const handleOff_tt = () => {
    if (window.confirm("Bạn có muốn dừng thiết bị")) {
      document.getElementById("show-popup-3").checked = false;
      setRunvan_tt(false);
    }
  };
  const handleOn_ex2 = () => {
    document.getElementById("show-popup-4").checked = false;
    setRunvan_ex2(true);
  };
  const handleOff_ex2 = () => {
    if (window.confirm("Bạn có muốn dừng thiết bị")) {
      document.getElementById("show-popup-4").checked = false;
      setRunvan_ex2(false);
    }
  };
  const handleOn_in = () => {
    document.getElementById("show-popup-5").checked = false;
    setRunvan_in(true);
  };
  const handleOff_in = () => {
    if (window.confirm("Bạn có muốn dừng thiết bị")) {
      document.getElementById("show-popup-5").checked = false;
      setRunvan_in(false);
    }
  };

  return (
    <div className="wrapper-chitietbe h-full">
      <div className="bg-dieukhien">
        {/* err 500l */}
        {err500l && blink6 && <span className="err-500l">console.log();</span>}
        <span className="name-500l">500L</span>
        {/* err Be */}
        {errBe && blink7 && <span className="err-be">console.log();</span>}
        {/* Bom tuan hoan */}
        {errpump ? (
          blink5 ? (
            <img
              className="dk-bom-tuanhoan"
              src="../images/motor_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-bom-tuanhoan"
              src="../images/motor_nor.svg"
              alt=" "
            />
          )
        ) : runpump ? (
          <img
            className="dk-bom-tuanhoan"
            src="../images/motor_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-bom-tuanhoan"
            src="../images/motor_nor.svg"
            alt=" "
          />
        )}

        {/* van tuan hoan */}
        {errvan_tt ? (
          blink1 ? (
            <img
              className="dk-van-tuanhoan"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-van-tuanhoan"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan_tt ? (
          <img
            className="dk-van-tuanhoan-run"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-van-tuanhoan"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )}
        {/* van xa 1 */}
        {errvan_ex1 ? (
          blink2 ? (
            <img
              className="dk-van-xa1"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-van-xa1"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan_ex1 ? (
          <img
            className="dk-van-xa1-run"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-van-xa1"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )}
        {/* van xa 2 */}
        {errvan_ex2 ? (
          blink3 ? (
            <img
              className="dk-van-xa2"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-van-xa2"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan_ex2 ? (
          <img
            className="dk-van-xa2-run"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-van-xa2"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )}
        {/* van in */}
        {errvan_in ? (
          blink4 ? (
            <img
              className="dk-van-in"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-van-in"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan_in ? (
          <img
            className="dk-van-in-run"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img className="dk-van-in" src="../images/van_dien_off.svg" alt=" " />
        )}
        {/* thong so be */}
        <span className="thong-so-oxy">{"40"} Mg/l</span>
        <span className="thong-so-nhietdo">{"45"} ℃</span>
      </div>
      {/* tuong tac */}
      {/* motor */}
      <>
        <input style={{ display: "none" }} id="show-popup-1" type="checkbox" />
        <label htmlFor="show-popup-1" className="tuongtac-mt"></label>
        <div className="popUp-mt">
          <span className="title-pp">Bơm Bể nuôi 1</span>
          <div className="dk-btn ">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-dk"
              onClick={handleOn_mt}
            >
              Chạy
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-dk"
              onClick={handleOff_mt}
            >
              Dừng
            </button>
          </div>
        </div>
      </>
      {/* exhaust-500l */}
      <>
        <input style={{ display: "none" }} id="show-popup-2" type="checkbox" />
        <label htmlFor="show-popup-2" className="tuongtac-ex1"></label>
        <div className="popUp-ex1">
          <span className="title-pp">Van xả bể 500L</span>
          <div className="dk-btn ">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-dk"
              onClick={handleOn_ex1}
            >
              Mở van
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-dk"
              onClick={handleOff_ex1}
            >
              Đóng van
            </button>
          </div>
        </div>
      </>
      {/* valve cyclic */}
      <>
        <input style={{ display: "none" }} id="show-popup-3" type="checkbox" />
        <label htmlFor="show-popup-3" className="tuongtac-tt"></label>
        <div className="popUp-tt">
          <span className="title-pp">Van tuần hoàn</span>
          <div className="dk-btn ">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-dk"
              onClick={handleOn_tt}
            >
              Mở van
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-dk"
              onClick={handleOff_tt}
            >
              Đóng van
            </button>
          </div>
        </div>
      </>
      {/* exhaust-be */}
      <>
        <input style={{ display: "none" }} id="show-popup-4" type="checkbox" />
        <label htmlFor="show-popup-4" className="tuongtac-ex2"></label>
        <div className="popUp-ex2">
          <span className="title-pp">Van xả Bể 1</span>
          <div className="dk-btn ">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-dk"
              onClick={handleOn_ex2}
            >
              Mở van
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-dk"
              onClick={handleOff_ex2}
            >
              Đóng van
            </button>
          </div>
        </div>
      </>
      {/* valve-in */}
      <>
        <input style={{ display: "none" }} id="show-popup-5" type="checkbox" />
        <label htmlFor="show-popup-5" className="tuongtac-in"></label>
        <div className="popUp-in">
          <span className="title-pp">Van in Bể 1</span>
          <div className="dk-btn ">
            <button
              style={{ backgroundColor: "#76ff03" }}
              className="btn-dk"
              onClick={handleOn_in}
            >
              Mở van
            </button>
            <button
              style={{ backgroundColor: "#ff5722" }}
              className="btn-dk"
              onClick={handleOff_in}
            >
              Đóng van
            </button>
          </div>
        </div>
      </>
      {/* overlay */}
      <label htmlFor="show-popup-1" className="nav-overlay1"></label>
      <label htmlFor="show-popup-2" className="nav-overlay2"></label>
      <label htmlFor="show-popup-3" className="nav-overlay3"></label>
      <label htmlFor="show-popup-4" className="nav-overlay4"></label>
      <label htmlFor="show-popup-5" className="nav-overlay5"></label>
    </div>
  );
}
