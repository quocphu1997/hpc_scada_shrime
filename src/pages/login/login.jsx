import { notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserLoginPostApi } from "../../services/user";
import { LOGIN_USER, USER_ACCOUNTS } from "../../store/name.types/name.type";
import "./login.scss";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result_login = await fetchUserLoginPostApi(user);
      if (result_login.status === 200) {
        localStorage.setItem(USER_ACCOUNTS, JSON.stringify(result_login.data));
        await dispatch({
          type: LOGIN_USER,
          payload: result_login.data.user_info,
        });
        notification.success({
          message: "Đăng nhập thành công",
        });
        navigate("/");
      }
    } catch (error) {
      notification.error({
        message: "Sai tài khoản hoặc mật khẩu",
      });
    }
  };

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="./images/hpc.png"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        SHRIMP COINTAINER FARM
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      {/* <p className="mb-4">Please login to your account</p> */}
                      <div className="mb-4 form-field">
                        <input
                          type="text"
                          required
                          name="username"
                          onChange={handleChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 "
                          id="Input1"
                          placeholder=" "
                        />
                        <label htmlFor="Input1" className="user-name">
                          Tài khoản
                        </label>
                      </div>
                      <div className="mb-4 form-field">
                        <input
                          type="password"
                          name="password"
                          required
                          onChange={handleChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 "
                          id="Input2"
                          placeholder=" "
                        />
                        <label htmlFor="Input2" className="user-pass">
                          Mật khẩu
                        </label>
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 login-btn"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Đăng nhập
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
