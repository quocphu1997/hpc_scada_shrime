import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
//
//
const Boloc = lazy(() => import("../Components/dieukhienxlc/boloc/boloc"));
const ThemCongViec = lazy(() =>
  import("../Components/them-cong-viec/them-cong-viec")
);
const SoLieu = lazy(() => import("../Components/solieu/solieu"));
const BangLoi = lazy(() => import("../pages/bang-loi/bang-loi"));
const BaoTri = lazy(() => import("../pages/bao-tri/bao-tri"));
const CongViec = lazy(() => import("../pages/cong-viec/cong-viec"));
const KhuVucNuoiTom = lazy(() =>
  import("../pages/khu-vuc-nuoi-tom/khu-vuc-nuoi-tom")
);
const KhuVucXuLyNuoc = lazy(() =>
  import("../pages/khu-vuc-xu-ly-nuoc/khu-vuc-xu-ly-nuoc")
);
const Home = lazy(() => import("../layouts/home"));
const Dieukhien = lazy(() => import("../Components/dieukhien/dieukhien"));
const Login = lazy(() => import("../pages/login/login"));

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <KhuVucNuoiTom />,
        },
        {
          path: "/khuvucxulynuoc",
          element: <KhuVucXuLyNuoc />,
        },
        {
          path: "/bangloi",
          element: <BangLoi />,
        },
        {
          path: "/baotri",
          element: <BaoTri />,
        },
        {
          path: "/congviec",
          element: <CongViec />,
        },
        {
          path: "/themcongviec",
          element: <ThemCongViec />,
        },
        {
          path: "/dieukhien/:id",
          element: <Dieukhien />,
        },
        {
          path: "/xemsolieu",
          element: <SoLieu />,
        },
        {
          path: "/dieukhien-boloc/:id",
          element: <Boloc />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return routing;
}
