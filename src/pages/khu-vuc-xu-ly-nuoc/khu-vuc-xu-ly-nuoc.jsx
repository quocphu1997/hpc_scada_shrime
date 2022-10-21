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
  // dk van kxln
  const [runvan14, setRunvan14] = useState(false);
  const [runvan15, setRunvan15] = useState(false);
  const [runvan16, setRunvan16] = useState(false);

  // dk van xa
  // dk van xa bo loc
  const [runex1, setEx1] = useState(false);
  const [runex2, setEx2] = useState(false);
  const [runex3, setEx3] = useState(false);
  const [runex4, setEx4] = useState(false);
  const [runex5, setEx5] = useState(false);
  const [runex6, setEx6] = useState(false);
  // dk van xa kln
  const [runex7, setEx7] = useState(false);
  const [runex8, setEx8] = useState(false);
  const [runex9, setEx9] = useState(false);
  const [runex10, setEx10] = useState(false);
  const [runex11, setEx11] = useState(false);
  //dk van xa kcn
  const [runex12, setEx12] = useState(false);
  const [runex13, setEx13] = useState(false);

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
  const [errvan14, setErrvan14] = useState(false);
  const [errvan15, setErrvan15] = useState(false);
  const [errvan16, setErrvan16] = useState(false);
  // err van xả
  const [errex1, setErrex1] = useState(false);
  const [errex2, setErrex2] = useState(false);
  const [errex3, setErrex3] = useState(false);
  const [errex4, setErrex4] = useState(false);
  const [errex5, setErrex5] = useState(false);
  const [errex6, setErrex6] = useState(false);
  const [errex7, setErrex7] = useState(false);
  const [errex8, setErrex8] = useState(false);
  const [errex9, setErrex9] = useState(false);
  const [errex10, setErrex10] = useState(false);
  const [errex11, setErrex11] = useState(false);
  const [errex12, setErrex12] = useState(false);
  const [errex13, setErrex13] = useState(false);
  // blink err
  const [blink1, setBlink1] = useState(false);
  const [blink2, setBlink2] = useState(false);
  const [blink3, setBlink3] = useState(false);
  const [blink4, setBlink4] = useState(false);
  const [blink5, setBlink5] = useState(false);
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
  const [blink18, setBlink18] = useState(false);
  const [blink19, setBlink19] = useState(false);
  const [blink20, setBlink20] = useState(false);
  const [blink21, setBlink21] = useState(false);
  const [blink22, setBlink22] = useState(false);
  const [blink23, setBlink23] = useState(false);
  const [blink24, setBlink24] = useState(false);
  const [blink25, setBlink25] = useState(false);
  const [blink26, setBlink26] = useState(false);
  const [blink27, setBlink27] = useState(false);
  const [blink28, setBlink28] = useState(false);
  const [blink29, setBlink29] = useState(false);
  const [blink30, setBlink30] = useState(false);
  const [blink31, setBlink31] = useState(false);
  const [blink32, setBlink32] = useState(false);
  const [blink33, setBlink33] = useState(false);
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
  // ex
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
  useEffect(() => {
    if (errvan14) {
      const interval = setInterval(() => {
        setBlink31(!blink31);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink31]);
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
        {/* ex bl*/}
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
        {/* ex kln */}
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
        {errex9 ? (
          blink26 ? (
            <img
              className="dk-kxln-ex-9"
              src="../images/van_dien_error.svg"
              alt=" "
            />
          ) : (
            <img
              className="dk-kxln-ex-9"
              src="../images/van_dien_off.svg"
              alt=" "
            />
          )
        ) : runex9 ? (
          <img
            className="dk-kxln-ex-true-9"
            src="../images/van_dien_run.svg"
            alt=" "
          />
        ) : (
          <img
            className="dk-kxln-ex-9"
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
        {/* ex kcn */}
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
