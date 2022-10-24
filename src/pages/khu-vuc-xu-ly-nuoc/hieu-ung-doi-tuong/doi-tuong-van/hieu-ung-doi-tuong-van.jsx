import React, { useEffect, useState } from "react";
import VanBoLoc from "./van-bo-loc";

export default function HieuUngDoiTuongVan() {
  // dkvan
  const [runvan1, setRunvan1] = useState(false);
  // dk van kxln
  const [runvan14, setRunvan14] = useState(false);
  const [runvan15, setRunvan15] = useState(false);
  const [runvan16, setRunvan16] = useState(false);
  // err van
  const [errvan1, setErrvan1] = useState(false);
  // err van kxln
  const [errvan14, setErrvan14] = useState(false);
  const [errvan15, setErrvan15] = useState(false);
  const [errvan16, setErrvan16] = useState(false);

  //   err blink
  const [blink5, setBlink5] = useState(false);
  // err blink kxln
  const [blink31, setBlink31] = useState(false);
  const [blink32, setBlink32] = useState(false);
  const [blink33, setBlink33] = useState(false);

  // blink van
  useEffect(() => {
    if (errvan1) {
      const interval = setInterval(() => {
        setBlink5(!blink5);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink5]);
  // blink van kxln
  useEffect(() => {
    if (errvan14) {
      const interval = setInterval(() => {
        setBlink31(!blink31);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink31]);
  useEffect(() => {
    if (errvan15) {
      const interval = setInterval(() => {
        setBlink32(!blink32);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink32]);
  useEffect(() => {
    if (errvan16) {
      const interval = setInterval(() => {
        setBlink33(!blink33);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink33]);
  return (
    <>
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
      <VanBoLoc />
      {/*van  khu xu ly nuoc */}
      {errvan14 ? (
        blink31 ? (
          <img
            className="dk-kxln-van-14"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-14"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan14 ? (
        <img
          className="dk-kxln-van-true-14"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-14"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan15 ? (
        blink32 ? (
          <img
            className="dk-kxln-van-15"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-15"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan15 ? (
        <img
          className="dk-kxln-van-true-15"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-15"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan16 ? (
        blink33 ? (
          <img
            className="dk-kxln-van-16"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-16"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan16 ? (
        <img
          className="dk-kxln-van-true-16"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-16"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
    </>
  );
}
