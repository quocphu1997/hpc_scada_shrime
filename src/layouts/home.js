import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer/footer";
import Header from "../Components/header/header";
import "./home.scss";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="Wrapper-main">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
