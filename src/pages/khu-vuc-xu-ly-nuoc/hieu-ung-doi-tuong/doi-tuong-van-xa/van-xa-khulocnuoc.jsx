import React, { useEffect, useState } from "react";

export default function VanXaKhulocnuoc() {
  // dk van xa kln
  const [runex7, setEx7] = useState(false);
  const [runex8, setEx8] = useState(false);
  const [runex9, setEx9] = useState(false);
  const [runex10, setEx10] = useState(false);
  const [runex11, setEx11] = useState(false);
  // err van xả
  const [errex7, setErrex7] = useState(false);
  const [errex8, setErrex8] = useState(false);
  const [errex9, setErrex9] = useState(false);
  const [errex10, setErrex10] = useState(false);
  const [errex11, setErrex11] = useState(false);
  // blink
  const [blink24, setBlink24] = useState(false);
  const [blink25, setBlink25] = useState(false);
  const [blink26, setBlink26] = useState(false);
  const [blink27, setBlink27] = useState(false);
  const [blink28, setBlink28] = useState(false);

  useEffect(() => {
    if (errex7) {
      const interval = setInterval(() => {
        setBlink24(!blink24);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink24]);
  useEffect(() => {
    if (errex8) {
      const interval = setInterval(() => {
        setBlink25(!blink25);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink25]);
  useEffect(() => {
    if (errex9) {
      const interval = setInterval(() => {
        setBlink26(!blink26);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink26]);
  useEffect(() => {
    if (errex10) {
      const interval = setInterval(() => {
        setBlink27(!blink27);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink27]);
  useEffect(() => {
    if (errex11) {
      const interval = setInterval(() => {
        setBlink28(!blink28);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink28]);
  return (
    <>
      {errex7 ? (
        blink24 ? (
          <img
            className="dk-kxln-ex-7"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-7"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex7 ? (
        <img
          className="dk-kxln-ex-true-7"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-7"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex8 ? (
        blink25 ? (
          <img
            className="dk-kxln-ex-8"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-8"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex8 ? (
        <img
          className="dk-kxln-ex-true-8"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-8"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex10 ? (
        blink27 ? (
          <img
            className="dk-kxln-ex-10"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-10"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex10 ? (
        <img
          className="dk-kxln-ex-true-10"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-10"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex11 ? (
        blink28 ? (
          <img
            className="dk-kxln-ex-11"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-11"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex11 ? (
        <img
          className="dk-kxln-ex-true-11"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-11"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
    </>
  );
}
