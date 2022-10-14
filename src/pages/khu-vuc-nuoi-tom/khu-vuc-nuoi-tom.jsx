import { Button, Modal, Form, Input, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./khuvucnuoitom.scss";

export default function KhuVucNuoiTom() {
  const navigate = useNavigate();
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

  return (
    <div className="grid grid-cols-12 p-10 gap-10 kvnt-wrapper ">
      <div className="benuoi col-span-6 m-5">
        <div className="grid grid-cols-12 thongtin-benuoi">
          <span className="flex justify-center col-span-12 text-center h-16 items-center font-bold text-xl ml-24">
            Bể nuôi 1
          </span>
          <span className="p-2 indicator indicar-err col-span-12">
            console.error();
          </span>
          <div className="col-start-3 col-span-5 hienthi-be">
            <div className="flex flex-wrap justify-center ml-2 mb-6">
              <span className="p-2 indicator">Oxy:...mg/l</span>
              <span className="p-2 indicator">T:...℃</span>
            </div>
          </div>
          <div className="col-start-9 col-span-4 chucnang-be">
            <div className="mr-5">
              <Dropdown overlay={menu1} trigger={["click"]}>
                <button
                  className="btn-chucnang"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Click me
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
      </div>
      <div className="benuoi col-span-6 m-5">
        <div className="grid grid-cols-12 thongtin-benuoi">
          <span className="flex justify-center col-span-12 text-center h-16 items-center font-bold text-xl ml-24">
            Bể nuôi 2
          </span>
          <span className="p-2 indicator indicar-err col-span-12">
            console.error();
          </span>
          <div className="col-start-3 col-span-5 hienthi-be">
            <div className="flex flex-wrap justify-center ml-2 mb-6">
              <span className="p-2 indicator">Oxy:...mg/l</span>
              <span className="p-2 indicator">T:...℃</span>
            </div>
          </div>
          <div className="col-start-9 col-span-4 chucnang-be">
            <div className="mr-5">
              <Dropdown overlay={menu2} trigger={["click"]}>
                <button
                  className="btn-chucnang"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Click me
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
      </div>
      <div className="benuoi col-span-6 m-5">
        <div className="grid grid-cols-12 thongtin-benuoi">
          <span className="flex justify-center col-span-12 text-center h-16 items-center font-bold text-xl ml-24">
            Bể nuôi 3
          </span>
          <span className="p-2 indicator indicar-err col-span-12">
            console.error();
          </span>
          <div className="col-start-3 col-span-5 hienthi-be">
            <div className="flex flex-wrap justify-center ml-2 mb-6">
              <span className="p-2 indicator">Oxy:...mg/l</span>
              <span className="p-2 indicator">T:...℃</span>
            </div>
          </div>
          <div className="col-start-9 col-span-4 chucnang-be">
            <div className="mr-5">
              <Dropdown overlay={menu3} trigger={["click"]}>
                <button
                  className="btn-chucnang"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Click me
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
      </div>
      <div className="benuoi col-span-6 m-5">
        <div className="grid grid-cols-12 thongtin-benuoi">
          <span className="flex justify-center col-span-12 text-center h-16 items-center font-bold text-xl ml-24">
            Bể nuôi 4
          </span>
          <span className="p-2 indicator indicar-err col-span-12">
            console.error();
          </span>
          <div className="col-start-3 col-span-5 hienthi-be">
            <div className="flex flex-wrap justify-center ml-2 mb-6">
              <span className="p-2 indicator">Oxy:...mg/l</span>
              <span className="p-2 indicator">T:...℃</span>
            </div>
          </div>
          <div className="col-start-9 col-span-4 chucnang-be">
            <div className="mr-5">
              <Dropdown overlay={menu4} trigger={["click"]}>
                <button
                  className="btn-chucnang"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Click me
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
      </div>
      <div className="benuoi col-span-6 m-5">
        <div className="grid grid-cols-12 thongtin-benuoi">
          <span className="flex justify-center col-span-12 text-center h-16 items-center font-bold text-xl ml-24">
            Bể nuôi 5
          </span>
          <span className="p-2 indicator indicar-err col-span-12">
            console.error();
          </span>
          <div className="col-start-3 col-span-5 hienthi-be">
            <div className="flex flex-wrap justify-center ml-2 mb-6">
              <span className="p-2 indicator">Oxy:...mg/l</span>
              <span className="p-2 indicator">T:...℃</span>
            </div>
          </div>
          <div className="col-start-9 col-span-4 chucnang-be">
            <div className="mr-5">
              <Dropdown overlay={menu5} trigger={["click"]}>
                <button
                  className="btn-chucnang"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Click me
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
      </div>
      <div className="benuoi col-span-6 m-5">
        <div className="grid grid-cols-12 thongtin-benuoi">
          <span className="flex justify-center col-span-12 text-center h-16 items-center font-bold text-xl ml-24">
            Bể nuôi 6
          </span>
          <span className="p-2 indicator indicar-err col-span-12">
            console.error();
          </span>
          <div className="col-start-3 col-span-5 hienthi-be">
            <div className="flex flex-wrap justify-center ml-2 mb-6">
              <span className="p-2 indicator">Oxy:...mg/l</span>
              <span className="p-2 indicator">T:...℃</span>
            </div>
          </div>
          <div className="col-start-9 col-span-4 chucnang-be">
            <div className="mr-5">
              <Dropdown overlay={menu6} trigger={["click"]}>
                <button
                  className="btn-chucnang"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Click me
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
      </div>
    </div>
  );
}
