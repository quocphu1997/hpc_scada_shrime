import React, { useEffect, useState } from "react";
import { Button, Modal, Space } from "antd";
import "./khuvucxylynuoc.scss";
import { useNavigate } from "react-router-dom";
import LoiBaoMuc from "./loi-bao-muc/loi-bao-muc";
import HieuUngDoiTuongMotor from "./hieu-ung-doi-tuong/hieu-ung-doi-tuong-motor";
import HieuUngDoiTuongVan from "./hieu-ung-doi-tuong/doi-tuong-van/hieu-ung-doi-tuong-van";
import VanXaBoloc from "./hieu-ung-doi-tuong/doi-tuong-van-xa/van-xa-boloc";
import VanXaKhulocnuoc from "./hieu-ung-doi-tuong/doi-tuong-van-xa/van-xa-khulocnuoc";
import VanXaKhucapnuoc from "./hieu-ung-doi-tuong/doi-tuong-van-xa/van-xa-khucapnuoc";
import BomDauVao from "./popup-doi-tuong/bom-dau-vao";
import VanDauVao from "./popup-doi-tuong/van-dau-vao";
import BomHaimetba from "./popup-doi-tuong/bom-haimetba";
import VanBoLoc from "./popup-doi-tuong/van-bo-loc";
import CumKcn from "./popup-doi-tuong/cum-kcn";
import VanXa from "./popup-doi-tuong/van-xa";

export default function KhuVucXuLyNuoc() {
  const [stateManAu, setStateManAu] = useState(false);
  const navigate = useNavigate();
  // UV light
  const [uvlight, setUvlight] = useState(false);
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
        <>
          {/* motor */}
          <HieuUngDoiTuongMotor />
          {/* van  */}
          <HieuUngDoiTuongVan />
          {/* ex bl*/}
          <VanXaBoloc />
          {/* ex kln */}
          <VanXaKhulocnuoc />
          {/* ex kcn */}
          <VanXaKhucapnuoc />
          {/* UV light */}
          {uvlight && (
            <img
              className="dk-kxln-uv-true"
              src="../images/light_uv.svg"
              alt=" "
            />
          )}
        </>
      </div>
      {/* thong so */}
      <>
        <span className="kxln-oxy-ss2">Oxy</span>
        <span className="kxln-temp-ss2">Nhiet do</span>
      </>
      {/* lỗi báo mức */}
      <LoiBaoMuc />
      {/* popup */}
      <>
        {/* bơm dầu vào */}
        <BomDauVao />
        {/* van đầu vào */}
        <VanDauVao />
        {/* bơm 2m3 */}
        <BomHaimetba />
        {/* van in bo loc */}
        <VanBoLoc />
        {/* cum van khu cấp nước */}
        <CumKcn />
        {/* van xa */}
        <VanXa />
      </>
    </div>
  );
}
