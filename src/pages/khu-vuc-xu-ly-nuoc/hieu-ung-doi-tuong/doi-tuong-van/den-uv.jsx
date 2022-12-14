import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DenUv() {
  const { van_kxln } = useSelector((state) => state.quanlyDoiTuongReducer);
  const [runvan_uv1, setRunvan_uv1] = useState(false);
  //   err van uv
  const [errvan_uv1, setErrvan_uv1] = useState(false);
  // blink
  const [blink1, setBlink1] = useState(false);
  // redux state
  useEffect(() => {
    setRunvan_uv1(van_kxln.vUv);
  }, [van_kxln.vUv]);
  // hieu ung blink
  useEffect(() => {
    if (errvan_uv1) {
      const interval = setInterval(() => {
        setBlink1(!blink1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink1]);
  return (
    <>
      {errvan_uv1 ? (
        blink1 ? (
          <img
            className="dk-kxln-uv-van-1"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-uv-van-1"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan_uv1 ? (
        <img
          className="dk-kxln-uv-van-true-1"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-uv-van-1"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
    </>
  );
}
