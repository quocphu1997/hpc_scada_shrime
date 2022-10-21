import React, { useEffect, useState } from "react";
import { Button, Modal, Space } from "antd";
import "./khuvucxylynuoc.scss";
import { useNavigate } from "react-router-dom";

export default function KhuVucXuLyNuoc() {
  const [stateManAu, setStateManAu] = useState(false);
  const navigate = useNavigate();
  // dk motor
  const [runmt1, setRunmt1] = useState(false);
  const [runmt2, setRunmt2] = useState(false);
  const [runmt3, setRunmt3] = useState(false);
  const [runmt4, setRunmt4] = useState(false);
  // dkvan
  const [runvan1, setRunvan1] = useState(false);
  const [runvan2, setRunvan2] = useState(false);
  const [runvan3, setRunvan3] = useState(false);
  const [runvan4, setRunvan4] = useState(false);
  const [runvan6, setRunvan6] = useState(false);
  const [runvan7, setRunvan7] = useState(false);
  const [runvan8, setRunvan8] = useState(false);
  const [runvan9, setRunvan9] = useState(false);
  const [runvan10, setRunvan10] = useState(false);
  const [runvan11, setRunvan11] = useState(false);
  const [runvan12, setRunvan12] = useState(false);
  const [runvan13, setRunvan13] = useState(false);
  // dk err mt
  const [errmt1, setErrMt1] = useState(false);
  const [errmt2, setErrMt2] = useState(false);
  const [errmt3, setErrMt3] = useState(false);
  const [errmt4, setErrMt4] = useState(false);
  // err van
  const [errvan1, setErrvan1] = useState(false);
  const [errvan2, setErrvan2] = useState(false);
  const [errvan3, setErrvan3] = useState(false);
  const [errvan4, setErrvan4] = useState(false);
  const [errvan5, setErrvan5] = useState(false);
  const [errvan6, setErrvan6] = useState(false);
  const [errvan7, setErrvan7] = useState(false);
  const [errvan8, setErrvan8] = useState(false);
  const [errvan9, setErrvan9] = useState(false);
  const [errvan10, setErrvan10] = useState(false);
  const [errvan11, setErrvan11] = useState(false);
  const [errvan12, setErrvan12] = useState(false);
  const [errvan13, setErrvan13] = useState(false);
  // blink err
  const [blink1, setBlink1] = useState(false);
  const [blink2, setBlink2] = useState(false);
  const [blink3, setBlink3] = useState(false);
  const [blink4, setBlink4] = useState(false);
  const [blink5, setBlink5] = useState(false);
  const [blink6, setBlink6] = useState(false);
  const [blink7, setBlink7] = useState(false);
  const [blink8, setBlink8] = useState(false);
  // hieu ung
  useEffect(() => {
    if (errmt1) {
      const interval = setInterval(() => {
        setBlink1(!blink1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink1]);
  useEffect(() => {
    if (errmt2) {
      const interval = setInterval(() => {
        setBlink2(!blink2);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink2]);
  useEffect(() => {
    if (errmt3) {
      const interval = setInterval(() => {
        setBlink3(!blink3);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink3]);
  useEffect(() => {
    if (errmt4) {
      const interval = setInterval(() => {
        setBlink4(!blink4);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink4]);
  useEffect(() => {
    if (errmt4) {
      const interval = setInterval(() => {
        setBlink4(!blink4);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink4]);
  // blink van
  useEffect(() => {
    if (errvan1) {
      const interval = setInterval(() => {
        setBlink5(!blink5);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink5]);
  useEffect(() => {
    if (errvan2) {
      const interval = setInterval(() => {
        setBlink6(!blink6);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink6]);
  useEffect(() => {
    if (errvan3) {
      const interval = setInterval(() => {
        setBlink7(!blink7);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink7]);
  useEffect(() => {
    if (errvan4) {
      const interval = setInterval(() => {
        setBlink8(!blink8);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink8]);
  //
  return (
    <div className="grid grid-cols-12 w-100clear wrapper-pic h-full">
      <div className="nav-overlay-landscape">
        <p className="text-landscape">Hãy Xoay Màn Hình lại !</p>
        <img
          className="phone-kvxln-w686"
          width={100}
          src="../images/smartphone.png"
          alt=""
        />
      </div>
      <div className="col-start-1 col-span-12 wrapper-pic p-4 h-full">
        <button
          className={`btn-chedo-xlnc ${
            !stateManAu ? "btn-color-man" : "btn-color-auto"
          }`}
          onClick={() => {
            if (window.confirm("Bạn có muốn đổi chế độ chạy")) {
              setStateManAu(!stateManAu);
            }
          }}
        >
          Chế độ chạy: {!stateManAu ? "thủ công" : "tự động"}
        </button>
        {/* ảnh chính giao diện */}
        <img className="pic-xlnc" src="./images/kvxln.svg" alt="pic_123" />
        {/* hiệu ứng doi tuong */}
        {/* mt 1 */}
        {errmt1 ? (
          blink1 ? (
            <img
              className="dk-kxln-bom-1"
              src="../images/motor_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-bom-1"
              src="../images/motor_nor.svg"
              alt=" "
            />
          )
        ) : runmt1 ? (
          <img
            className="dk-kxln-bom-1"
            src="../images/motor_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-bom-1"
            src="../images/motor_nor.svg"
            alt=" "
          />
        )}
        {/* mt 2 */}
        {errmt2 ? (
          blink2 ? (
            <img
              className="dk-kxln-bom-2"
              src="../images/motor_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-bom-2"
              src="../images/motor_nor.svg"
              alt=" "
            />
          )
        ) : runmt2 ? (
          <img
            className="dk-kxln-bom-2"
            src="../images/motor_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-bom-2"
            src="../images/motor_nor.svg"
            alt=" "
          />
        )}
        {/* mt 3 */}
        {errmt3 ? (
          blink3 ? (
            <img
              className="dk-kxln-bom-3"
              src="../images/motor_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-bom-3"
              src="../images/motor_nor.svg"
              alt=" "
            />
          )
        ) : runmt3 ? (
          <img
            className="dk-kxln-bom-3"
            src="../images/motor_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-bom-3"
            src="../images/motor_nor.svg"
            alt=" "
          />
        )}
        {/* mt 4 */}
        {errmt4 ? (
          blink4 ? (
            <img
              className="dk-kxln-bom-4"
              src="../images/motor_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-bom-4"
              src="../images/motor_nor.svg"
              alt=" "
            />
          )
        ) : runmt4 ? (
          <img
            className="dk-kxln-bom-4"
            src="../images/motor_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-bom-4"
            src="../images/motor_nor.svg"
            alt=" "
          />
        )}
        {/* van dau vao */}
        {errvan1 ? (
          blink5 ? (
            <img
              className="dk-kxln-van-1"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-van-1"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan1 ? (
          <img
            className="dk-kxln-van-true-1"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-1"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )}
        {/* van bo loc */}
        {errvan2 ? (
          blink6 ? (
            <img
              className="dk-kxln-van-2"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-van-2"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan2 ? (
          <img
            className="dk-kxln-van-true-2"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-2"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )}
        {errvan3 ? (
          blink7 ? (
            <img
              className="dk-kxln-van-3"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-van-3"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runvan3 ? (
          <img
            className="dk-kxln-van-true-3"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-3"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )}
      </div>
      {/* motor pp */}
      <>
        <input
          style={{ display: "none" }}
          id="show-pp-kxln-mt1"
          type="checkbox"
        />
        <label htmlFor="show-pp-kxln-mt1" className="tuongtac-kxln-mt"></label>
        <div className="popUp-kxln-mt">
          <span className="title-kxln-pp">Bơm Bể nuôi 1</span>
          <div className="dk-kxln-btn ">
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
      <label htmlFor="show-pp-kxln-mt1" className="nav-kxln-overlay1"></label>
    </div>
  );
}
