import React, { useEffect, useState } from "react";

export default function VanXaKhucapnuoc() {
  //dk van xa kcn
  const [runex12, setEx12] = useState(false);
  const [runex13, setEx13] = useState(false);
  //   err kcn
  const [errex12, setErrex12] = useState(false);
  const [errex13, setErrex13] = useState(false);

  // blink err
  const [blink29, setBlink29] = useState(false);
  const [blink30, setBlink30] = useState(false);
  // ex
  useEffect(() => {
    if (errex12) {
      const interval = setInterval(() => {
        setBlink29(!blink29);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink29]);
  useEffect(() => {
    if (errex13) {
      const interval = setInterval(() => {
        setBlink30(!blink30);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink30]);
  return (
    <>
      {errex12 ? (
        blink29 ? (
          <img
            className="dk-kxln-ex-12"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-12"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex12 ? (
        <img
          className="dk-kxln-ex-true-12"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-12"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errex13 ? (
        blink30 ? (
          <img
            className="dk-kxln-ex-13"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-13"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runex13 ? (
        <img
          className="dk-kxln-ex-true-13"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-ex-13"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
    </>
  );
}
