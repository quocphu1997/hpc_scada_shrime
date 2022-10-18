import { Avatar } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_USER, USER_ACCOUNTS } from "../../store/name.types/name.type";
import "./header.scss";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userAc } = useSelector((state) => state.quanlyUserReducer);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem(USER_ACCOUNTS);
    dispatch({
      type: LOGIN_USER,
      payload: null,
    });
    navigate("/login");
  };
  return (
    <header className="p-4 header-wrapper dark:text-gray-900">
      <div className="container flex justify-between h-10 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            className="w-24 h-20  "
            src="../images/hpc.png"
            alt="logo-header"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className={({ isActive }) =>
                "flex items-center px-4  " +
                (isActive ? "border-b-4 border-amber-500" : isActive)
              }
            >
              Khu vực nuôi tôm
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/khuvucxulynuoc"
              className={({ isActive }) =>
                "flex items-center px-4  " +
                (isActive ? "border-b-4 border-amber-500" : isActive)
              }
            >
              Khu vực xử lý nước
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/bangloi"
              className={({ isActive }) =>
                "flex items-center px-4  " +
                (isActive ? "border-b-4 border-amber-500" : isActive)
              }
            >
              Bảng lỗi
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/baotri"
              className={({ isActive }) =>
                "flex items-center px-4  " +
                (isActive ? "border-b-4 border-amber-500" : isActive)
              }
            >
              Bảo trì
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/congviec"
              className={({ isActive }) =>
                "flex items-center px-4  " +
                (isActive ? "border-b-4 border-amber-500" : isActive)
              }
            >
              Công việc
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0  lg:flex">
          {userAc ? (
            <>
              <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                {userAc.user_info?.last_name.substr(0, 1)}
              </Avatar>
              <button
                className="self-center px-2  ml-3 py-2 rounded bg-violet-400"
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <button
              className="self-center px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900 respone-login"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
          )}
        </div>
        <input id="show-menu-header" type="checkbox" />
        <label htmlFor="show-menu-header" className="main-overlay"></label>
        <div className="nav-menu-tablet">
          <ul className="items-stretch space-y-3 hidden tabs-select-menu">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className={({ isActive }) =>
                  "flex items-center p-2 " +
                  (isActive ? "border-b-4 border-amber-500" : isActive)
                }
              >
                Khu vực nuôi tôm
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/khuvucxulynuoc"
                className={({ isActive }) =>
                  "flex items-center p-2  " +
                  (isActive ? "border-b-4 border-amber-500" : isActive)
                }
              >
                Khu vực xử lý nước
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/bangloi"
                className={({ isActive }) =>
                  "flex items-center p-2  " +
                  (isActive ? "border-b-4 border-amber-500" : isActive)
                }
              >
                Bảng lỗi
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/baotri"
                className={({ isActive }) =>
                  "flex items-center p-2  " +
                  (isActive ? "border-b-4 border-amber-500" : isActive)
                }
              >
                Bảo trì
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/congviec"
                className={({ isActive }) =>
                  "flex items-center p-2  " +
                  (isActive ? "border-b-4 border-amber-500" : isActive)
                }
              >
                Công việc
              </NavLink>
            </li>
          </ul>
        </div>
        <label
          htmlFor="show-menu-header"
          className="p-4 lg:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </header>
  );
}
