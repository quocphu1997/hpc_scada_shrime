import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../khuvucxylynuoc.scss";

export default function HieuUngDoiTuongMotor() {
  const { pump } = useSelector((state) => state.quanlyDoiTuongReducer);
  // dk motor
  const [runmt1, setRunmt1] = useState(false);
  const [runmt2, setRunmt2] = useState(false);
  const [runmt3, setRunmt3] = useState(false);
  const [runmt4, setRunmt4] = useState(false);
  // dk err mt
  const [errmt1, setErrMt1] = useState(false);
  const [errmt2, setErrMt2] = useState(false);
  const [errmt3, setErrMt3] = useState(false);
  const [errmt4, setErrMt4] = useState(false);
  // blink err
  const [blink1, setBlink1] = useState(false);
  const [blink2, setBlink2] = useState(false);
  const [blink3, setBlink3] = useState(false);
  const [blink4, setBlink4] = useState(false);
  //
  useEffect(() => {
    setRunmt1(pump.mt1);
  }, [pump.mt1]);
  useEffect(() => {
    setRunmt2(pump.mt2);
  }, [pump.mt2]);
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
  return (
    <>
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
        <img className="dk-kxln-bom-1" src="../images/motor_run.svg" alt=" " />
      ) : (
        <img className="dk-kxln-bom-1" src="../images/motor_nor.svg" alt=" " />
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
        <img className="dk-kxln-bom-2" src="../images/motor_run.svg" alt=" " />
      ) : (
        <img className="dk-kxln-bom-2" src="../images/motor_nor.svg" alt=" " />
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
        <img className="dk-kxln-bom-3" src="../images/motor_run.svg" alt=" " />
      ) : (
        <img className="dk-kxln-bom-3" src="../images/motor_nor.svg" alt=" " />
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
        <img className="dk-kxln-bom-4" src="../images/motor_run.svg" alt=" " />
      ) : (
        <img className="dk-kxln-bom-4" src="../images/motor_nor.svg" alt=" " />
      )}
    </>
  );
}
