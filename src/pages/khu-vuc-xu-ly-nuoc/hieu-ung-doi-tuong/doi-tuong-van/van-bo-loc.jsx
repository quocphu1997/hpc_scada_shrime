import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function VanBoLoc() {
  const { van_kxln } = useSelector((state) => state.quanlyDoiTuongReducer);
  // dk van bo loc
  const [runvan2, setRunvan2] = useState(false);
  const [runvan3, setRunvan3] = useState(false);
  const [runvan4, setRunvan4] = useState(false);
  const [runvan5, setRunvan5] = useState(false);
  const [runvan6, setRunvan6] = useState(false);
  const [runvan7, setRunvan7] = useState(false);
  const [runvan8, setRunvan8] = useState(false);
  const [runvan9, setRunvan9] = useState(false);
  const [runvan10, setRunvan10] = useState(false);
  const [runvan11, setRunvan11] = useState(false);
  const [runvan12, setRunvan12] = useState(false);
  const [runvan13, setRunvan13] = useState(false);
  // err bo loc
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
  //   err blink bl
  const [blink6, setBlink6] = useState(false);
  const [blink7, setBlink7] = useState(false);
  const [blink8, setBlink8] = useState(false);
  const [blink9, setBlink9] = useState(false);
  const [blink10, setBlink10] = useState(false);
  const [blink11, setBlink11] = useState(false);
  const [blink12, setBlink12] = useState(false);
  const [blink13, setBlink13] = useState(false);
  const [blink14, setBlink14] = useState(false);
  const [blink15, setBlink15] = useState(false);
  const [blink16, setBlink16] = useState(false);
  const [blink17, setBlink17] = useState(false);
  //  redux state
  useEffect(() => {
    setRunvan2(van_kxln.bl.in.in1);
  }, [van_kxln.bl.in.in1]);
  useEffect(() => {
    setRunvan3(van_kxln.bl.in.in2);
  }, [van_kxln.bl.in.in2]);
  useEffect(() => {
    setRunvan4(van_kxln.bl.in.in3);
  }, [van_kxln.bl.in.in3]);
  useEffect(() => {
    setRunvan5(van_kxln.bl.in.in4);
  }, [van_kxln.bl.in.in4]);
  useEffect(() => {
    setRunvan6(van_kxln.bl.in.in5);
  }, [van_kxln.bl.in.in5]);
  useEffect(() => {
    setRunvan7(van_kxln.bl.in.in6);
  }, [van_kxln.bl.in.in6]);
  useEffect(() => {
    setRunvan8(van_kxln.bl.out.out1);
  }, [van_kxln.bl.out.out1]);
  useEffect(() => {
    setRunvan9(van_kxln.bl.out.out2);
  }, [van_kxln.bl.out.out2]);
  useEffect(() => {
    setRunvan10(van_kxln.bl.out.out3);
  }, [van_kxln.bl.out.out3]);
  useEffect(() => {
    setRunvan11(van_kxln.bl.out.out4);
  }, [van_kxln.bl.out.out4]);
  useEffect(() => {
    setRunvan12(van_kxln.bl.out.out5);
  }, [van_kxln.bl.out.out5]);
  useEffect(() => {
    setRunvan13(van_kxln.bl.out.out6);
  }, [van_kxln.bl.out.out6]);
  //   hieu ung blink
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
  useEffect(() => {
    if (errvan5) {
      const interval = setInterval(() => {
        setBlink9(!blink9);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink9]);
  useEffect(() => {
    if (errvan6) {
      const interval = setInterval(() => {
        setBlink10(!blink10);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink10]);
  useEffect(() => {
    if (errvan7) {
      const interval = setInterval(() => {
        setBlink11(!blink11);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink11]);
  useEffect(() => {
    if (errvan8) {
      const interval = setInterval(() => {
        setBlink12(!blink12);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink12]);
  useEffect(() => {
    if (errvan9) {
      const interval = setInterval(() => {
        setBlink13(!blink13);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink13]);
  useEffect(() => {
    if (errvan10) {
      const interval = setInterval(() => {
        setBlink14(!blink14);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink14]);
  useEffect(() => {
    if (errvan11) {
      const interval = setInterval(() => {
        setBlink15(!blink15);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink15]);
  useEffect(() => {
    if (errvan12) {
      const interval = setInterval(() => {
        setBlink16(!blink16);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink16]);
  useEffect(() => {
    if (errvan13) {
      const interval = setInterval(() => {
        setBlink17(!blink17);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink17]);
  return (
    <>
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
      {errvan4 ? (
        blink8 ? (
          <img
            className="dk-kxln-van-4"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-4"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan4 ? (
        <img
          className="dk-kxln-van-true-4"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-4"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan5 ? (
        blink9 ? (
          <img
            className="dk-kxln-van-5"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-5"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan5 ? (
        <img
          className="dk-kxln-van-true-5"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-5"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan6 ? (
        blink10 ? (
          <img
            className="dk-kxln-van-6"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-6"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan6 ? (
        <img
          className="dk-kxln-van-true-6"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-6"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan7 ? (
        blink11 ? (
          <img
            className="dk-kxln-van-7"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-7"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan7 ? (
        <img
          className="dk-kxln-van-true-7"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-7"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan8 ? (
        blink12 ? (
          <img
            className="dk-kxln-van-8"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-8"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan8 ? (
        <img
          className="dk-kxln-van-true-8"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-8"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan9 ? (
        blink13 ? (
          <img
            className="dk-kxln-van-9"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-9"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan9 ? (
        <img
          className="dk-kxln-van-true-9"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-9"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan10 ? (
        blink14 ? (
          <img
            className="dk-kxln-van-10"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-10"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan10 ? (
        <img
          className="dk-kxln-van-true-10"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-10"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan11 ? (
        blink15 ? (
          <img
            className="dk-kxln-van-11"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-11"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan11 ? (
        <img
          className="dk-kxln-van-true-11"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-11"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan12 ? (
        blink16 ? (
          <img
            className="dk-kxln-van-12"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-12"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan12 ? (
        <img
          className="dk-kxln-van-true-12"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-12"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
      {errvan13 ? (
        blink17 ? (
          <img
            className="dk-kxln-van-13"
            src="../images/van_dien_error.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-van-13"
            src="../images/van_dien_off.svg"
            alt=" "
          />
        )
      ) : runvan13 ? (
        <img
          className="dk-kxln-van-true-13"
          src="../images/van_dien_run.svg"
          alt=" "
        />
      ) : (
        <img
          className="dk-kxln-van-13"
          src="../images/van_dien_off.svg"
          alt=" "
        />
      )}
    </>
  );
}
