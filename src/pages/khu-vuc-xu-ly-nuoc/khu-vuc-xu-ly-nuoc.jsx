import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
import "./khuvucxylynuoc.scss";
import { useNavigate } from "react-router-dom";

export default function KhuVucXuLyNuoc() {
  const [stateManAu, setStateManAu] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    document.getElementById("modal-1").style.display = "block";
    document.getElementById("overlay-1").style.display = "block";
  };
  const hideModal = () => {
    document.getElementById("modal-1").style.display = "none";
    document.getElementById("overlay-1").style.display = "none";
  };
  const showModalSmartDrum = () => {
    document.getElementById("modal-2").style.display = "block";
    document.getElementById("overlay-2").style.display = "block";
  };
  const hideModalSmartDrum = () => {
    document.getElementById("modal-2").style.display = "none";
    document.getElementById("overlay-2").style.display = "none";
  };
  return (
    <div className="grid grid-cols-12 w-100clear h-full">
      <div className="nav-overlay-landscape">
        <span className="text-landscape">Hãy Xoay Màn Hình lại</span>
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
          Chế độ chạy: {!stateManAu ? "Manual" : "Auto"}
        </button>
        <img
          className="pic-xlnc"
          src="./images/khuxulynuoc.png"
          alt="pic_123"
        />
        {/* modal bơm đầu vào*/}
        <span className="click-pump-in" onClick={showModal}></span>
        <div id="overlay-1" className="modal-overlay" onClick={hideModal}>
          <div id="modal-1" className="modal-dialog">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              style={{ marginBottom: "0" }}
            >
              Bơm đầu vào
            </h5>
            <div className="modal-body relative p-4">
              <button
                className="btn-modal-xlc btnC-modal-xlc"
                onClick={() => {
                  document.getElementById("modal-1").style.display = "none";
                }}
              >
                Chạy
              </button>
              <button
                className="btn-modal-xlc btnD-modal-xlc"
                onClick={hideModal}
              >
                Dừng
              </button>
            </div>
          </div>
        </div>
        {/* Smart Drum filter */}
        <span className="click-smart-drum" onClick={showModalSmartDrum}></span>
        <div
          id="overlay-2"
          className="modal-overlay"
          onClick={hideModalSmartDrum}
        >
          <div id="modal-2" className="modal-dialog-2 ">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              style={{ marginBottom: "0" }}
            >
              Smart Drum Filter
            </h5>
            <div className="modal-body relative p-4">
              <button
                className="btn-modal-xlc btnC-modal-xlc"
                onClick={hideModalSmartDrum}
              >
                Chạy
              </button>
              <button
                className="btn-modal-xlc btnD-modal-xlc"
                onClick={hideModalSmartDrum}
              >
                Dừng
              </button>
            </div>
          </div>
        </div>
        <span
          className="click-bo-loc"
          onClick={() => {
            navigate(`/dieukhien-boloc/${stateManAu}`);
          }}
        ></span>
      </div>
    </div>
  );
}
