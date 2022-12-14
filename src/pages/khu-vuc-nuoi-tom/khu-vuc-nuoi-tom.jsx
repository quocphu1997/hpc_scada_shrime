import {
  Button,
  Modal,
  Form,
  Input,
  Dropdown,
  Menu,
  Space,
  notification,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./khuvucnuoitom.scss";
import { useEffect } from "react";
import { fetchCallBoxApi, fetchLoginApi } from "../../services/wecon.api";
import { useAsync } from "../../hooks/useAsync";
import { ACC_WECON, WECON_LOGIN } from "../../store/name.types/name.type";
import { useDispatch } from "react-redux";
import { BomKhongChay } from "../../Components/icons/icons";

export default function KhuVucNuoiTom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // err
  const [errBe1, setErrBe1] = useState(false);
  const [errBe2, setErrBe2] = useState(false);
  const [errBe3, setErrBe3] = useState(false);
  const [errBe4, setErrBe4] = useState(false);
  const [errBe5, setErrBe5] = useState(false);
  const [errBe6, setErrBe6] = useState(false);
  // chạy bơm
  const [runBe1, setRunBe1] = useState(false);
  const [runBe2, setRunBe2] = useState(false);
  const [runBe3, setRunBe3] = useState(false);
  const [runBe4, setRunBe4] = useState(false);
  const [runBe5, setRunBe5] = useState(false);
  const [runBe6, setRunBe6] = useState(false);
  // blink err
  const [blink1, setBlink1] = useState(false);
  const [blink2, setBlink2] = useState(false);
  const [blink3, setBlink3] = useState(false);
  const [blink4, setBlink4] = useState(false);
  const [blink5, setBlink5] = useState(false);
  const [blink6, setBlink6] = useState(false);
  //
  //
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Cài đặt");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);
  const [modal6Open, setModal6Open] = useState(false);
  //Auto/man
  const [autoMan1, setAutoMan1] = useState(false);
  const [autoMan2, setAutoMan2] = useState(false);
  const [autoMan3, setAutoMan3] = useState(false);
  const [autoMan4, setAutoMan4] = useState(false);
  const [autoMan5, setAutoMan5] = useState(false);
  const [autoMan6, setAutoMan6] = useState(false);

  //modal antd
  const showModal1 = () => {
    setModal1Open(true);
    setModalText("Cài đặt");
  };
  const handleOk1 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal1Open(false);
      setConfirmLoading(false);
      setModalText("Cài đặt");
    }, 1000);
  };
  const handleCancel1 = () => {
    console.log("Clicked cancel button");
    setModal1Open(false);
  };
  // 2
  const showModal2 = () => {
    setModalText("Cài đặt");
    setModal2Open(true);
  };
  const handleOk2 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal2Open(false);
      setConfirmLoading(false);
      setModalText("Cài đặt");
    }, 1000);
  };
  const handleCancel2 = () => {
    console.log("Clicked cancel button");
    setModal2Open(false);
  };
  // 3
  const showModal3 = () => {
    setModalText("Cài đặt");
    setModal3Open(true);
  };
  const handleOk3 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal3Open(false);
      setConfirmLoading(false);
      setModalText("Cài đặt");
    }, 1000);
  };
  const handleCancel3 = () => {
    console.log("Clicked cancel button");
    setModal3Open(false);
  };
  // 4
  const showModal4 = () => {
    setModalText("Cài đặt");
    setModal4Open(true);
  };
  const handleOk4 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal4Open(false);
      setConfirmLoading(false);
      setModalText("Cài đặt");
    }, 1000);
  };
  const handleCancel4 = () => {
    console.log("Clicked cancel button");
    setModal4Open(false);
  };
  // 5
  const showModal5 = () => {
    setModalText("Cài đặt");
    setModal5Open(true);
  };
  const handleOk5 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal5Open(false);
      setConfirmLoading(false);
      setModalText("Cài đặt");
    }, 1000);
  };
  const handleCancel5 = () => {
    console.log("Clicked cancel button");
    setModal5Open(false);
  };
  // 6
  const showModal6 = () => {
    setModalText("Cài đặt");
    setModal6Open(true);
  };
  const handleOk6 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal6Open(false);
      setConfirmLoading(false);
      setModalText("Cài đặt");
    }, 1000);
  };
  const handleCancel6 = () => {
    console.log("Clicked cancel button");
    setModal6Open(false);
  };
  // form antd
  const onFinish1 = async (values) => {
    setModalText("Đang xử lý ...");
    await console.log("Success1:", values);
    setTimeout(() => {
      setModalText("Lưu thành công");
    }, 1000);
  };
  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed1:", errorInfo);
  };
  const onFinish2 = async (values) => {
    setModalText("Đang xử lý ...");
    await console.log("Success2:", values);
    setTimeout(() => {
      setModalText("Lưu thành công");
    }, 1000);
  };
  const onFinishFailed2 = (errorInfo) => {
    console.log("Failed2:", errorInfo);
  };
  const onFinish3 = async (values) => {
    setModalText("Đang xử lý ...");
    await console.log("Success3:", values);
    setTimeout(() => {
      setModalText("Lưu thành công");
    }, 1000);
  };
  const onFinishFailed3 = (errorInfo) => {
    console.log("Failed3:", errorInfo);
  };
  const onFinish4 = async (values) => {
    setModalText("Đang xử lý ...");
    await console.log("Success4:", values);
    setTimeout(() => {
      setModalText("Lưu thành công");
    }, 1000);
  };
  const onFinishFailed4 = (errorInfo) => {
    console.log("Failed4:", errorInfo);
  };
  const onFinish5 = async (values) => {
    setModalText("Đang xử lý ...");
    await console.log("Success5:", values);
    setTimeout(() => {
      setModalText("Lưu thành công");
    }, 1000);
  };
  const onFinishFailed5 = (errorInfo) => {
    console.log("Failed5:", errorInfo);
  };
  const onFinish6 = async (values) => {
    setModalText("Đang xử lý ...");
    await console.log("Success6:", values);
    setTimeout(() => {
      setModalText("Lưu thành công");
    }, 1000);
  };
  const onFinishFailed6 = (errorInfo) => {
    console.log("Failed6:", errorInfo);
  };

  //nút chuyển chế độ
  const changeModeBe1 = () => {
    setAutoMan1(!autoMan1);
  };
  const changeModeBe2 = () => {
    setAutoMan2(!autoMan2);
  };
  const changeModeBe3 = () => {
    setAutoMan3(!autoMan3);
  };
  const changeModeBe4 = () => {
    setAutoMan4(!autoMan4);
  };
  const changeModeBe5 = () => {
    setAutoMan5(!autoMan5);
  };
  const changeModeBe6 = () => {
    setAutoMan6(!autoMan6);
  };
  // dropdown antd
  const menu1 = (
    <Menu
      items={[
        {
          label: (
            <button
              className="block btn-chucnang btn-caidat"
              onClick={showModal1}
            >
              Cài đặt
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-dieukhien"
              onClick={() => {
                navigate(`/dieukhien/${autoMan1}`);
              }}
            >
              Điều khiển
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-xsl"
              onClick={() => {
                navigate("/xemsolieu");
              }}
            >
              Xem số liệu
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  const menu2 = (
    <Menu
      items={[
        {
          label: (
            <button
              className="block btn-chucnang btn-caidat"
              onClick={showModal2}
            >
              Cài đặt
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-dieukhien"
              onClick={() => {
                navigate(`/dieukhien/${autoMan2}`);
              }}
            >
              Điều khiển
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-xsl"
              onClick={() => {
                navigate("/xemsolieu");
              }}
            >
              Xem số liệu
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  const menu3 = (
    <Menu
      items={[
        {
          label: (
            <button
              className="block btn-chucnang btn-caidat"
              onClick={showModal3}
            >
              Cài đặt
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-dieukhien"
              onClick={() => {
                navigate(`/dieukhien/${autoMan3}`);
              }}
            >
              Điều khiển
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-xsl"
              onClick={() => {
                navigate("/xemsolieu");
              }}
            >
              Xem số liệu
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  const menu4 = (
    <Menu
      items={[
        {
          label: (
            <button
              className="block btn-chucnang btn-caidat"
              onClick={showModal4}
            >
              Cài đặt
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-dieukhien"
              onClick={() => {
                navigate(`/dieukhien/${autoMan4}`);
              }}
            >
              Điều khiển
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-xsl"
              onClick={() => {
                navigate("/xemsolieu");
              }}
            >
              Xem số liệu
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  const menu5 = (
    <Menu
      items={[
        {
          label: (
            <button
              className="block btn-chucnang btn-caidat"
              onClick={showModal5}
            >
              Cài đặt
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-dieukhien"
              onClick={() => {
                navigate(`/dieukhien/${autoMan5}`);
              }}
            >
              Điều khiển
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-xsl"
              onClick={() => {
                navigate("/xemsolieu");
              }}
            >
              Xem số liệu
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  const menu6 = (
    <Menu
      items={[
        {
          label: (
            <button
              className="block btn-chucnang btn-caidat"
              onClick={showModal6}
            >
              Cài đặt
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-dieukhien"
              onClick={() => {
                navigate(`/dieukhien/${autoMan6}`);
              }}
            >
              Điều khiển
            </button>
          ),
          key: "1",
        },
        {
          label: (
            <button
              className="block btn-chucnang btn-xsl"
              onClick={() => {
                navigate("/xemsolieu");
              }}
            >
              Xem số liệu
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  // hiệu ứng err bể
  useEffect(() => {
    if (errBe1) {
      const interval = setInterval(() => {
        setBlink1(!blink1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink1]);
  //
  useEffect(() => {
    if (errBe2) {
      const interval = setInterval(() => {
        setBlink2(!blink2);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink2]);
  //
  useEffect(() => {
    if (errBe3) {
      const interval = setInterval(() => {
        setBlink3(!blink3);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink3]);
  //
  useEffect(() => {
    if (errBe4) {
      const interval = setInterval(() => {
        setBlink4(!blink4);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink4]);
  //
  useEffect(() => {
    if (errBe5) {
      const interval = setInterval(() => {
        setBlink5(!blink5);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink5]);
  //
  useEffect(() => {
    if (errBe6) {
      const interval = setInterval(() => {
        setBlink6(!blink6);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [blink6]);
  // hiệu ứng chạy
  // login wecon
  // const { state: weConAccs } = useAsync({
  //   dependancies: [],
  //   service: () => fetchLoginApi(),
  // });
  // useEffect(() => {
  //   localStorage.setItem(WECON_LOGIN, JSON.stringify(weConAccs.sid));
  //   dispatch({
  //     type: ACC_WECON,
  //     payload: weConAccs,
  //   });
  // }, [weConAccs]);
  // const checkWconSid = localStorage.getItem(WECON_LOGIN);
  // console.log(checkWconSid);
  // useEffect(() => {
  //   if (checkWconSid === undefined || !checkWconSid) {
  //     navigate("/login");
  //   }
  // }, [checkWconSid]);
  // // call box_http
  // const { state: Box_http } = useAsync({
  //   dependancies: [weConAccs],
  //   service: () => fetchCallBoxApi(),
  // });
  // console.log(Box_http);
  // lấy giá trị màn hình để breakpoint class
  const [dimention, setDimention] = useState({ width: window.innerWidth });
  const resizeScreen = () => {
    setDimention({ width: window.innerWidth });
    return window.removeEventListener("resize", resizeScreen);
  };
  window.addEventListener("resize", resizeScreen);
  return (
    <div className="flex justify-center items-center">
      <div
        className={`grid grid-cols-12 p-10  kvnt-wrapper ${
          dimention.width > 1142 && "gap-10"
        }`}
      >
        <div
          className={`benuoi  ${
            dimention.width <= 686 ? "col-span-12" : "col-span-6"
          }
          m-5`}
        >
          <span className="title-be flex justify-center ml-16">Bể nuôi 1</span>
          <div className="grid grid-cols-12 thongtin-benuoi">
            <span className="flex justify-center col-span-12 text-center h-10 items-center font-bold mr-10">
              {blink1 ? (
                <span
                  className=" indicator indicar-err col-span-12 col-start-1"
                  style={{ color: "white", background: "red" }}
                >
                  console.error();
                </span>
              ) : (
                <span
                  className=" indicator  col-span-12"
                  style={{ color: "transparent", background: "transparent" }}
                >
                  console.error();
                </span>
              )}
            </span>

            <div className="col-start-3 col-span-5 hienthi-be">
              <div className="flex flex-wrap justify-center ml-2 mb-6 solieu-be">
                <span className="p-2 indicator indicar-oxy-temp">Oxy:...mg/l</span>
                <span
                  style={{ backgroundColor: "#FFFFA7" }}
                  className="p-2 indicator indicar-oxy-temp"
                >
                  T:...℃
                </span>
              </div>
            </div>

            <div className="col-start-8 col-span-4 chucnang-be">
              <div className="mr-5 phimchucnangbe">
                <Dropdown overlay={menu1} trigger={["click"]}>
                  <button
                    className="btn-chucnang"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Chức năng
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
                {/*  */}
                {/* cài đặt */}
                <Modal
                  title={`Bể nuôi 1 - ${modalText}`}
                  open={modal1Open}
                  centered
                  onOk={handleOk1}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel1}
                >
                  <Form
                    style={{ width: "600px", padding: "10px 0px 0 50px" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish1}
                    onFinishFailed={onFinishFailed1}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Giới hạn mức thấp Oxy"
                      name="oxyLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số Oxy",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Mg/l" />
                    </Form.Item>

                    <Form.Item
                      label="Giới hạn nhiệt độ cao (°C)"
                      name="tempHigh"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      label="Giới hạn nhiệt độ thấp (°C)"
                      name="tempLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      style={{ paddingRight: "25px" }}
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                {/*  */}
                <button
                  className={`block btn-chucnang btn-chedo ${
                    autoMan1 ? "type-auto" : "type-man"
                  }`}
                  onClick={() => {
                    if (window.confirm("Bạn có chắc muốn chuyển chế độ")) {
                      changeModeBe1();
                    }
                  }}
                >
                  Chế độ: {autoMan1 === true ? "Tự động" : "Thủ công"}
                </button>
              </div>
            </div>
          </div>
          {errBe1 ? (
            blink1 ? (
              <img
                src="./images/motor_error.svg"
                className="motor-status"
                alt="piic123"
              />
            ) : (
              <img
                src="./images/motor_nor.svg"
                className="motor-status"
                alt="piic1231"
              />
            )
          ) : runBe1 ? (
            <img
              src="./images/motor_run.svg"
              className="motor-status"
              alt="piic123"
            />
          ) : (
            <img
              src="./images/motor_nor.svg"
              className="motor-status"
              alt="piic1231"
            />
          )}
        </div>
        {/* 2 */}
        <div
          className={`benuoi  ${
            dimention.width <= 686 ? "col-span-12" : "col-span-6"
          }
          m-5`}
        >
          <span className="title-be flex justify-center ml-16">Bể nuôi 2</span>
          <div className="grid grid-cols-12 thongtin-benuoi">
            <span className="flex justify-center col-span-12 text-center h-10 items-center font-bold mr-10">
              {blink2 ? (
                <span
                  className=" indicator indicar-err col-span-12 col-start-1"
                  style={{ color: "white", background: "red" }}
                >
                  console.error();
                </span>
              ) : (
                <span
                  className=" indicator col-span-12"
                  style={{ color: "transparent", background: "transparent" }}
                >
                  console.error();
                </span>
              )}
            </span>

            <div className="col-start-3 col-span-5 hienthi-be">
              <div className="flex flex-wrap justify-center ml-2 mb-6 solieu-be">
                <span className="p-2 indicator indicar-oxy-temp">Oxy:...mg/l</span>
                <span
                  style={{ backgroundColor: "#FFFFA7" }}
                  className="p-2 indicator indicar-oxy-temp"
                >
                  T:...℃
                </span>
              </div>
            </div>

            <div className="col-start-8 col-span-4 chucnang-be">
              <div className="mr-5 phimchucnangbe">
                <Dropdown overlay={menu2} trigger={["click"]}>
                  <button
                    className="btn-chucnang"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Chức năng
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
                {/*  */}
                {/* cài đặt */}
                <Modal
                  title={`Bể nuôi 2 - ${modalText}`}
                  open={modal2Open}
                  centered
                  onOk={handleOk2}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel2}
                >
                  <Form
                    style={{ width: "600px", padding: "10px 0px 0 50px" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish2}
                    onFinishFailed={onFinishFailed2}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Giới hạn mức thấp Oxy"
                      name="oxyLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số Oxy",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Mg/l" />
                    </Form.Item>

                    <Form.Item
                      label="Giới hạn nhiệt độ cao (°C)"
                      name="tempHigh"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      label="Giới hạn nhiệt độ thấp (°C)"
                      name="tempLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      style={{ paddingRight: "25px" }}
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                {/*  */}
                <button
                  className={`block btn-chucnang btn-chedo ${
                    autoMan2 ? "type-auto" : "type-man"
                  }`}
                  onClick={() => {
                    if (window.confirm("Bạn có chắc muốn chuyển chế độ")) {
                      changeModeBe2();
                    }
                  }}
                >
                  Chế độ: {autoMan2 === true ? "Tự động" : "Thủ công"}
                </button>
              </div>
            </div>
          </div>
          {errBe2 ? (
            blink2 ? (
              <img
                src="./images/motor_error.svg"
                className="motor-status"
                alt="piic123"
              />
            ) : (
              <img
                src="./images/motor_nor.svg"
                className="motor-status"
                alt="piic1231"
              />
            )
          ) : runBe2 ? (
            <img
              src="./images/motor_run.svg"
              className="motor-status"
              alt="piic123"
            />
          ) : (
            <img
              src="./images/motor_nor.svg"
              className="motor-status"
              alt="piic1231"
            />
          )}
        </div>
        {/* 3 */}
        <div
          className={`benuoi  ${
            dimention.width <= 686 ? "col-span-12" : "col-span-6"
          }
          m-5`}
        >
          <span className="title-be flex justify-center ml-16">Bể nuôi 3</span>
          <div className="grid grid-cols-12 thongtin-benuoi">
            <span className="flex justify-center col-span-12 text-center h-10 items-center font-bold mr-10">
              {blink3 ? (
                <span
                  className=" indicator indicar-err col-span-12 col-start-1"
                  style={{ color: "white", background: "red" }}
                >
                  console.error();
                </span>
              ) : (
                <span
                  className=" indicator  col-span-12"
                  style={{ color: "transparent", background: "transparent" }}
                >
                  console.error();
                </span>
              )}
            </span>

            <div className="col-start-3 col-span-5 hienthi-be">
              <div className="flex flex-wrap justify-center ml-2 mb-6 solieu-be">
                <span className="p-2 indicator indicar-oxy-temp">Oxy:...mg/l</span>
                <span
                  style={{ backgroundColor: "#FFFFA7" }}
                  className="p-2 indicator indicar-oxy-temp"
                >
                  T:...℃
                </span>
              </div>
            </div>

            <div className="col-start-8 col-span-4 chucnang-be">
              <div className="mr-5 phimchucnangbe">
                <Dropdown overlay={menu3} trigger={["click"]}>
                  <button
                    className="btn-chucnang"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Chức năng
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
                {/*  */}
                {/* cài đặt */}
                <Modal
                  title={`Bể nuôi 3 - ${modalText}`}
                  open={modal3Open}
                  centered
                  onOk={handleOk3}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel3}
                >
                  <Form
                    style={{ width: "600px", padding: "10px 0px 0 50px" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish3}
                    onFinishFailed={onFinishFailed3}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Giới hạn mức thấp Oxy"
                      name="oxyLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số Oxy",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Mg/l" />
                    </Form.Item>

                    <Form.Item
                      label="Giới hạn nhiệt độ cao (°C)"
                      name="tempHigh"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      label="Giới hạn nhiệt độ thấp (°C)"
                      name="tempLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      style={{ paddingRight: "25px" }}
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                {/*  */}
                <button
                  className={`block btn-chucnang btn-chedo ${
                    autoMan3 ? "type-auto" : "type-man"
                  }`}
                  onClick={() => {
                    if (window.confirm("Bạn có chắc muốn chuyển chế độ")) {
                      changeModeBe3();
                    }
                  }}
                >
                  Chế độ: {autoMan3 === true ? "Tự động" : "Thủ công"}
                </button>
              </div>
            </div>
          </div>
          {errBe3 ? (
            blink3 ? (
              <img
                src="./images/motor_error.svg"
                className="motor-status"
                alt="piic123"
              />
            ) : (
              <img
                src="./images/motor_nor.svg"
                className="motor-status"
                alt="piic1231"
              />
            )
          ) : runBe3 ? (
            <img
              src="./images/motor_run.svg"
              className="motor-status"
              alt="piic123"
            />
          ) : (
            <img
              src="./images/motor_nor.svg"
              className="motor-status"
              alt="piic1231"
            />
          )}
        </div>
        {/* 4 */}
        <div
          className={`benuoi  ${
            dimention.width <= 686 ? "col-span-12" : "col-span-6"
          }
          m-5`}
        >
          <span className="title-be flex justify-center ml-16">Bể nuôi 4</span>
          <div className="grid grid-cols-12 thongtin-benuoi">
            <span className="flex justify-center col-span-12 text-center h-10 items-center font-bold mr-10">
              {blink4 ? (
                <span
                  className=" indicator indicar-err col-span-12 col-start-1"
                  style={{ color: "white", background: "red" }}
                >
                  console.error();
                </span>
              ) : (
                <span
                  className=" indicator  col-span-12"
                  style={{ color: "transparent", background: "transparent" }}
                >
                  console.error();
                </span>
              )}
            </span>

            <div className="col-start-3 col-span-5 hienthi-be">
              <div className="flex flex-wrap justify-center ml-2 mb-6 solieu-be">
                <span className="p-2 indicator indicar-oxy-temp">Oxy:...mg/l</span>
                <span
                  style={{ backgroundColor: "#FFFFA7" }}
                  className="p-2 indicator indicar-oxy-temp"
                >
                  T:...℃
                </span>
              </div>
            </div>

            <div className="col-start-8 col-span-4 chucnang-be">
              <div className="mr-5 phimchucnangbe">
                <Dropdown overlay={menu4} trigger={["click"]}>
                  <button
                    className="btn-chucnang"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Chức năng
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
                {/*  */}
                {/* cài đặt */}
                <Modal
                  title={`Bể nuôi 4 - ${modalText}`}
                  open={modal4Open}
                  centered
                  onOk={handleOk4}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel4}
                >
                  <Form
                    style={{ width: "600px", padding: "10px 0px 0 50px" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish4}
                    onFinishFailed={onFinishFailed4}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Giới hạn mức thấp Oxy"
                      name="oxyLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số Oxy",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Mg/l" />
                    </Form.Item>

                    <Form.Item
                      label="Giới hạn nhiệt độ cao (°C)"
                      name="tempHigh"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      label="Giới hạn nhiệt độ thấp (°C)"
                      name="tempLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      style={{ paddingRight: "25px" }}
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                {/*  */}
                <button
                  className={`block btn-chucnang btn-chedo ${
                    autoMan4 ? "type-auto" : "type-man"
                  }`}
                  onClick={() => {
                    if (window.confirm("Bạn có chắc muốn chuyển chế độ")) {
                      changeModeBe4();
                    }
                  }}
                >
                  Chế độ: {autoMan4 === true ? "Tự động" : "Thủ công"}
                </button>
              </div>
            </div>
          </div>
          {errBe4 ? (
            blink4 ? (
              <img
                src="./images/motor_error.svg"
                className="motor-status"
                alt="piic123"
              />
            ) : (
              <img
                src="./images/motor_nor.svg"
                className="motor-status"
                alt="piic1231"
              />
            )
          ) : runBe4 ? (
            <img
              src="./images/motor_run.svg"
              className="motor-status"
              alt="piic123"
            />
          ) : (
            <img
              src="./images/motor_nor.svg"
              className="motor-status"
              alt="piic1231"
            />
          )}
        </div>
        {/* 5 */}
        <div
          className={`benuoi  ${
            dimention.width <= 686 ? "col-span-12" : "col-span-6"
          }
          m-5`}
        >
          <span className="title-be flex justify-center ml-16">Bể nuôi 5</span>
          <div className="grid grid-cols-12 thongtin-benuoi">
            <span className="flex justify-center col-span-12 text-center h-10 items-center font-bold mr-10">
              {blink5 ? (
                <span
                  className=" indicator indicar-err col-span-12 col-start-1"
                  style={{ color: "white", background: "red" }}
                >
                  console.error();
                </span>
              ) : (
                <span
                  className=" indicator  col-span-12"
                  style={{ color: "transparent", background: "transparent" }}
                >
                  console.error();
                </span>
              )}
            </span>

            <div className="col-start-3 col-span-5 hienthi-be">
              <div className="flex flex-wrap justify-center ml-2 mb-6 solieu-be">
                <span className="p-2 indicator indicar-oxy-temp">Oxy:...mg/l</span>
                <span
                  style={{ backgroundColor: "#FFFFA7" }}
                  className="p-2 indicator indicar-oxy-temp"
                >
                  T:...℃
                </span>
              </div>
            </div>

            <div className="col-start-8 col-span-4 chucnang-be">
              <div className="mr-5 phimchucnangbe">
                <Dropdown overlay={menu5} trigger={["click"]}>
                  <button
                    className="btn-chucnang"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Chức năng
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
                {/*  */}
                {/* cài đặt */}
                <Modal
                  title={`Bể nuôi 5 - ${modalText}`}
                  open={modal5Open}
                  centered
                  onOk={handleOk5}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel5}
                >
                  <Form
                    style={{ width: "600px", padding: "10px 0px 0 50px" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish5}
                    onFinishFailed={onFinishFailed5}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Giới hạn mức thấp Oxy"
                      name="oxyLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số Oxy",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Mg/l" />
                    </Form.Item>

                    <Form.Item
                      label="Giới hạn nhiệt độ cao (°C)"
                      name="tempHigh"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      label="Giới hạn nhiệt độ thấp (°C)"
                      name="tempLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      style={{ paddingRight: "25px" }}
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                {/*  */}
                <button
                  className={`block btn-chucnang btn-chedo ${
                    autoMan5 ? "type-auto" : "type-man"
                  }`}
                  onClick={() => {
                    if (window.confirm("Bạn có chắc muốn chuyển chế độ")) {
                      changeModeBe5();
                    }
                  }}
                >
                  Chế độ: {autoMan5 === true ? "Tự động" : "Thủ công"}
                </button>
              </div>
            </div>
          </div>
          {errBe5 ? (
            blink5 ? (
              <img
                src="./images/motor_error.svg"
                className="motor-status"
                alt="piic123"
              />
            ) : (
              <img
                src="./images/motor_nor.svg"
                className="motor-status"
                alt="piic1231"
              />
            )
          ) : runBe5 ? (
            <img
              src="./images/motor_run.svg"
              className="motor-status"
              alt="piic123"
            />
          ) : (
            <img
              src="./images/motor_nor.svg"
              className="motor-status"
              alt="piic1231"
            />
          )}
        </div>
        {/* 6 */}
        <div
          className={`benuoi  ${
            dimention.width <= 686 ? "col-span-12" : "col-span-6"
          }
          m-5`}
        >
          <span className="title-be flex justify-center ml-16">Bể nuôi 6</span>
          <div className="grid grid-cols-12 thongtin-benuoi">
            <span className="flex justify-center col-span-12 text-center h-10 items-center font-bold mr-10">
              {blink6 ? (
                <span
                  className=" indicator indicar-err col-span-12 col-start-1"
                  style={{ color: "white", background: "red" }}
                >
                  console.error();
                </span>
              ) : (
                <span
                  className=" indicator  col-span-12"
                  style={{ color: "transparent", background: "transparent" }}
                >
                  console.error();
                </span>
              )}
            </span>

            <div className="col-start-3 col-span-5 hienthi-be">
              <div className="flex flex-wrap justify-center ml-2 mb-6 solieu-be">
                <span className="p-2 indicator indicar-oxy-temp">Oxy:...mg/l</span>
                <span
                  style={{ backgroundColor: "#FFFFA7" }}
                  className="p-2 indicator indicar-oxy-temp"
                >
                  T:...℃
                </span>
              </div>
            </div>

            <div className="col-start-8 col-span-4 chucnang-be">
              <div className="mr-5 phimchucnangbe">
                <Dropdown overlay={menu6} trigger={["click"]}>
                  <button
                    className="btn-chucnang"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Chức năng
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
                {/*  */}
                {/* cài đặt */}
                <Modal
                  title={`Bể nuôi 6 - ${modalText}`}
                  open={modal6Open}
                  centered
                  onOk={handleOk6}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel6}
                >
                  <Form
                    style={{ width: "600px", padding: "10px 0px 0 50px" }}
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish6}
                    onFinishFailed={onFinishFailed6}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Giới hạn mức thấp Oxy"
                      name="oxyLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số Oxy",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Mg/l" />
                    </Form.Item>

                    <Form.Item
                      label="Giới hạn nhiệt độ cao (°C)"
                      name="tempHigh"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      label="Giới hạn nhiệt độ thấp (°C)"
                      name="tempLow"
                      rules={[
                        {
                          required: true,
                          message: "Chưa nhập thông số nhiệt độ",
                        },
                      ]}
                    >
                      <Input style={{ width: "150px" }} placeholder="Cencius" />
                    </Form.Item>
                    <Form.Item
                      style={{ paddingRight: "25px" }}
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                {/*  */}
                <button
                  className={`block btn-chucnang btn-chedo ${
                    autoMan6 ? "type-auto" : "type-man"
                  }`}
                  onClick={() => {
                    if (window.confirm("Bạn có chắc muốn chuyển chế độ")) {
                      changeModeBe6();
                    }
                  }}
                >
                  Chế độ: {autoMan6 === true ? "Tự động" : "Thủ công"}
                </button>
              </div>
            </div>
          </div>
          {errBe6 ? (
            blink6 ? (
              <img
                src="./images/motor_error.svg"
                className="motor-status"
                alt="piic123"
              />
            ) : (
              <img
                src="./images/motor_nor.svg"
                className="motor-status"
                alt="piic1231"
              />
            )
          ) : runBe6 ? (
            <img
              src="./images/motor_run.svg"
              className="motor-status"
              alt="piic123"
            />
          ) : (
            <img
              src="./images/motor_nor.svg"
              className="motor-status"
              alt="piic1231"
            />
          )}
        </div>
      </div>
    </div>
  );
}
