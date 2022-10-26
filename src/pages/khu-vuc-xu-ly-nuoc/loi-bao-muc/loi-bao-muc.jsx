import React, { useEffect, useState } from "react";
import "../khuvucxylynuoc.scss";

export default function LoiBaoMuc() {
  // err bao muc
  const [errbm1, setErrbm1] = useState(false);
  const [errbm2, setErrbm2] = useState(false);
  const [errbm3, setErrbm3] = useState(false);
  const [errbm4, setErrbm4] = useState(false);
  const [errbm5, setErrbm5] = useState(false);
  // blink bao muc
  const [blink34, setBlink34] = useState(false);
  const [blink35, setBlink35] = useState(false);
  const [blink36, setBlink36] = useState(false);
  const [blink37, setBlink37] = useState(false);
  const [blink38, setBlink38] = useState(false);
  // hieu ung err bao muc
  useEffect(() => {
    if (errbm1) {
      const interval = setInterval(() => {
        setBlink34(!blink34);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink34]);
  useEffect(() => {
    if (errbm2) {
      const interval = setInterval(() => {
        setBlink35(!blink35);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink35]);
  useEffect(() => {
    if (errbm3) {
      const interval = setInterval(() => {
        setBlink36(!blink36);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink36]);
  useEffect(() => {
    if (errbm4) {
      const interval = setInterval(() => {
        setBlink37(!blink37);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink37]);
  useEffect(() => {
    if (errbm5) {
      const interval = setInterval(() => {
        setBlink38(!blink38);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink38]);
  return (
    <>
      {errbm1 && blink34 && <span className="kxln-2m3">Nước đang cao</span>}
      {errbm2 && blink35 && <span className="kxln-beLang">Nước đang cao</span>}
      {errbm3 && blink36 && <span className="kxln-ss1">Nước đang cao</span>}
      {errbm4 && blink37 && <span className="kxln-ss2">Nước đang cao</span>}
      {errbm5 && blink38 && <span className="kxln-drum-filter">Nước đang cao</span>}
    </>
  );
}
