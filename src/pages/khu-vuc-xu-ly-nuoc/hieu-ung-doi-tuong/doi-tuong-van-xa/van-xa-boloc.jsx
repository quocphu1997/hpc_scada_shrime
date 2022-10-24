import React, { useEffect, useState } from "react";

export default function VanXaBoloc() {
  // dk van xa bo loc
  const [runex1, setEx1] = useState(false);
  const [runex2, setEx2] = useState(false);
  const [runex3, setEx3] = useState(false);
  const [runex4, setEx4] = useState(false);
  const [runex5, setEx5] = useState(false);
  const [runex6, setEx6] = useState(false);
  // err van xả
  const [errex1, setErrex1] = useState(false);
  const [errex2, setErrex2] = useState(false);
  const [errex3, setErrex3] = useState(false);
  const [errex4, setErrex4] = useState(false);
  const [errex5, setErrex5] = useState(false);
  const [errex6, setErrex6] = useState(false);
  // blink err
  const [blink18, setBlink18] = useState(false);
  const [blink19, setBlink19] = useState(false);
  const [blink20, setBlink20] = useState(false);
  const [blink21, setBlink21] = useState(false);
  const [blink22, setBlink22] = useState(false);
  const [blink23, setBlink23] = useState(false);
  //   blink
  useEffect(() => {
    if (errex1) {
      const interval = setInterval(() => {
        setBlink18(!blink18);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink18]);
  useEffect(() => {
    if (errex2) {
      const interval = setInterval(() => {
        setBlink19(!blink19);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink19]);
  useEffect(() => {
    if (errex3) {
      const interval = setInterval(() => {
        setBlink20(!blink20);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink20]);
  useEffect(() => {
    if (errex4) {
      const interval = setInterval(() => {
        setBlink21(!blink21);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink21]);
  useEffect(() => {
    if (errex5) {
      const interval = setInterval(() => {
        setBlink22(!blink22);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink22]);
  useEffect(() => {
    if (errex6) {
      const interval = setInterval(() => {
        setBlink23(!blink23);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink23]);
  return (
    <>
      {errex1 ? (
        blink18 ? (
          <img
            className="dk-kxln-ex-1"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-1"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex1 ? (
        <img
          className="dk-kxln-ex-true-1"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-1"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex2 ? (
        blink19 ? (
          <img
            className="dk-kxln-ex-2"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-2"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex2 ? (
        <img
          className="dk-kxln-ex-true-2"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-2"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex3 ? (
        blink20 ? (
          <img
            className="dk-kxln-ex-3"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-3"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex3 ? (
        <img
          className="dk-kxln-ex-true-3"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-3"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex4 ? (
        blink21 ? (
          <img
            className="dk-kxln-ex-4"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-4"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex4 ? (
        <img
          className="dk-kxln-ex-true-4"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-4"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex5 ? (
        blink22 ? (
          <img
            className="dk-kxln-ex-5"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-5"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex5 ? (
        <img
          className="dk-kxln-ex-true-5"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-5"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex6 ? (
        blink23 ? (
          <img
            className="dk-kxln-ex-6"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-6"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex6 ? (
        <img
          className="dk-kxln-ex-true-6"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-6"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
    </>
  );
}
